import React from 'react'

function ChildComponent({name, greetHandler}) {
  return (
    <div>
        <button onClick={()=>greetHandler(name)}>Greet Parent</button></div>
  )
}

export default ChildComponent