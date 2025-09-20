import React from 'react'

const User = ({name}) => {
  return (
    <div>
      <hr />
        <h1>User Name :{name.name}</h1>
        <h1>User age :{name.age}</h1>
    </div>
  )
}

export default User
