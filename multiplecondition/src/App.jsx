import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      { 
        count==0?<h3>Condition {count}</h3>:
        count==1?<h3>Condition {count}</h3>:
        count==2?<h3>Condition {count}</h3>:
        count==3?<h3>Condition {count}</h3>:
        count==4?<h3>Condition {count}</h3>:
        count==5?<h3>Condition {count}</h3>:
        null
      }
      
    </>
  )
}

export default App
