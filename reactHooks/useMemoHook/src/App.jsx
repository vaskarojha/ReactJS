import React, {useMemo, useState} from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [lightTheme, setLightTheme] = useState(true)

  const cssProperty = {
    backgroundColor: lightTheme? "White": "black",
    color: lightTheme? "black": "white"
  }

  const memoCalculation = useMemo(()=>{
    return lengthyFunction(num)
  }, [num])

  // const someCalc = lengthyFunction(num);
  return (
   <> 
    <div style={cssProperty}>
      <input type="number" onChange={(e)=> setNum(e.target.valueAsNumber)} value={num} />
      <h2>Num:{memoCalculation}</h2>
      <button onClick={()=>setLightTheme(!lightTheme)}> Theme change</button>
    </div>
   </>
  )
};

function lengthyFunction(n){
  console.log('Lengthy function executing!!')
  for(let i = 0;  i<1000000000;i++){}
    
    return n;
  }

export default App



// WITHOUT useMemo hook


// import React, {useMemo, useState} from 'react'
// import './App.css'

// function App() {
//   const [num, setNum] = useState(0)
//   const [lightTheme, setLightTheme] = useState(true)

//   const cssProperty = {
//     backgroundColor: lightTheme? "White": "black",
//     color: lightTheme? "black": "white"
//   }

//   const someCalc = lengthyFunction(num);
//   return (
//    <> 
//     <div style={cssProperty}>
//       <input type="number" onChange={(e)=> setNum(e.target.valueAsNumber)} value={num} />
//       <h2>Num:{someCalc}</h2>
//       <button onClick={()=>setLightTheme(!lightTheme)}> Theme change</button>
//     </div>
//    </>
//   )
// };

// function lengthyFunction(n){
//   console.log('Lengthy function executing!!')
//   for(let i = 0;  i<1000000000;i++){}
    
//     return n;
//   }

// export default App
