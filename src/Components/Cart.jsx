import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Sort } from '@mui/icons-material';


const cardDiv = {
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid black',
  width: '15rem',
  // height: '13rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5rem',
  padding: '1rem',
  margin: '1rem',
  fontSize: '0.75rem'

}
const descriptionSpan = {
  textAlign: 'center'
}
const masterDiv = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'

}


function Cart() {
  const [items, setItems] = useState([])
  const [newArray, setNewArray] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [input, setInput] = useState('')
  const [isEditing, setisEditing] = useState('false') ;


  function fetchApiData() {
    setNewArray(items)
    axios.get("https://dummyjson.com/products")
      .then((response) => {
        setItems(response.data.products)
      })
  }
  function filterData(dataToFilter) {
    setIsFiltered(true);
    let temp = items;
    setNewArray(temp.filter((current) => {
      return current.category == dataToFilter
    }))
    ShowData()
  }
  function ShowData() {
    if (isFiltered === false) {
      return (
        items.map((current) => {
          return (
            <div key={current.id} style={cardDiv}>
              
              <img src={current.images[0]} height='100px' width='80px'></img>
              <span>{current.title}</span>
              <span style={descriptionSpan}>{current.description}</span>
              <span>{current.price}</span>
              <span>{current.category}</span>
            </div>
          )
        })
      )
    }
    else{
      return (
        newArray.map((current) => {
          return (
            <div key={current.id} style={cardDiv}>
              
              <img src={current.images[0]} height='100px' width='80px'></img>
              <span>{current.title}</span>
              <span style={descriptionSpan}>{current.description}</span>
              <span>{current.price}</span>
              <span>{current.category}</span>
            </div>
          )
        })
      )
      
    }
  }
  function orderBy(data){
    console.log(data)
    if(isFiltered ==true){

      if(data == 'High to low'){
        const numAscending = [...newArray].sort((a, b) => b.price - a.price);
        // console.log(numAscending);
        setNewArray(numAscending)
      }
      else {
      const numDescending = [...newArray].sort((a, b) => a.price - b.price);
      // console.log(numDescending);
      setNewArray(numDescending)
      }


    }
    else{

      if(data == 'High to low'){
        const numAscending = [...items].sort((a, b) => b.price - a.price);
        // console.log(numAscending);
        setItems(numAscending)
      }
      else {
      const numDescending = [...items].sort((a, b) => a.price - b.price);
      // console.log(numDescending);
      setItems(numDescending)
      }
    }
  
  }

 function getProductName(e){
  setInput(e.target.value)
  if(input.length-1 == 0 || input == null){
    setIsFiltered(false)
  }
  
 }


  function searchProduct(e){
    e.preventDefault() 
    filterData(input)
  }


  return (
    <>
      <button type="button" className="btn btn-outline-laptops" onClick={() => filterData('laptops')}>Laptops</button>
      <button type="button" className="btn btn-outline-fragrances" onClick={() => filterData('fragrances')}>Fragrances</button>
      <button type="button" className="btn btn-outline-skincare" onClick={() => filterData('skincare')}>Skincare</button>
      <button type="button" className="btn btn-outline-groceries" onClick={() => filterData('groceries')}>Groceries</button>
      <button type="button" className="btn btn-outline-home-decoration" onClick={() => filterData('home-decoration')}>Home Decoration</button>
      <form>
      <input placeholder='Enter category name to search' onChange={getProductName}></input>
      <button onClick={searchProduct}>Search</button>
      </form>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          ORDER BY
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item onClick ={()=>{orderBy('High to low')}}>
            Pricing(High to low)
          </Dropdown.Item>
          <Dropdown.Item onClick ={()=>{orderBy('Low to High')}}> Pricing(Low to High)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      


      <button onClick={fetchApiData}>CLICK ME TO SHOW AVAILABLE PRODUCTS</button>
      <div style={masterDiv}>
        {
          <ShowData />
        }
      </div>
    </>
  )
}

export default Cart