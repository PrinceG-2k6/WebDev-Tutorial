import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const url = "http://localhost:3000/users";

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      setName(data.name);
      setAge(data.age);
      setEmail(data.email);
    };
    getUserData();
  }, [id]);

  

  return (
    <div>
      <h1>Edit User Details</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter Name" />
      <br /><br />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Enter Age" />
      <br /><br />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter Email" />
      <br /><br />
      <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default EditUser;
