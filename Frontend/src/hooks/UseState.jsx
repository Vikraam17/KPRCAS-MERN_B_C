import React, { useState } from 'react'

const UseState = () => {
    // const [value,setValue] =useState(initialValue);
    const [count,setCount]=useState(0);
    const [value,setValue] =useState("");
    const handleDecrement = ()=>{
      setCount(count-1);
    }
    
  return (
    <div>
      <h1>{value}</h1>
      <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Enter the value'/>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count+1)}>Increment</button> 
    </div>
  )
}

export default UseState