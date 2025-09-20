import React from 'react'
import College from './College'

const NestedLoop = () => {

    const CollegeData = [
        {
            name: "RJ Thakur",
            city: "Thane",
            website: "rj.com",
            student: [
                {
                    name: "Prince",
                    age: "20",
                    id: 1
                },
                {
                    name: "Aditiya",
                    age: "21",
                    id: 2
                },
                {
                    name: "Om",
                    age: "22",
                    id: 3
                },
                {
                    name: "Gaurav",
                    age: "21",
                    id: 4
                }
            ]
        },
        {
            name: "Kelkar College",
            city: "Mulund",
            website: "kelkar.com",
            student: [
                {
                    name: "Prince",
                    age: "20",
                    id: 1
                },
                {
                    name: "Aditiya",
                    age: "21",
                    id: 2
                },
                {
                    name: "Om",
                    age: "22",
                    id: 3
                },
                {
                    name: "Gaurav",
                    age: "21",
                    id: 4
                }
            ]
        },
        {
            name: "IIITN",
            city: "Nagpur",
            website: "iiitn.com",
            student: [
                {
                    name: "Prince",
                    age: "20",
                    id: 1
                },
                {
                    name: "Aditiya",
                    age: "21",
                    id: 2
                },
                {
                    name: "Om",
                    age: "22",
                    id: 3
                },
                {
                    name: "Gaurav",
                    age: "21",
                    id: 4
                }
            ]
        }
    ]
    return (

        <div>
            <h1>College Details</h1>
            {  
                
                CollegeData.map((college,index)=>(
                    <div key={index}>
                        <College college={college}/>
                    </div>
                ))
                
            }
        </div>
    )
}

export default NestedLoop
