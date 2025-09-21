import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUsers = () => {
    setUsers([...users, user]);
    setUser(''); // Clear the input field after adding
  };

  const total = users.length;
  const last = users[users.length - 1];
  const unique = [...new Set(users)].length;

  return (
    <div>
      <h2>Total User: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2>Unique Total User: {unique}</h2>

      <input
        type="text"
        onChange={(event) => setUser(event.target.value)}
        placeholder="add new user"
        value={user} // Bind input value to state
      />
      <button onClick={handleAddUsers}>Add User</button>

      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default App;
