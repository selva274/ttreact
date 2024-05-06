import React, { memo } from 'react'

const Memo = ({todos,count}) => {
  return (
    <div>
        
        {todos.map((todo)=>{
               return <div key={todo.id}>
                    <h2>{todo}</h2>
                </div>
            })}
    </div>
  )
}

export default memo(Memo);