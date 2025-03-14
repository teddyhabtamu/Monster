import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const UserProfile = () => {

  const {user} = useContext(UserContext);
  console.log(user)
  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  )
}

export default UserProfile