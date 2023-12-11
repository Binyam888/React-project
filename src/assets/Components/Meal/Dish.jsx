import React from 'react'
import "./meal.css"
function Dish(props) {
  
  let mapedItems = props.meal.map((e,index)=>{
    let itemsNumbers = 10
            if (index < itemsNumbers){
                return (
                    <li className='meals' key={index}>
                       <img  src={e.strMealThumb} alt="nil" />
                       <h4>  {e.strMeal} </h4>
                    </li>
                )
            }
    
  
})



  return (
    <div className='container' >
    <div className="texts" >
        <h1>Special Dishes</h1>
   </div>
   <ul className="fetch" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",listStyle:'none' ,marginTop:"30px"}}>
          {mapedItems}
   </ul>
    </div>
  )
}

export default Dish