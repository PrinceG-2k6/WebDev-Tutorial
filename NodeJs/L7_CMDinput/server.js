const http =require('http')

const arg = process.argv;
console.log(arg)
const port = arg[2];
http.createServer((req,resp)=>{
    resp.write("Hello");
    resp.end()
}).listen(port)

//  nodemon server.js 6655  (any argument can pass at place of 6655)