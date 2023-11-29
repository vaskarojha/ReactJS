import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div  style={{backgroundColor: color, width: 100}}>
      <button onClick = {()=>setColor("red")}>Red</button>
      <button onClick = {()=>setColor("green")}>Green</button>
      <button onClick = {()=>setColor("blue")}>Blue</button>
    </div>
    </>
  )
}

export default App
