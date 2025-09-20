import React from 'react'

const Loops = ({user}) => {
    
    return (
        <div style={
            {
                border:"1px solid black",
                borderRadius:"5px",
                padding:"10px",
                margin:"10px",
                width:"200px"
            }
        }>
            <h3>Name : <span style={{color:"green"}}>{user.name}</span></h3>
            <h3>Age : <span style={{color:"green"}}>{user.age}</span></h3>
            
        </div>
    )
}

export default Loops
