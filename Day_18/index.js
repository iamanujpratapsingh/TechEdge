const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hello This is end");
    console.log("Server has been called");
});

const server1 = http.createServer((req,res)=>
{
    res.end("Hi, I am running at port 5000");
    console.log("Server has been called");
});

server.listen(3000, ()=>{
    console.log("Server Started at Port 3000");
});

server1.listen(5000, ()=>{
    console.log("Server Started at Port 5000");
});



