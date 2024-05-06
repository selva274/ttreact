import React, { useCallback, useState } from 'react'

import Memo from './Memo';


const MemoCall = () => {
    const [count,setCount]=useState(0);
    const [todos,setTodos]=useState([]);


    const increment=()=>{
        setCount((c)=>c+1);
    }
  
    const addtodos=useCallback(()=>{
        setTodos((d)=>[
            ...d,"Hello"
        ])},[])
  return (
    <div>
        <h1>Todos</h1>
         <Memo count={count} todos={todos}/>
        <div>
            <h1>{count}</h1>
           
        </div>
                 <button onClick={increment}>increment</button>   
                <button onClick={addtodos}>Add Todo</button>
    </div>
  )
}

export default MemoCall