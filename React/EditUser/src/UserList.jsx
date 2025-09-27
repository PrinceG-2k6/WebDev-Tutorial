import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const url = "http://localhost:3000/users";

    useEffect(() => {
        setLoading(true);
        getUserData();
    }, []);

    const getUserData = async () => {
        let response = await fetch(url);
        response = await response.json();
        setUserData(response);
        setLoading(false);
    }
    const deleteUser = async(id)=>{
        let response = await fetch(url+"/"+id,{
            method:"delete",

        });
        response = await response.json();
        if(response){
            alert("Record Deleted");
            getUserData();
        }
    }

    return (
        <div>
            <ul className='user-list user-list-head'>
                <li>Name</li>
                <li>Age</li>
                <li>Email</li>
                <li>Modify</li>
            </ul>
            {
                !loading ?
                    userData.map((user) => (
                        <div>
                            <hr />
                            <ul key={user.id} className='user-list'>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.email}</li>
                                <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
                            </ul>
                        </div>
                    )) : "Data Loading"
            }
        </div>
    )
}

export default UserList
