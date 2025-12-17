import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(true)

  return (
    <>
    <h1>Toggle in React</h1>
    <button onClick={()=>setCount(!count)}>Submit</button>
    {
      count ?<h1>Mohammad Ziya Shameem</h1>: null
    }
    
    </>
  )
}

export default App
