import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'

function Components(){
  return(<>
    <h2>COMPONENTS FUNCTION</h2>
  </>)
}

function App() {

  return (
    <>
     <h2>Mohammad Ziya Shameem</h2>
     <Navbar title="Navigation" link='Google.com' number={5}/>
    </>
  )
}

export default App
