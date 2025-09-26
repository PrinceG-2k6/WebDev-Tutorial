import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getUserData();
  },[]);

  async function getUserData() {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  }

  return (
    <>
      <div>
        <h1>Itegrate JSON server API and Loader</h1>
        <ul className='user-list'>
          <li style={{fontWeight:800,fontSize:30}}>Nname</li>
          <li style={{fontWeight:800,fontSize:30}}>Email</li>
          <li style={{fontWeight:800,fontSize:30}}>Age</li>

        </ul>
        {!loading?
          userData && userData.map((user) => (
            <div>
              <hr />
            <ul className='user-list'>
              
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.age}</li>
              

            </ul>
            </div>
          )):<h1>DATA LOADING.....</h1>
        }
      </div>
    </>
  )
}

export default App
