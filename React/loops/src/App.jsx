import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loops from './MyComponent/Loops'
import NestedLoop from './MyComponent/NestedLoop'
// import './App.css'

function App() {
  const userData = [
        {
            name: "Prince",
            age: "20",
            id: 1
        },
        {
            name: "Aditiya",
            age: "21",
            id: 2
        },
        {
            name: "Om",
            age: "22",
            id: 3
        },
        {
            name: "Gaurav",
            age: "21",
            id: 4
        }
    ]
  return (
    <>
      <h1>Looping (map)</h1>
      {userData.map((user)=>(
        <div key={user.id}>
          <Loops user={user}/>
        </div>
      ))}

      <NestedLoop/>
    </>
  )
}

export default App
