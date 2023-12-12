import React from 'react'

function OneDish(props) {
    const {singleitem} = props
   const items= singleitem.map((item)=>{
        return(
            
            <li className='selection'>
             <img  src={item.strMealThumb} alt="nil" />
             <h4>{item.strMeal}</h4>
            </li>
           

        
            
        )
    })
  return (
    <div className='container' >
        <ul style={{display:"flex",flexWrap:"wrap",listStyle:"none",justifyContent:"center"}}>
            {items.slice(0,4)}
        </ul>

    </div>
  )
}

export default OneDish