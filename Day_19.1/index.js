const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to Dynamic Rounting");
});
//Dynamic Rounting
app.get("/users/:roll",(req,res)=>{
    console.log(req.params)
    let id =req.params.roll;
    res.send("Good Morning"+id);
});
app.get("/users/:roll/:name",(req,res)=>{
    console.log(req.params)
    let{ roll, name} = req.params;
    res.send("Good Moring" + roll + "<br> Hello" + name);
});


app.listen(3000,()=>{
    console.log("Server started at 3000");
});
