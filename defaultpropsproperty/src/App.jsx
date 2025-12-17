import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import User from './User'
import Wrapper from './Wrapper'
// import './App.css'

function App() {
  const [count, setCount] = useState("MOHD ZIYA")

  return (
    <>
        <h1>Input in React....</h1>
        <input type="text" value={count} placeholder='Enter Your Name' onChange={(e)=>setCount(e.target.value.toLocaleUpperCase())} /> <br /> <br />
        <button onClick={()=>setCount(" ")}>Click Me</button>
        <h2>{count}</h2>
        
        {/* <Wrapper /> */}
    </>
  )
}

export default App
