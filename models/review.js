const { required } = require("joi");
const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ReviewSchema=new Schema({
     comment:{
        type:String,
        min:1,
        max:200,
        // required:true,
    },
    rating: {
        type:Number,
        required :true,
    },
   
   created_At:{
    type:Date,
    default:Date.now(),
    required:true,

  },
  author:{
    type:Schema.Types.ObjectId,
    ref:"User",
  }
})

module.exports=mongoose.model("Review",ReviewSchema);


