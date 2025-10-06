import http from "http";
import fs from "fs";

http
  .createServer((req, resp) => {
    fs.readFile("./web.html", "utf-8", (err, data) => {
      if (err) {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end("Internal Server Error");
        return;
      }
      
        resp.writeHead(200, { "Content-Type": "text/html" });
      if (req.url == "/") {
        resp.write(data);
        
      } 
      else if (req.url == "/submit") {
        resp.write('<h1>Data Submiteed</h1>')
      }
        resp.end();
      
    });

    
  }).listen(5600);
