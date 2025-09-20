import React from 'react'

const College = ({college}) => {
    let container={
        border:"3px solid green",
        borderRadius:"15px",
        padding:"10px",
        width:"200px",
        margin:"10px",
        flexWrap:"wrap",
        backgroundColor:"yellow"
    }
  return (
    <div style={container}>
        
        <h3>Name : {college.name}</h3>
        <h4 style={{marginLeft:"30px"}}>City : {college.city}</h4>
        <h4 style={{marginLeft:"30px"}}>Website : {college.website}</h4>
        <h3>Students : </h3>
        <ul>
        {
            college.student.map((student,index)=>(
                <div key={index}>
                    <li>{student.name}</li>
                </div>
            ))
            
        }
        </ul>
    </div>
  )
}

export default College
