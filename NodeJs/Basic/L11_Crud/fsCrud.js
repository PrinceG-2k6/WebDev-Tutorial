const fs =require("fs")

let op =(process.argv[2]);
if(op=='write'){
    const  name = process.argv[3];
    const  content = process.argv[4];    
    // console.log(op,name,content);
    const FullName = "files/"+name+".txt";
    fs.writeFileSync(FullName,content);
}
else if(op=='read'){
    const  name = process.argv[3];
    const FullName = "files/"+name+".txt";
    let data=fs.readFileSync(FullName,'utf-8');
    console.log(data);
}
else if(op=='update'){
    const  name = process.argv[3];
    const  content = process.argv[4];    
    const FullName = "files/"+name+".txt";
    fs.appendFileSync(FullName,"\n"+content);
}
else if(op=='delete'){
    const  name = process.argv[3];   
    const FullName = "files/"+name+".txt";
    fs.unlinkSync(FullName);
}
// fs.writeFileSync("files/apple.txt" , "This is a fruit");

// fs.unlinkSync("files/apple.txt");

// fs.appendFileSync("files/apple.txt" , "\nThis is a Healthy Fruiy");

// const data=fs.readFileSync("files/apple.txt","utf-8");
// console.log(data)