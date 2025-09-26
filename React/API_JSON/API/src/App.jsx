import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserData();
  },[]);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response.users);
    setUserData(response.users);
  }

  return (
    <>
      <div>
        <h1>Fetch Data from API</h1>
        <ul className='user-list'>
          <li style={{fontWeight:800,fontSize:30}}>First name</li>
          <li style={{fontWeight:800,fontSize:30}}>Last Name</li>
          <li style={{fontWeight:800,fontSize:30}}>Age</li>

        </ul>
        {
          userData && userData.map((user) => (
            <div>
              <hr />
            <ul className='user-list'>
              
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.age}</li>
              

            </ul>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
