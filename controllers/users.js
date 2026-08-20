const User=require("../models/user.js");

// user signup 
module.exports.usersignup=async(req,res)=>{
    try{
        let {username,email,password}=req.body;
        let newuser= new User({username,email});
        let registerduser=await  User.register(newuser,password);  // its save user detail
        req.login(registerduser,(err)=>{
            if(err){
                return next(err);
            }
        req.flash("success","welcome on  wanderlust!");
        res.redirect("/listings");
        })
        
    }catch(err){
       req.flash("error","user already exist on  wanderlust!");
        res.redirect("/login");
    }
  
}
// user login 
module.exports.userlogin=async(req,res)=>{
      if(!res.locals.redirectUrl){
        req.flash("success","welcome back to Wanderlust!");
        return res.redirect("/listings");
      }
     req.flash("success","welcome on Wanderlust!");
     res.redirect(res.locals.redirectUrl);
             
}