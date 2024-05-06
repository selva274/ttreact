import React from 'react'

const Contextuser = ({user,setUser}) => {
  return (
    <div>
        <h1>{user}</h1>
        <button onClick={()=>{setUser("kumar")}}>SetUser</button>
    </div>
  )
}

export default Contextuser