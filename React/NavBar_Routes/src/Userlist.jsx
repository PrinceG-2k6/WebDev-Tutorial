import React from 'react'
import {Link} from 'react-router-dom'

const Userlist = () => {
    const UserData=[
        {id:1,name:"Anil"},
        {id:2,name:"Sam"},
        {id:3,name:"Sidhu"},
        {id:4,name:"Peter"},
        {id:5,name:"Bruce"},
        {id:6,name:"Tony"},
        {id:7,name:"Prince"}
    ]
  return (
    <div style={{marginLeft:20}}>
        <h1>Users List</h1>
        {
            UserData.map((user)=>(
                <div key={user.id}>
                    <h4><Link to={"/users/"+user.id+"/"+user.name}>{user.name}</Link></h4>
                </div>
            ))
        }      
    </div>
  )
}

export default Userlist
