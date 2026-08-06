const express=require("express");
const app=express();
const session=require("express-session");
const flash=require("connect-flash");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(session({secret:"mysecretstring",resave:false, saveUninitialized:true}));
app.use(flash());

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    req.session.name=name;
    req.flash("success","user registerd successfuly !");
    res.redirect("/hello");
});
app.get("/hello",(req,res)=>{
    res.locals.msg=req.flash("success");
    res.locals.name=req.session.name;  // locals-> store the data 
    res.render("page.ejs");
})

// app.get("/reqcount",(req,res)=>{
//    if(req.session.count){
//     req.session.count++;
//    }else {
//     req.session.count=1;
//    }
//    res.send(`you sent a request ${req.session.count} times`);
// })
app.listen(3030,()=>{
    console.log("port 3030 is listiing !");
})