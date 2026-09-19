const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utilis/wrapAsync.js");
const { isLogedin, validateBooking } = require("../middleware.js");
const bookingcontroller = require("../controllers/bookings.js");
const Listing = require("../models/listing.js");

router.get("/new", isLogedin, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }
  let discount = req.query.discount === "true";
  res.render("bookings/new.ejs", { listing,discount });
}));

// Create Booking Route (nested under /listings/:id/bookings)
router.post("/", isLogedin, validateBooking, wrapAsync(bookingcontroller.createBooking));

module.exports = router;