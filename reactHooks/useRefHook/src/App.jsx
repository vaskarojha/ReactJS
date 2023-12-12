import React, {useEffect, useState, useRef} from 'react'
import './App.css'


function App() {
  const [text,setText] = useState("")
  // const [renderCount, setRenderCount] = useState(0);
  // const renderCount = useRef(1)  

  const inputRef = useRef()
  
  // useEffect(()=>{
  //   renderCount.currnet = renderCount.current + 1
  // })

  const doSomething= ()=>{
    console.log(inputRef.current)
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} value={text}  onChange={e=>setText(e.target.value)} />
      <h2>You typed: {text}</h2>
      {/* <h3>Dom rendered: {renderCount.current} times!!</h3> */}
      <button onClick={doSomething}>Type Now</button>
    </>
  )
}

export default App
