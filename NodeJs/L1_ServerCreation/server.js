const http = require("http");

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello This Is Anil Sidhu</h1>')
    resp.write('<h2>Hello This Is Anil Sidhu</h2>')
    resp.end('Hello World\n');
}).listen(4800);