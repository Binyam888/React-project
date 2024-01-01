import React from 'react'


function Favorities(props) {

  


  return (
    <div className='favorite-dish'>
      <h1>{props.favorite.strMeal}</h1>
     <img src= {props.favorite.strMealThumb} alt="" srcset="" />
      <ul style={{display:"flex",flexWrap:"wrap",listStyle:"none",justifyContent:"center",textAlign:"center",flexDirection:"column",padding:"10px"}}>
      <h1 style={{marginBottom:"20px"}}>Instructions</h1>
      <p>{props.favorite.strInstructions}
       </p>
      
      
        <h1 style={{margin:"20px"}}>Ingredients</h1>

     <li>{props.favorite.strIngredient1}</li>
     <li>{props.favorite.strIngredient2}</li>
     <li>{props.favorite.strIngredient3}</li>
     <li>{props.favorite.strIngredient4}</li>
     
      </ul>
    
      
      <button onClick={()=>{
        props.setPopUp(false)
      }} className='close-btn'>Close</button>
    </div>
  )
}

export default Favorities