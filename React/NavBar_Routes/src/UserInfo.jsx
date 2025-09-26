import React from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const UserInfo = () => {
    const paramsData = useParams();
    // console.log(paramsData.id);
  return (
    <div style={{marginLeft:20}}>
        <h1>User Detail Page</h1>
        <h2>User Id is : {paramsData.id}</h2>
        <h2>User name is : {paramsData.name}</h2>
        <h3><Link to="/users">back</Link></h3>

    </div>
  )
}

export default UserInfo
