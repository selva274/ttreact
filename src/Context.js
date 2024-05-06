import React, { useState } from 'react'
import UserContext from './Context/UserContext'
import Contextuser from './Contextuser'
const Context = () => {
    const[user,setUser]=useState("Selva")
  return (
    <div>
         <UserContext.Provider value={user}>
            <h1>{user}</h1> 
            <Contextuser user={user} setUser={setUser}/>
         </UserContext.Provider>
    </div>
  )
}

export default Context