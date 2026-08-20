
const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utilis/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const usercontroller=require("../controllers/users.js");

//signup route
router.get("/signup",(req,res)=>{
  res.render("signup/sign.ejs");
});
router.post("/signup",wrapAsync(usercontroller.usersignup));
// login
router.get("/login",(req,res)=>{
 res.render("signup/login.ejs");
});

router.post("/login",  saveRedirectUrl,  passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}) ,wrapAsync(usercontroller.userlogin));

//logout 
router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return  next(err);
        }
        req.flash("success","you are logged out on Wanderlust!");
        res.redirect("/listings");
    })
   
})
module.exports=router;
