import React, { useState } from 'react'

const UserAdd = () => {

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [email,setEmail]=useState("");
    const url = "http://localhost:3000/users";

    

  return (
    <div style={{textAlign:"center"}} >
      <h1>Add New user</h1>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      <button onClick={createUser}>Add User</button>

    </div>
  )
}

export default UserAdd
