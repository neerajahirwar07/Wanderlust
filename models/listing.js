const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const Review=require("./review.js");
const listingSchema=new Schema({
    title: {
        type:String,
        required :true
    },
    description:{
        type:String,
        required :true
    },
    image: {
        // type:String,
        // default:"https://picsum.photos/800/600",
        // set:(v)=> v==="" ?"https://picsum.photos/800/600":v,
        url:String,
        filename:String,
    },
    price: {
        type:Number,
        required :true
    },
    location: {
        type:String,
        required :true
    },
    country: {
        type:String,
        required :true
    },
  
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",

        }
    ],

    owner:{
          type:Schema.Types.ObjectId,
          ref:"User",
    },

})

listingSchema.post("findOneAndDelete",async(listing)=>{
    if (listing){
    await Review.deleteMany({_id:{$in: listing.reviews}});
    }
    console.log("delete reviews  ");
});
const listing=mongoose.model("listing",listingSchema);
module.exports=listing;

