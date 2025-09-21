import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [data, setData] = useState({
    name: "Anil",
    address: {
      city: 'Delhi',
      country: "India"
    }
  });

  const handleName = (val) => {
    data.name = val;
    setData({ ...data });
  };

  return (
    <div>
      <h1>Updating Objects in State</h1>
      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <br /><br />
      <input
        type="text"
        placeholder="update name"
        onChange={(event) => handleName(event.target.value)}
      />
      <hr />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
    </div>
  );
}