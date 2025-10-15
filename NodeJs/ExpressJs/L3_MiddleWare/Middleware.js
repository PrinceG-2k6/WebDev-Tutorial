import express from "express";
const app = express();

// function middleware(req,resp,next){
//     console.log("User is accessing "+req.url+" Page");
//     next();
// }

// app.use(middleware);

//  function ipCheck(req,resp,next){
//     const ip = (req.socket && req.socket.remoteAddress) || req.ip || '';
//     console.log(ip);
//     if (ip.includes('10.250.83.254')) {
//         return resp.status(403).send("You Cannot access this page");
//     }
//     next();
// }

// app.use(ipCheck);

// RouteMiddleWare use to apply middleware to specific route

function AgeCheck(req, resp, next) {
  if (!req.query.age || req.query.age < 18) {
    resp.send("You Cannot access this page");
  } else {
    next();
  }
}



app.use(AgeCheck);


app.get("/",(_req, resp) => {
  resp.send("<h1>home page</h1>");
});
app.get("/login",(_req, resp) => {
  resp.send("<h1>Login page</h1>");
});
app.get("/admin",(_req, resp) => {
  resp.send("<h1>Admin page</h1>");
}); 
app.use((_req, resp) => {
  resp.status(404).send("Page Not Found");
});
