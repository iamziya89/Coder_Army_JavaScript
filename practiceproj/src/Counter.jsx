import { useState } from "react";

function Counter(){
    const [count, setCount]=useState(0)
    return(
        <>
            <h1>Counter Erooor :{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </>
    )
}
export default Counter;