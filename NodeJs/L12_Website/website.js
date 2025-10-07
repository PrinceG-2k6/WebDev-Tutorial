const http = require("http");
const fs = require("fs");

http.createServer((req, resp) => {
    // ================

    let collectHeaderData=fs.readFileSync("./header.html","utf-8",);
    if (req.url === "/") {
        fs.readFile("./header.html", "utf-8", (err, Headerdata) => {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/plain" });
                resp.end("Internal Server Error\n");
                return;
            }
            collectHeaderData = Headerdata;
            // resp.writeHead(200, { "Content-Type": "text/html" });
            // resp.end(Headerdata);
        });
    } 

    // ================
    if (req.url === "/") {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(500, { "Content-Type": "text/plain" });
                resp.end("Internal Server Error\n");
                return;
            }
            
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(collectHeaderData+""+data);
        });
    } else if (req.url === "/style.css") {
        fs.readFile("./style.css", "utf-8", (err, data) => {
            if (err) {
                resp.writeHead(404, { "Content-Type": "text/plain" });
                resp.end("CSS NOT FOUND\n");
                return;
            }

            resp.writeHead(200, { "Content-Type": "text/css" });
            resp.end(data);
        });
    } else {
        // Handle other URLs
        resp.writeHead(404, { "Content-Type": "text/plain" });
        resp.end("404 Not Found");
    }
}).listen(4800, () => {
    console.log("Server running at http://localhost:4800/");
});
