import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue] = useState(0);
    useEffect(()=>{
        console.log("Mounted")
    },[count])
    
  return (
    <>
    <div>UseEffect</div>
    <h1>{value}</h1>
    <button onClick={()=>setValue(value+1)}>Inc</button>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    </>

  )
}

export default UseEffect