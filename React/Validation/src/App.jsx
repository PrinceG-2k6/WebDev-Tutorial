import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState("");

  const [pass, setPass] = useState('');
  const [passErr, setPassErr] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 5) {
      setNameErr("The name should contain at most 5 letters");
    } else {
      setNameErr("");
    }
  }

  const handlePass = (e) => {
    const value = e.target.value;
    setPass(value);
    const regex = /^[A-Z0-9]+$/i; // only letters and numbers
    if (regex.test(value)) {
      setPassErr("");
    } else {
      setPassErr("The password should contain only alphabets and numbers");
    }
  }

  return (
    <>
      <form>
        <label htmlFor="name">Name : </label>
        <input
          
          type="text"
          id="name"
          placeholder="Enter Name"
          onChange={handleName}
          value={name}
        />
        <span className={nameErr?"error" :null}>{nameErr}</span><br /><br />

        <label htmlFor="Pass">Password : </label>
        <input
          
          type="text"
          id="Pass"
          placeholder="Enter Password"
          onChange={handlePass}
          value={pass}
        />
        <span className={passErr?"error" :null}>{passErr}</span>
        <br /><br />

        <button disabled={Boolean(nameErr) || Boolean(passErr)|| name && pass?null:true}>Submit</button>
      </form>

      <h1>Name : {name}</h1>
      <h1>Password : {pass}</h1>
    </>
  )
}

export default App
