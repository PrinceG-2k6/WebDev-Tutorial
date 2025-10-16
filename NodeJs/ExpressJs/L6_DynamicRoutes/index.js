import express, { urlencoded } from "express"
const app=express();
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get("/",(_req,resp)=>{
    const users =['prince','anil','sidhu','peter']
    let data =`<ul>`;
    for(let i=0;i<users.length;i++){
        data += `<li><a href="user/${users[i]}">${users[i]}</a></li>`
        // console.log(users[i]);
    }
    data +=`</ul>`
    resp.send(data);  
})
app.get("/user/:name",(req,resp)=>{
    console.log(req.params.name);
    const userName =req.params.name;
    resp.send(`This is ${userName} Profile`);
})
app.listen(4800)
