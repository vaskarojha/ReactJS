import React, {createContext} from "react"
import Profile from "./components/Profile"

export const loginContext = createContext()

function App() {
  return (
    <loginContext.Provider value={true}>
    <>
    <Profile/>
    </>
    </loginContext.Provider>
  )
}

export default App
