import React, {useContext} from 'react'
import {LoginContext} from '../contexts/LoginContextProvider'

function User() {
const login = useContext(LoginContext)
  return (
    <div>
        <h1>User Profile</h1>
        <h2>User is {login && `Logged in!!`}</h2>
        {console.log(login)}
    </div>
  )
}

export default User