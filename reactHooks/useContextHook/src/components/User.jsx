import React, {useContext} from 'react'
import {loginContext} from '../App'

function User() {
const login = useContext(loginContext)
  return (
    <div>
        <h1>User Profile</h1>
        <h2>User is {login && `Logged in!!`}</h2>
        {console.log(login)}
    </div>
  )
}

export default User