import React, { useEffect } from 'react'
import "./meal.css"
import Favorities from './Favorities'
import { useState } from "react"
function SpecialDishes(props) {
  const[favorite,setFavorite]=useState("")
  const [popup,setPopUp]=useState(false)
  

  const seletMeal =(data)=>{

    setFavorite(data)
    
console.log("favorite dataa",data)
   console.log();
   }
 
   

  let mapedItems = props.meal.map((e,index)=>{
    let itemsNumbers = 10
            if (index < itemsNumbers){
                return (
                    <li onClick={()=>{
                      seletMeal(e)
                      setPopUp(true)
                    }} className='meals' key={index}>
                       <img  src={e.strMealThumb} alt="nil" />
                       <h4>  {e.strMeal} </h4>
                    </li>
                )
            }  
  
})



  return (
    <div className="demo">
       { popup && <Favorities setPopUp={setPopUp} favorite={favorite}  />}
    <div className='container' >
    <div className="texts" >
        <h1>Special Dishes</h1>
       
   </div>
   <ul className="fetch" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",listStyle:'none' ,marginTop:"30px",position:"relative"}}>
          {mapedItems}
   </ul>
   
    </div>
    </div>
  )
}

export default SpecialDishes