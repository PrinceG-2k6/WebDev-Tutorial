const http = require("http");

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello This Is Prince Gupta</h1>')
    resp.end('Hello World\n');
}).listen(4800);

/*
Synchronous : one work at a time
Asynchnronous : Dont wait for a work to complete, start other work parralley
*/ 