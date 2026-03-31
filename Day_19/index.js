const express= require("express");
const { request } = require("http");

const app = express();

app.get("/",(req,res) =>{
    res.send("Welcome to Express Day 1");
});
app.get("/about",(req,res) =>{
    res.send("About page");
});
app.listen(3000,() =>{
    console.log("Server Started at 3000");
});

