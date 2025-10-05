const http = require("http");

// Install : npm i nodemon
// Helps to run server on changes 
// Doesnt need to restart sever again and again

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello This Is Prince gupta</h1>')
    resp.write('<h2>Hello This Is Prince gupta</h2>')
    
    resp.write('<h3>Hello This Is Prince gupta</3>')
    resp.end('Hello World\n');
}).listen(4800);

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Hello This Is Prince gupta On Different LocalHost</h1>')
    resp.end('Hello World\n');
}).listen(5800);

// nodemon server.js(in terminal)