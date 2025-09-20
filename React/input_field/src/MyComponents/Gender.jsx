import React, { useState } from 'react'

const Gender = () => {
    const [gender, setGender] = useState("male");
    const [city,setCity]=useState("Chennai");
    return (
        <>
        <div>
            <h1>radio Buttons</h1>
            <h3>Select Gender</h3>
            <input type="radio" onChange={(e) => setGender(e.target.value)} checked={gender == "male"} value="male" name="gender" id="male" />
            <label htmlFor="male">Male</label><br />
            <input type="radio" onChange={(e) => setGender(e.target.value)} checked={gender == "female"} value="female" name="gender" id="female" />
            <label htmlFor="female">FeMale</label><br />
        </div>

        <div>
            <h1>DropDown</h1>
            <h3>Select City</h3>
            <select onChange={(e)=>setCity(e.target.value)} >
                <option value="Delhi" selected={city=="Delhi"}>Delhi</option>
                <option value="Mumbai" selected={city=="Mumbai"}>Mumbai</option>
                <option value="Chennai" selected={city=="Chennai"}>Chennai</option>
                <option value="Hyderabad" selected={city=="Hyderabad"}>Hyderabad</option>
                <option value="Lucknow" selected={city=="Lucknow"}>Lucknow</option>
            </select>
        </div>

        <h2>Gender : {gender}</h2>
        <h2>City : {city}</h2>

        </>
    )
}

export default Gender
