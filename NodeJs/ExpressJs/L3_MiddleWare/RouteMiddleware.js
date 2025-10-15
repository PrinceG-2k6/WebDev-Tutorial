import express from "express";
import path from "path";
const app = express();


function AgeCheck(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("You Cannot access this page");
  } else {
    next();
  }
}

function checkURLRouteMiddleware(req, resp, next) {
    console.log("This request is :",req.url)
    next();
  
}


app.get("/", checkURLRouteMiddleware,(req, resp) => {
  resp.send("<h1>home page</h1>");
});
app.get("/login",checkURLRouteMiddleware,(req, resp) => {
  resp.send("<h1>Login page</h1>");
});
app.get("/admin", AgeCheck, checkURLRouteMiddleware,(req, resp) => {
  resp.send("<h1>Admin page</h1>");
}); 
app.use((req, resp) => {
  resp.status(404).send("Page Not Found");
});
app.listen(4800);
