import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";

function App() {
  const [user, setUser] = useState('')
  return (
    <div>
      <AddUser setUser={setUser} />
      {/* setUser function pass through AddUser Function
      it saves value of user from setUser from child(AddUser) to parents(App.jsx)
      again value of user pass to another child(Displayuser) to use 
      a ocject is pass from one child to its sibling */}
      <DisplayUser user={user} />
    </div>
  );
}

export default App;