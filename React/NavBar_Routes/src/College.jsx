import React from 'react'
import { NavLink } from 'react-router-dom'

const College = () => {
  return (
    <div className='college' style={{
        textAlign:'center'
    }}>
      <h1>College Page</h1>
      <NavLink className="link" to="student">Student</NavLink>
      <NavLink className="link" to="department">Department</NavLink>
      <NavLink className="link" to="info">Info</NavLink>
    </div>
  )
}

export default College
