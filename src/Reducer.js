import React from 'react'
import { useReducer } from 'react';
import "./App.css"
const initialData=[{name:1,age:25},{name:2,age:30}];

const reducer=(state,action)=>{
   switch(action.type){
    case "g1num":
          return state.map((data)=>{
            return {...data,age:data.age+1}
          })
    case "sub":
          return {name:state.name-1};
    case "mul":
          return {name:state.name*state.name};
    case "reset":
          return {name:0};
    default:
      return state;
        
   }
}
const Reducer = () => {
  const [data,dispatch]=useReducer(reducer,initialData);

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Reducer Practice</h1>
       <div className='num1'>
       <h1>{data[0].name}</h1>
      <h1>age: {data[0].age}</h1>
       </div>
       <div className='num2'>
       <h1>{data[1].name}</h1>
      <h1>age: {data[1].age}</h1>
       </div>
      <button
      onClick={()=>{dispatch({type:"g1num"})}}>G1 num</button>
      <br/>
     
      <button
      onClick={()=>{
        dispatch({type:"g1age"})
      }}>G1 age</button>
      <br></br>
      <button onClick={()=>{dispatch({type:"g2num"})}}>G2 num</button>
      <br></br>
      <button onClick={()=>{dispatch({type:"g2age"})}}>G2 age</button>
    </div>
  )
}

export default Reducer