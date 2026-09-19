const express = require("express");
const router = express.Router();
const wrapAsync = require("../utilis/wrapAsync.js");
const { isLogedin, isBookingOwner,isBookingListingOwner } = require("../middleware.js");
const bookingcontroller = require("../controllers/bookings.js");

// My Trips (customer view of their own bookings)
router.get("/", isLogedin, wrapAsync(bookingcontroller.myBookings));

// Booking Requests (owner/host view of bookings on their listings)
router.get("/owner", isLogedin, wrapAsync(bookingcontroller.ownerBookings));

// Verify Razorpay payment after checkout popup completes
router.post("/verify", isLogedin, wrapAsync(bookingcontroller.verifyPayment));

// Cancel a booking
router.delete("/:bookingId", isLogedin, isBookingOwner, wrapAsync(bookingcontroller.cancelBooking));

// Owner cancels a booking and refunds the payment
router.post("/:bookingId/refund", isLogedin, isBookingListingOwner, wrapAsync(bookingcontroller.ownerCancelBooking));

module.exports = router;