import React from 'react'

const fruits=[{name:"apple",price:150},{name:"Orange",price:100}]

const List = () => {
  return (
    <>
    {fruits.map((data)=>{
       return <div key={data.id}>
            <li>{data.name}</li>
        </div>
    })}
    </>
  )
}

export default List