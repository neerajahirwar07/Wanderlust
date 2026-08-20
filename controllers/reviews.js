const listing=require("../models/listing.js");
const Review=require("../models/review.js");
// post reviews
module.exports.reviewpost=async(req,res)=>{
    let {id}=req.params;
    let list= await listing.findById(id);
    let newreview=new Review(req.body.review);
    list.reviews.push(newreview);
    newreview.author=req.user._id;
    await newreview.save();
    await list.save();
    req.flash("success"," New Review created !");
   res.redirect(`/listings/${id}`);
}

// delete reviews
module.exports.reviewdelete=async(req,res)=>{
   let {id,reviewId}=req.params;
   await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
   await Review.findByIdAndDelete(reviewId);
   req.flash("success","  Review Deleted !");
   res.redirect(`/listings/${id}`);
}