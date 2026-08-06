const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utilis/wrapAsync.js");


const { wrap } = require("module");
const { Script } = require("vm");
const {isLogedin,isOwner,validateListing}=require("../middleware.js");
const listingcontroller=require("../controller/listings.js");
const multer=require("multer");
const {storage}=require("../cloudeConfig.js");
const upload = multer({storage});


// router. route 
router.route("/")
.get(wrapAsync(listingcontroller.index))
.post(isLogedin,upload.single("list[image]"),validateListing, wrapAsync(listingcontroller.New));

// index Route Show all 

// New Route 
router.get("/new",isLogedin,(req,res)=>{
    res.render("listings/new.ejs");
}) 


// Show Route  Descirpt Detail
// router.get("/:id",isLogedin,wrapAsync(listingcontroller.Show));

// Create Route new listing
// router.post("/",isLogedin,validateListing, wrapAsync(listingcontroller.New));

router.route("/:id")
.get(isLogedin,wrapAsync(listingcontroller.Show))
.put(isLogedin,isOwner,upload.single("list[image]"),validateListing,wrapAsync(listingcontroller.PutUpdate))
.delete(isLogedin,isOwner,wrapAsync(listingcontroller.Delete));

// Update Route /edit 
router.get("/:id/edit",isLogedin,isOwner,validateListing,wrapAsync(listingcontroller.Update));

// router.put("/:id",isLogedin,isOwner,wrapAsync(listingcontroller.PutUpdate));

// Delete Post 
// router.delete("/:id",isLogedin,isOwner,wrapAsync(listingcontroller.Delete));

module.exports=router;