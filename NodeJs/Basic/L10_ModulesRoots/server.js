const http = require("http");
const fs = require("fs");
const UserForm = require("./UserForm");
const UserSubmit = require("./UserSubmit");

http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    UserForm(req, res);  // Serve the form
  } 
  else if (req.url === "/submit" && req.method === "POST") {
    UserSubmit(req, res);  // Handle form submission
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 - Page Not Found</h1>");
  }
}).listen(5600, () => {
  console.log("Server is running at http://localhost:5600/");
});
