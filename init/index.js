const mongoose=require("mongoose");
const initdata=require("./data.js");
const listing=require("../models/listing.js");

main().then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

const InitDB= async ()=>{
 await listing.deleteMany({});
 initdata.data=initdata.data.map((obj)=>({...obj,owner:"6a59fd3f537c5460d925ca64"}));
 console.log(initdata.data);
 await listing.insertMany(initdata.data);

 console.log("data was reinitalized");

}
InitDB();