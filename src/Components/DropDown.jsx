import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';  
// import {Container , Dropdown} from 'react-bootstrap'; 

function DropDown() {
  return (
  <>
  <div className="App">  
   <Container className='p-4'>  
   <Dropdown>  
  <Dropdown.Toggle variant=" primary" id="dropdown-basic">  
    Dropdown Navigation Button  
  </Dropdown.Toggle>  
  
  <Dropdown.Menu>  
    <Dropdown.Item href="#/action-1">Dropdown Item 1</Dropdown.Item>  
    <Dropdown.Item href="#/action-2">Dropdown Item 2</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 3</Dropdown.Item>  
    <Dropdown.Item href="#/action-3">Dropdown Item 4</Dropdown.Item>  
  </Dropdown.Menu>  
</Dropdown>  
</Container>  
    </div> 
  </>
  )
}

export default DropDown