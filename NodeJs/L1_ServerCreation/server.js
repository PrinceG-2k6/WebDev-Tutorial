const http = require("http");

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/plain'});
    resp.end('Hello World\n');
}).listen(4800);