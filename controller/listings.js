const listing=require("../models/listing");
const { updateMany } = require("../models/review");

module.exports.index=async(req,res)=>{
 let Alllisting=  await listing.find({});
 res.render("listings/index.ejs",{Alllisting});      
}

module.exports.Show=async(req,res)=>{
    let {id}=req.params;
    let fulldetail=  await listing.findById(id).populate({path:"reviews", populate:{path:"author"}}).populate("owner");
    if(!fulldetail){
    req.flash("error","listing is not exist");
    return  res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing:fulldetail});
}

module.exports.New=async(req,res)=>{
  let url=req.file.path;
  let filename=req.file.filename;
  console.log(url);
  console.log(filename);
   const  newlisting= req.body.list;
   newlisting.owner=req.user._id;
   newlisting.image={
     url:url,
     filename:filename,
   }
   await new listing(newlisting).save();
    console.log(newlisting);
   req.flash("success","New Listing Created !");
  
  res.redirect("/listings");
}
// Update route 
module.exports.Update=async(req,res)=>{  
     let {id}=req.params;
      let update=await listing.findById(id);   
      if(!update){
         req.flash("error"," Oops sorry :) Listing is not exist !");
         return res.redirect("/listings");
      }
     res.render("listings/edit.ejs",{listing:update});   
}
module.exports.PutUpdate=async(req,res)=>{
     let {id}=req.params;
     let currlisting =await listing.findById(id);
    
     if(!currlisting.owner._id.equals(res.locals.currUser._id)){   
      req.flash("error"," you are not owner!");
     return  res.redirect(`/listings/${id}`);
     }
   let updatelisting= await listing.findByIdAndUpdate(id,{...req.body.list});
 
  if(typeof req.file!=="undefined"){
  let url=req.file.path;
  let filename=req.file.filename;
  updatelisting.image={url,filename};
  await updatelisting.save();
  }

    req.flash("success"," Listing updated !");
    res.redirect(`/listings/${id}`);   
}
//Delete route 
module.exports.Delete=async(req,res)=>{
     let {id}=req.params;
     await listing.findByIdAndDelete(id);
      req.flash("success"," Listing deleted !");
     res.redirect("/listings");
}