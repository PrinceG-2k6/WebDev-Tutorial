const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http
  .createServer((req, resp) => {
    if (req.url == "/") {
      fs.readFile("./web.html", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "Content-Type": "text/html" });
          resp.end("Internal Server Error");
          return;
        }
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end(data);
      });
    } 
    else if (req.url == "/submit" && req.method === "POST") {
      let databody = [];
      req.on('data', (chunk) => {
        databody.push(chunk);
      });
      req.on('end', () => {
        let rawData = Buffer.concat(databody).toString();
        let readAbleData = queryString.parse(rawData);
        console.log(readAbleData);
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write("<h1>Name : "+readAbleData.name+"</h1>")
        resp.write("<h1>Email :"+readAbleData.email+"</h1>")
        resp.end('<h1>Data Submitted</h1>');
        let dataString ="My name is "+readAbleData.name+' And Email is '+readAbleData.email;
        // fs.writeFileSync("text/"+readAbleData.name+'.txt', JSON.stringify(readAbleData, null, 2));
        // console.log("File Created");
        fs.writeFile("text/"+readAbleData.name+'.txt',dataString,'utf-8',(err)=>{
          if(err){
            resp.end("Internal Servor Error");
            return;
          }
          else{
            console.log("File Created");
          }
        });
        
      });
    } else {
      resp.writeHead(404, { "Content-Type": "text/html" });
      resp.end("Not Found");
    }
  }).listen(5600);
