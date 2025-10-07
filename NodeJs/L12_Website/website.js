const http = require("http");
const fs = require("fs");

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});

    fs.readFile("./index.html","utf-8",(error,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":"text/html"})
        }
    })
    
    resp.end('Hello World\n');
}).listen(4800);