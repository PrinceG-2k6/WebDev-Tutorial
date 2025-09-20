import React, { useState } from 'react'

const Skills = () => {
    const [skills,setSkills]=useState([]);
    const HandleSkills = (e)=>{
        console.log(e.target.value,e.target.value.checked);
        if(e.target.checked)
        {
            setSkills([...skills,e.target.value])
        }
        else{
            setSkills([...skills.filter((item)=>item!=e.target.value)])
        }
    }
  return (
    <div>
        <h1>CheckBox</h1>
      <h3>Select your Skills</h3>
      <input type="checkbox" onChange={HandleSkills} id="PHP" value="PHP" />
      <label htmlFor="PHP">PHP</label><br /><br />
      <input type="checkbox" onChange={HandleSkills} id="Java" value="Java" />
      <label htmlFor="Java">Java</label><br /><br />
      <input type="checkbox" onChange={HandleSkills} id="SQL" value="SQL" />
      <label htmlFor="SQL">SQL</label><br /><br />
      <input type="checkbox" onChange={HandleSkills} id="NextJs" value="NextJs" />
      <label htmlFor="NextJs">NextJs</label><br /><br />

      <h1>{skills.toString()}</h1>
    </div>
  )
}

export default Skills
