import React from 'react'

// method 1--to destucture props---use as props.name and props.role

// function Destucturing(props) {
//   return (
//     <div><h1>This is {props.name} and I am a {props.role}</h1></div>
//   )
// }



// METHOD 2 

function Destucturing({name, role}) {
    return (
      <div><h1>This is {name} and I am a {role}</h1></div>
    )
  }

export default Destucturing