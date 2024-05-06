import React, { useEffect, useRef, useState } from 'react'
const Hooks = () => {
    const [data,setdata]=useState(1);
    const[count,setCount]=useState(1);
    const[inputVal,setInputVal]=useState("");
    const prevdata=useRef("")
    const colorRef=useRef("red");
useEffect(()=>{
    setdata((data,count)=>data*count);
},[count])

useEffect(()=>{
  prevdata.current=inputVal;
},[inputVal]);
    
const changecolor=()=>{
  colorRef.current.style.color="blue";
}
  return (
   <>
     <div>
        <h3>UseState: {data}</h3>
        <button onClick={()=>{setCount((c)=>c+1)}}>Calci</button>
    </div>
    <hr></hr>
    <div>
      <input
      type='text'
      value={inputVal}
      onChange={(e)=>{setInputVal(e.target.value)}}
      />
      <h1>data :{inputVal}</h1>
      <h1>prev data :{prevdata.current}</h1>
      <h1 ref={colorRef}>ColorRef</h1>
      <button onClick={changecolor}>ChangeColor</button>
    </div>
   </>

  )
}

export default Hooks