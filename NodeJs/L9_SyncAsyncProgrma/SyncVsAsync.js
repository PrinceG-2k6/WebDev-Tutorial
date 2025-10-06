const fs =require("fs")
//Asynchronous

// console.log("apple");

// setTimeout(()=>{
//     console.log("apple1");
// },2000);

// console.log("apple2");

// let  a=10;
// let b =10;
// setTimeout(()=>{
//     b=100
//     console.log(a+b);
// },2000);
// console.log(a+b);


// fs.readFile("./test.txt",'utf-8',(err,data)=>{
//     if(err)
//     {
//         return;
//     }
//     else
//     console.log(data);
// })
// console.log("Ended")



//Synchronous

// console.log("apple");
// console.log("apple1");
// console.log("apple2");

let data = fs.readFileSync("./test2.txt",'utf-8',);
console.log(data);
console.log("Ended");

