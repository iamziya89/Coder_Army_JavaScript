import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount]=useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }
   function reset(){
    setCount(0);
   }

  return (
    <>
      <h2>Counter APP</h2>
      <p>Count : {count}</p>
      <div className='buttons'>
        {/* <button onClick={increment}>➕INCREMENT</button>
        <button onClick={decrement}>➖DECREMENT</button>
        <button onClick={reset}>🔃RESET</button> */}
        <Button text="INCREMENT" func={increment}/>
        <Button text="DECREMENT" func={decrement}/>
        <Button text="RESET" func={reset}/>
      </div>
    </>
  )
}

function Button(obj){
  return(
    <>
     <button onClick={obj.func}>{obj.text}</button>
    </>
  )
}

export default App
