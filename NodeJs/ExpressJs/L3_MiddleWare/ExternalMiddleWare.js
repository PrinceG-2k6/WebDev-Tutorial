import express from "express"
import path from "path"
import morgan from "morgan"
const app=express();
app.use(morgan('dev'))


app.use(express.static('public'))

app.get("/",(req,resp)=>{
    let filePath = path.resolve("View/home.html");
    resp.sendFile(filePath)
}) 

app.use(express.urlencoded({extended:false}))
app.get("/login",(req,resp)=>{
    resp.send(`
        <form action="submit" method="post">
        <input type="text" name="name" id="name" placeholder="Enter name"/><br>
        <input type="password" name="password" id="password" placeholder="Enter password"/>

        <br>
        <button>Submit</button>
        </form>`)
});
app.post("/submit",(req,resp)=>{
    console.log("The User Details is :" ,req.body)
    resp.send("<h1>Submitted</h1>")
})
app.get("/wait",(req,resp)=>{
    setTimeout(()=>{
        resp.send("The request after 1 second")
    },1000);
})
app.use((req,resp)=>{
    resp.status(404).sendFile(absPath+"/page404.html")
})
app.listen(4800)

