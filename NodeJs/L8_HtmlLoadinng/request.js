const http = require("http");
const fs = require('fs');

http.createServer((req,resp)=>{

    fs.readFile('./web.html','utf-8',(err,data)=>{
        if(err){
            resp.write('Internal Server Error');
            resp.end();
            return
        }

        resp.writeHead(200,{'Content-Type':'text/html'})
        resp.write(data)
        resp.end();
    })
    
}).listen(5600);