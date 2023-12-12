import React, {useEffect, useState, useRef} from 'react'
import './App.css'


function App() {
  const [text,setText] = useState("")
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(1)  
  
  useEffect(()=>{
    renderCount.currnet = renderCount.current +1
  })
  return (
    <>
      <input value={text}  onChange={e=>setText(e.target.value)} />
      <h2>You typed: {text}</h2>
      <h3>Dom rendered {renderCount.current}</h3>
    </>
  )
}

export default App
