import express from "express";
const app = express();

app.get("/",(_req, resp) => {
  resp.send("<h1>home page</h1>");
});
app.get("/users",(_req, resp) => {
  resp.send("<h1>users page</h1>");
});
app.get("/error",(_req, resp,next) => {
    const error =new Error('')
    error.status=404;
    next(error); 
}); 
app.use((_req, resp) => {
  resp.status(404).send("Page Not Found");
});
function errorHandling(error,req,resp,next){
    resp.status(error.status||500).send("You have entered resp.send1 in code instead of resp.send..Once Corrected Page will work ");
}
app.use(errorHandling)
app.listen(4800);
