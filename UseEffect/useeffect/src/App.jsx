import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [users, Setusers]=useState([]);

  async function gitHub() {
    const response=await fetch("https://api.github.com/users");
    const data=await response.json();
    Setusers(data)
    console.log("Hello.....");
    
  }
  gitHub();

  return (
    <>
     <h1>Github Users</h1>
     <div style={{display:"flex", justifyContent:"center",alignItems:"center",flexWrap:"wrap", gap:"10px"}}>
      {
        users.map(user=>(
          <img src={user.avtar_url} height={"100px"} width={"100px"} alt="" />
        ))
      }
     </div>
    </>
  )
}

export default App
