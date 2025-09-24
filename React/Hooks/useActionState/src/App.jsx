import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const HandleSubmit = async(previousData,formData)=>{
    let name = formData.get('name');
    let password =formData.get('password');

    await new Promise(res=>setTimeout(res,3000));
    console.log("HandleSubmit called" , name,password);

    if(name&&password){
      return{message:"Data Submitted", name ,password}
    }
    else{
     return{error:"Failed to upload"} 
    }
  }

  const [data,action,pending] =useActionState(HandleSubmit,undefined);

  return (
    <>
      <div>
        <h1>useActionState Hook in Js</h1>
        <form action={action}>
          <input type="text" name="name"  id="name" placeholder='Enter Name' /><br /><br />
          <input type="password" name="password" id="password" placeholder='Enter password'/><br /> <br />
          <button disabled={pending}>{!pending? "Submit ":" Submitting....."}</button>
        </form>
        {
          data?.message && <span style={{color:"green"}}>{data?.message}</span>
        }
        {
          data?.error && <span style={{color:"red"}}>{data?.error}</span>
        }

        <h3>Name :{data?.name}</h3>
        
        <h3>Password :{data?.password}</h3>
      </div>
    </>
  )
}

export default App
