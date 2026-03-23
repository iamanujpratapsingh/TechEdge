const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.end("welcome to Home -- Page");
    }
    else if(req.url==="/bye"){
        res.end("Good Bye");
    }
    else if(req.url==="/about"){
        res.end("This is about me");
    }
    else if(req.url==="/hi"){
        res.end("hey swarnika");
    }
     else{
        res.end("ERROR 404 NOT FOUND");
    }
});

server.listen(3000,()=>{
    console.log("Server started at 3000");
});
