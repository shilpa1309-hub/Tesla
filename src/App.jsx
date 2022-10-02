import React , {useState} from 'react'
import ToDoList from './ToDoList'
import Subscribe from './Components/Subscribe'
import Destucturing from './Components/Destucturing'
import Cart from './Components/Cart'


function App() {
  const [count, setCount ] = useState(0)  
  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>ADD</button>
      <button onClick={()=>setCount(count-1)}>SUB</button>
      <ToDoList></ToDoList>
      <Subscribe></Subscribe>
      <Destucturing name="SHILPA" role="SOFTWARE DEVELOPER"></Destucturing>
      <Destucturing name="MANSI" role="DOCTOR"></Destucturing>
      <Destucturing name="JYOTI" role="ACTOR"></Destucturing>
      <Destucturing name="NEHA" role="MODEL"></Destucturing> */}
      <Cart></Cart>
      
    </div>

  )
}

export default App