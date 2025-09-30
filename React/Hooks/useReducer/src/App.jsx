import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const emptyData={
  name:'',
  password:"",
  email:'',
  city:'',
  address:'' 
}

const reducer=(data,action)=>{
  return {...data,[action.type]:action.val}
}

function App() {

  const [state,dispatch]=useReducer(reducer,emptyData)

  return (
    <>
     <h1>useReducer</h1>
     <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'name'})} placeholder='Enter Name' />
     <br /><br />
     <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'password'})} placeholder='Enter Password' />
     <br /><br />
     <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'email'})} placeholder='Enter Email' />
     <br /><br />
     <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'city'})} placeholder='Enter City' />
     <br /><br />
     <input type="text" onChange={(e)=>dispatch({val:e.target.value,type:'address'})} placeholder='Enter Address' />
     <br /><br />

     <ul>
      <li>Name : {state.name}</li>
      <li>PassWord :{state.password}</li>
      <li>Email : {state.email}</li>
      <li>City : {state.city}</li>
      <li>Address: {state.address}</li>
     </ul>
     <button>Add Details</button>
    </>
  )
}

export default App
