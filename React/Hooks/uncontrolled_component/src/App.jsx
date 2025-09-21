import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const HandleForm =(e)=>{
    e.preventDefault();
    let user = document.querySelector("#user").value;
    let password = document.querySelector("#password").value;

    console.log("UserName :",user);
    console.log("Password :",password);
  }
  const HandleFormRef =(e)=>{
    e.preventDefault();
    let userRef = document.querySelector("#userRef").value;
    let passwordRef = document.querySelector("#passwordRef").value;

    console.log("UserName by ref :",userRef);
    console.log("Password by ref :",passwordRef);
  }
 
  return (
    <>
      <h1>Uncontrolled Component</h1>
      <h3>It is a way accesing input without using useState</h3>
      <hr />
      <h2>Uncontrolled By JS</h2>
      <form action="" onSubmit={HandleForm}>
        <input type="text" placeholder='Enter UserName' id="user" />
        <br /><br />
        <input type="password" id="password" placeholder='Enter Password'/>
        <br /><br />
        <button>Submit</button>
      </form>

      <h2>Uncontrolled By useRef</h2>
      <form action="" onSubmit={HandleFormRef}>
        <input type="text" placeholder='Enter UserName' id="userRef" />
        <br /><br />
        <input type="password" id="passwordRef" placeholder='Enter Password'/>
        <br /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
