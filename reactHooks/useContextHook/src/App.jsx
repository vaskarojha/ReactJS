import React, {createContext} from "react"
import Profile from "./components/Profile"
import LoginContextProvider from "./contexts/LoginContextProvider"

function App() {
  return (
    <LoginContextProvider>
    <>
    <Profile/>
    </>
    </LoginContextProvider>
  )
}

export default App
