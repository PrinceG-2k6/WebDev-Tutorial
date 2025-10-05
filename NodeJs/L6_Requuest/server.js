const http = require("http");

http.createServer((req, resp) => {
    console.log(req.method);
    resp.write("<h1>Home Page</h1>")
    resp.end();
  })
  .listen(4800);
