import { useState } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState([
    'anil', 'sam', 'peter', 'tony'
  ]);

  const [dataDetails, setDataDetails] = useState([
    { name: "Prince", age: 18 },
    { name: "Om",     age: 23 },
    { name: "Gaurav", age: 21 },
    { name: "Adii",   age: 12 },
  ]);

  // update the last name in data[]
  const handleUser = () => {
    setData(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = name;
      return updated;
    });
  };

  // update the last user's age in dataDetails[]
  const handleAge = (age) => {
    setDataDetails(prev => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        age: Number(age)
      };
      return updated;
    });
  };

  return (
    <div>
      <h1>Updating Array in State</h1>

      <input
        type="text"
        placeholder="enter last user name"
        onChange={(e) => handleUser(e.target.value)}
      />
      {data.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      <hr />

      <input
        type="number"
        placeholder="enter last user age"
        onChange={(e) => handleAge(e.target.value)}
      />
      {dataDetails.map((item, index) => (
        <h4 key={index}>
          {item.name}, {item.age}
        </h4>
      ))}
    </div>
  );
}
