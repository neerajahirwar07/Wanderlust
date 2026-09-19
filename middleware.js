
const listing=require("./models/listing.js");
const ExpressError=require("./utilis/ExpressError.js");
const {listingSchema,ReviewSchema,BookingSchema}=require("./schema.js");
const Review=require("./models/review.js");
const Booking=require("./models/booking.js");

module.exports.isLogedin=(req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be loged in !");
       return  res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner=async(req,res,next)=>{
     let {id}=req.params;
     let currlisting =await listing.findById(id);
     if(!currlisting.owner._id.equals(res.locals.currUser._id)){   
       req.flash("error"," you are not owner!");
      return  res.redirect(`/listings/${id}`);
     }
     next();
}

module.exports.validateListing=(req,res,next)=>{
   let {error}= listingSchema.validate(req.body);
    if(error){
        console.log(error);
        console.log(error.message);
        throw new ExpressError(400,error);
    }else {
        next();
    }
}

module.exports.validateReview=(req,res,next)=>{
   let {error}= ReviewSchema.validate(req.body);
    if(error){
        console.log(error);
        console.log(error.message);
        throw new ExpressError(400,error);
    }else {
        next();
    }
}

module.exports.validateBooking=(req,res,next)=>{
   let {error}= BookingSchema.validate(req.body);
    if(error){
        console.log(error);
        console.log(error.message);
        throw new ExpressError(400,error);
    }else {
        next();
    }
}

module.exports.isBookingOwner=async(req,res,next)=>{
     let {bookingId}=req.params;
     let booking=await Booking.findById(bookingId);
     if(!booking){
        req.flash("error"," Booking not found!");
        return res.redirect("/bookings");
     }
     if(!booking.user.equals(res.locals.currUser._id)){
       req.flash("error"," you are not the owner of this booking!");
      return  res.redirect("/bookings");
     }
     next();
}

module.exports.isBookingListingOwner=async(req,res,next)=>{
     let {bookingId}=req.params;
     let booking=await Booking.findById(bookingId).populate("listing");
     if(!booking){
        req.flash("error"," Booking not found!");
        return res.redirect("/bookings/owner");
     }
     if(!booking.listing.owner.equals(res.locals.currUser._id)){
       req.flash("error"," you are not the owner of this listing!");
      return  res.redirect("/bookings/owner");
     }
     next();
}

module.exports.isReviewAuthor=async(req,res,next)=>{
     let {id,reviewId}=req.params;
     console.log(reviewId);
     let review =await Review.findById(reviewId);
     if(!review.author.equals(res.locals.currUser._id)){   
       req.flash("error"," you are not author of this reviews !");
      return  res.redirect(`/listings/${id}`);
     }
     next();
   
}