import React, { useEffect, useState } from 'react';

const data=[{name:'pathan',age:20},{name:"Jawan",age:30},{name:"selva",age:40}]

const LocalStorage = () => {
   
    const [localdata,setLocaldata]=useState([])

     
    useEffect(()=>{
        localStorage.setItem("datas",JSON.stringify(data))
    },[])
  
    const setLocalsss=()=>{
        const movies=JSON.parse(localStorage.getItem('datas'));
        setLocaldata(movies)
    }

    
   const removelist=(data)=>{
     const newlist=localdata.filter((locals)=>locals.age!==data.age)
     setLocaldata(newlist);
    
   }

  return (
    <div>
        {localdata.map((d)=>{
            return <div key={d.id}>
                <h1>{d.name}</h1>
               <button onClick={()=>{removelist(d)}}>Remove</button> 
            </div>
        })}
        <br/>
        <button onClick={setLocalsss}>Set LocalStorage</button>
        
    </div>
  )
}

export default LocalStorage