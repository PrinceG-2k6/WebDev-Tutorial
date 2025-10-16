const http = require("http");

const userData=[
    {
        name:'Prince',
        age:'19',
        email:'prince@test.com'
    },
    {
        name:'Om',
        age:'21',
        email:'om@test.com'
    },
    {
        name:'Gaurav',
        age:'20',
        email:'gaurav@test.com'
    },
    {
        name:'Adi',
        age:'19',
        email:'adi@test.com'
    }
]

http.createServer((req, resp) => {
    resp.setHeader("Content-Type",'application/json');
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(4800);
