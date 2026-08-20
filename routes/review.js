const express=require("express");
const router=express.Router({mergeParams: true});
const wrapAsync=require("../utilis/wrapAsync.js");
const { wrap } = require("module");
const {validateReview,isLogedin,isReviewAuthor}=require("../middleware.js");

const reviewcontroller=require("../controllers/reviews.js");


// post new review 
router.post("/",  isLogedin, validateReview, wrapAsync(reviewcontroller.reviewpost));

// Delete Review Route 
router.delete("/:reviewId", isReviewAuthor, wrapAsync(reviewcontroller.reviewdelete));

module.exports=router;