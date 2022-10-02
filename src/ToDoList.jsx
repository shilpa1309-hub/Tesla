import React, {useState} from 'react'
import CancelIcon from '@mui/icons-material/Cancel';


const listViewStyle = {
  display: 'flex',
  fontSize: '12px',
  cursor: 'pointer'
}


function TodoList() {
  const [todo, setTodo] = useState('')
  const [updatedToDo,setUpdatedToDo] = useState([]) 
  const [editing, setEditing] = useState('')
  function changeInput(e){ 
    setTodo(e.target.value)
  }
  function formSubmit(e){
    e.preventDefault();

    if(editing.length > 0){
      updatedToDo.map((currentTask) => {
        if(currentTask.value === editing){
          return currentTask.value = todo
        }
      })
      setUpdatedToDo(updatedToDo)
      console.log(updatedToDo)

      
      setEditing('')
    }

    else{

    const obj ={
      value: todo,
      key: Date.now()
    }
    setUpdatedToDo([...updatedToDo,obj])
    setTodo("")
  }
  }
  function RemoveTask(uniqueKey){ 
   setUpdatedToDo( 
    updatedToDo.filter((task)=>{
    return task.key != uniqueKey  
   }))
  }
  const handleEdit = (value) => {
    setTodo(value)
    setEditing(value)
  }

  return (
    <div className='todolist'>
      <form onSubmit={formSubmit}>
        <input type="text" placeholder='Enter your task' value={todo}  onChange={changeInput} />
        <input type='submit' value='Add Task' />
      </form>
      <div className='listViewStyle' >
        <ul>
        {
              updatedToDo.map((currenttask)=>{
                return(
                <li key={currenttask.key} style={listViewStyle} onClick={()=>{handleEdit(currenttask.value)}}>
                  {currenttask.value} <CancelIcon onClick={()=>{RemoveTask(currenttask.key)}} ></CancelIcon>
                </li>
                )
              })
        }
        </ul>
     </div>
     
    </div>
  )
}

export default TodoList