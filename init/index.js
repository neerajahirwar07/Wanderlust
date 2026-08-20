const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config({
    path: "../.env"
});
const mongoose=require("mongoose");
const initdata=require("./data.js");
const listing=require("../models/listing.js");

main().then(()=>{
    console.log("connect to database");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    //  db_url="mongodb://127.0.0.1:27017/Wanderlust"
    console.log("ATLAS_URL =", process.env.ATLAS_URL);
    await mongoose.connect(process.env.ATLAS_URL);
}

const InitDB= async ()=>{
 await listing.deleteMany({});
 initdata.data=initdata.data.map((obj)=>({...obj,owner:"6a834c9f9b8e045e977b3b30"}));
 console.log(initdata.data);
 await listing.insertMany(initdata.data);

 console.log("data was reinitalized");

}
InitDB();