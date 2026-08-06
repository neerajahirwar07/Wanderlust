if(process.env.NODE_ENV!="production"){
  require('dotenv').config();
}
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
const listingsRouter=require("./routes/listings.js");
const reviewsRouter=require("./routes/review.js");
const userRouter=require("./routes/user.js");



const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const sessionOption={
    secret:"mysupersecretstring",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now()+ 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    },
};
app.use(session(sessionOption));
app.use(flash());

// logoin 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// flash 
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser=req.user;
    next();
});

app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

// const  db_url=process.env.ATLAS_URL;
// console.log("ATLAS_URL =", process.env.ATLAS_URL);
let mongodb_url="mongodb://127.0.0.1:27017/Wanderlust";
main().then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect(mongodb_url);
}

// app.get("/",(req,res)=>{
//     res.send("i am root!");
// })

// cookie- parser
// app.get("/greet",(req,res)=>{
//    let {name="anonomous"}=req.cookies;
//     res.send(`i am :${name}`);
// })

// Error middleware 

app.use((req, res, next) => {
    const err = new Error("Page Not Found");
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
 let {status=500,message="some error "}=err;
  res.render("listings/error.ejs",{message});
})

app.listen(8080,()=>{
    console.log("port 8080 is listening");
});
