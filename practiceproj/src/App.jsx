import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  function xyz(){
    alert("Mohd Ziya Shameem")
  }
  const fruit=(name)=>{
    alert(name)
  }
  return (
    <>
      <h1>Function Calling.......</h1>
      <button onClick={xyz}>Click Me</button> <br /> <br />
      <button onClick={()=>fruit("Banana")}>Click Me</button>
    </>
  )
}

export default App
