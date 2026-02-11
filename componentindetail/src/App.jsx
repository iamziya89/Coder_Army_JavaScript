import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function Card(){
  return(
      <div className='square'>SQUARE</div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Mohammad Ziya Shameem xyz</h2>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
