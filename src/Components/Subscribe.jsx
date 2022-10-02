import React from 'react'
import { useState } from 'react'

function Subscribe() {
    const [message,setMessage] = useState("WELCOME VISITORS")
   
    function letsChange(){
        setMessage( "thanks for subscribing")
    }

  return (
    <div><h1>{message}</h1>
    <button onClick={letsChange}>SUBSCRIBE</button>
    </div>
  )
}

export default Subscribe