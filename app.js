const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Corrected 'mongooes' to 'mongoose'
let listing = require("./models/listing.js");

async function Main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

Main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});

app.listen(8080, ()=>{
    console.log("Server is running at port 8080");
});

app.get("/", (req, res)=>{
    res.send("Hi, I am programmer");
});

app.get("/testlisting", async(req, res)=>{
    let samplelisting = new listing({
        title: "MY New Villa",
        description: "this is my house, this is best",
        price: 12000,
        location: "Multan",
        country: "Pakistan",
    });
    await samplelisting.save();
    console.log("sample was saved");
    res.send("successful");
});
