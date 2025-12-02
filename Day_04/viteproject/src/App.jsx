import { useState } from "react";

function App(){
  let [count, Setcount]=useState(0)

  function incrementNumber(){
    count++;
    Setcount(count)
    
  }

  function decrementNumber(){
    count--;
    Setcount(count)
    
  }

  return(
    <>
      <p>Counter: {count}</p>
      <button onClick={incrementNumber}>Increment {count}</button>
      <button onClick={decrementNumber}>Decrement {count}</button>
    </>
  )

}
export default App;