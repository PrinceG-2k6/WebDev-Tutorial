const http = require("http");

const age = 18;

http
    .createServer((req, resp) => {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write(`
       <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Hello This is Prince Gupta</h1>
            <h2>Age : `+age+`</h2>
        </body>
        </html> 
        `);
        resp.end("Hello World\n");
        
        process.exit()
    })
    .listen(4800);

// nodemon server.js(in terminal)
