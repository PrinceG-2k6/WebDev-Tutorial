import { useEffect, useOptimistic, useState } from 'react'
import './App.css'

function App() {
  const [skills, setSkills] = useState([]);
  const [name, setName] = useState(""); // string not array

  // useOptimistic returns [optimisticState, setOptimistic]
  const [optSkills, setOptSkills] = useOptimistic(skills);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    let resp = await fetch('http://localhost:3000/skills');
    resp = await resp.json();
    setSkills(resp);
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const addSkill = async () => {
    if (!name.trim()) return;

    const id = Math.floor(Math.random() * 100000);

    // optimistic update
    setOptSkills(prev => [...prev, { name, id }]);

    let resp = await fetch('http://localhost:3000/skills', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, id })
    });

    await sleep(3000); // simulate delay
    resp = await resp.json();

    if (resp) {
      getSkills(); // refresh from backend
      setName(""); // clear input
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter name'
        />
        <button onClick={addSkill}>Add</button>

        <h3>Skills (optimistic UI)</h3>
        {optSkills.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
}

export default App;
