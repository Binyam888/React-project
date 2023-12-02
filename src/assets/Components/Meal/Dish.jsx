import React from 'react'
import "./meal.css"
function Dish(props) {
  return (
    <div className='container' >
    <div className="texts" >
        <h1>Special Dishes</h1>
   </div>
   <ul className="fetch" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",listStyle:'none' }}>
          {props.item}
   </ul>
    </div>
  )
}

export default Dish