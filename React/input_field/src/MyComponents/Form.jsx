import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h1>Controller Component</h1>
            <label htmlFor="name">Name :
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br /><br /><br />
            <label htmlFor="email">Email :
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br /><br /><br />

            <label htmlFor="password">Password :
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br /><br /><br />

            <button onClick={() => { setName(""); setEmail(""); setPassword(""); }}>Clear</button>

            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <h4>Password : {password}</h4>


        </div>
    )
}

export default Form;
