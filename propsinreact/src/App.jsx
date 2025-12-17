import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import User from './User'
import College from './College'

function App() {
  // const [count, setCount] = useState(0)
  let userObject={
    name:"Ziya",
    age:32,
    email:"iamziya53@gmail.com"
  }
  let userObject2={
    name:"Arbaz",
    age:28,
    email:"arbaz53@gmail.com"
  }
  let userObject3={
    name:"Anas",
    age:34,
    email:"anas53@gmail.com"
  }
  let collegeNames=["AJIC", "QAUMI", "Nishwa", "CSJMU", "HBTI"]

  return (
    <>
      <h2>Props in React</h2>
      <College props={collegeNames[0]} />
      <College props={collegeNames[1]} />
      <College props={collegeNames[2]} />
      <User user={userObject} /> 
      <User user={userObject2} /> 
      <User user={userObject3} /> 
    </>
  )
}

export default App
