
import React, { useReducer } from 'react'
const initialTodos=[{id:1,name:"selva",Complete:true},{id:2,name:"kumar",Complete:false}]

const reducer=(state,action)=>{
    switch(action.type){
      case "complete":
        return state.map((todo)=>{
           if(todo.id===action.id){
          return {...todo,Complete:!todo.Complete};
        }else{
          return todo;
        }
        });
      default:
        return state;
    }

};

const App = () => {
  const[todos,dispatch]=useReducer(reducer,initialTodos);

  function handlechange(todo){
    dispatch({type:"complete",id:todo.id});
  }
  return (
    <div>
      {todos.map((todo)=>(
       <div>
       <h1>{todo.name}</h1>
        <input type='checkbox' checked={todo.Complete} onChange={()=>handlechange(todo)}/>
       </div>
      ))}
     
    </div>
  )
}

export default App