export default function login(){
    return  `<form action="/submit" method="post">
    <br>
    <input type="text" name="name" id="name" placeholder="Enter Name">
    <br>
    <input type="password" name="password" id="password" placeholder=" Enter password">
    <br><br><button>Login</button>
</form><br>
<a href='/'>Go to Home</a>`
}