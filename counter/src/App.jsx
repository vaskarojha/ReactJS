import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useState} from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 0
  function addCounter(){
    if(counter < 20){
      return setCounter(counter+1)
    }
    else{
      setCounter(counter)
    }
    
    // counter ++
    // console.log(counter)
  }
  function subractCounter(){
    if(counter > 0){
      return setCounter(counter-1)
    }
    else{
      setCounter(counter)
    }
    
  }
  return (
    <>
   <h1>Counter App</h1>
   <h2>Count is {counter}</h2>
   <button onClick= {addCounter} >Add count</button>
   <button onClick = {subractCounter}> Subract Counter</button>
    </>
  )
}

export default App
