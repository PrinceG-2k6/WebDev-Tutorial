const queryString = require("querystring");
const fs = require("fs");
const path = require("path");

function UserSubmit(req, res) {
  let body = [];

  req.on("data", chunk => {
    body.push(chunk);
  });

  req.on("end", () => {
    const rawData = Buffer.concat(body).toString();
    const parsedData = queryString.parse(rawData);

    const { name, email } = parsedData;

    const dataString = `My Name is ${name} And Email is ${email}`;
    const filePath = path.join(__dirname, "text", `${name}.txt`);

    fs.writeFile(filePath, dataString, 'utf-8', (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Internal Server Error</h1>");
        return;
      }

      console.log("File Created:", filePath);

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<h1>Name: ${name}</h1>`);
      res.write(`<h1>Email: ${email}</h1>`);
      res.end("<h2>Data Submitted Successfully</h2>");
    });
  });
}

module.exports = UserSubmit;
