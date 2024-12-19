const mongoose = require("mongoose");
const InitData  = require("./data.js");
const listing = require("../models/listing.js");


async function Main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

Main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

const initDB = async () =>{
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("Data Added");
}

initDB();