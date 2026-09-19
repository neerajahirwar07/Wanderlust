
const Razorpay = require("razorpay");
const crypto = require("crypto");
const listing = require("../models/listing.js");
const Booking = require("../models/booking.js");

const razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});
// Create a new booking for a listing
module.exports.createBooking = async (req, res) => {
    let { id } = req.params;
    let currlisting = await listing.findById(id);

    if (!currlisting) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    let { checkIn, checkOut, guests } = req.body.booking;
    checkIn = new Date(checkIn);
    checkOut = new Date(checkOut);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn < today) {
        req.flash("error", "Check-in date cannot be in the past.");
        return res.redirect(`/listings/${id}`);
    }

    // Prevent double booking: reject if any existing (non-cancelled) booking
    // for this listing overlaps with the requested date range.
        // Prevent double booking: reject if any existing (non-cancelled) booking
      let nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    if (nights <= 0) {
        req.flash("error", "Check-out date must be after check-in date.");
        return res.redirect(`/listings/${id}`);
    }

    // Only bookings that are actually PAID block out dates.
    // (A pending/unpaid booking someone abandoned shouldn't lock the calendar.)
    let overlapping = await Booking.findOne({
        listing: id,
        paymentStatus: "paid",
        checkIn: { $lt: checkOut },
        checkOut: { $gt: checkIn },
    });

    if (overlapping) {
        req.flash("error", "These dates are already booked for this listing. Please choose different dates.");
        return res.redirect(`/listings/${id}`);
    }

        let { discountApplied } = req.body.booking;
    discountApplied = discountApplied === "true" || discountApplied === true;

    let totalPrice = nights * currlisting.price;
    if (discountApplied) {
        totalPrice = Math.round(totalPrice * 0.85);
    }

    let newBooking = new Booking({
        listing: id,
        user: req.user._id,
        checkIn,
        checkOut,
        guests,
        nights,
        totalPrice,
        status: "pending",
        paymentStatus: "pending",
        discountApplied,
    });
    
    // Razorpay expects amount in the smallest currency unit (paise for INR)
    let order = await razorpayInstance.orders.create({
        amount: totalPrice * 100,
        currency: "INR",
        receipt: `booking_${newBooking._id}`,
        payment_capture: 1,
    });

    newBooking.razorpayOrderId = order.id;
    await newBooking.save();

    res.render("bookings/checkout.ejs", {
        booking: newBooking,
        listing: currlisting,
        order,
        razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    });
};

// Step 2: Called via fetch() from the checkout page after Razorpay's
// popup reports success. Verifies the signature server-side before
// trusting the payment (never trust a client-reported "success").
module.exports.verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, bookingId } = req.body;

    let booking = await Booking.findById(bookingId);
    if (!booking) {
        return res.status(404).json({ success: false, message: "Booking not found" });
    }
    if (!booking.user.equals(req.user._id)) {
        return res.status(403).json({ success: false, message: "Not your booking" });
    }

    let generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if (generatedSignature === razorpay_signature) {
        booking.status = "confirmed";
        booking.paymentStatus = "paid";
        booking.razorpayPaymentId = razorpay_payment_id;
        await booking.save();
        return res.json({ success: true, redirectUrl: "/bookings" });
    } else {
        booking.paymentStatus = "failed";
        await booking.save();
        return res.status(400).json({ success: false, message: "Payment verification failed" });
    }
};

// Show all bookings made by the logged-in user (customer view)
module.exports.myBookings = async (req, res) => {
    let bookings = await Booking.find({ user: req.user._id })
        .populate("listing")
        .sort({ createdAt: -1 });
    res.render("bookings/index.ejs", { bookings });
};

// Cancel a booking (only the booking's own user can cancel)
module.exports.cancelBooking = async (req, res) => {
    let { bookingId } = req.params;
    let booking = await Booking.findById(bookingId);
    booking.status = "cancelled";
    await booking.save();
    req.flash("success", "Booking cancelled.");
    res.redirect("/bookings");
};
// Show all bookings received on listings owned by the logged-in user (owner/host view)
module.exports.ownerBookings = async (req, res) => {
    let myListings = await listing.find({ owner: req.user._id });
    let listingIds = myListings.map((l) => l._id);
        let bookings = await Booking.find({ listing: { $in: listingIds }, paymentStatus: { $in: ["paid", "refunded"] } })
        .populate("listing")
        .populate("user")
        .sort({ createdAt: -1 });
    res.render("bookings/owner.ejs", { bookings });
};

// Owner cancels a booking and refunds the payment via Razorpay
module.exports.ownerCancelBooking = async (req, res) => {
    let { bookingId } = req.params;
    let booking = await Booking.findById(bookingId);

    if (!booking) {
        req.flash("error", "Booking not found.");
        return res.redirect("/bookings/owner");
    }

    if (booking.paymentStatus !== "paid") {
        req.flash("error", "Only paid bookings can be refunded.");
        return res.redirect("/bookings/owner");
    }

    try {
        let refund = await razorpayInstance.payments.refund(booking.razorpayPaymentId, {
            amount: booking.totalPrice * 100, // full refund, in paise
        });

        booking.status = "cancelled";
        booking.paymentStatus = "refunded";
        booking.razorpayRefundId = refund.id;
        await booking.save();

        req.flash("success", "Booking cancelled and payment refunded.");
    } catch (err) {
        console.log(err);
        req.flash("error", "Refund failed. Please try again or contact support.");
    }

    res.redirect("/bookings/owner");
};
