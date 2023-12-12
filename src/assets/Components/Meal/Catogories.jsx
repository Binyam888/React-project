import React from 'react'

function Catogories(props) {
  const{clss,list,selectionfn,}=props
  let catogery = list.map((data,index)=>{
    return(
        
        <li key={index} className={data.strCategory == clss ? "active" : ""}  onClick={()=>{
          
            selectionfn(data.strCategory)
            

        }} >{data.strCategory}</li>
    )

})
 
  return (
    <div className='container'>


<div className="list-catog" style={{textAlign:"center"}}>
             <h1 className='dish-header' >Choose your dishes</h1>
             <p style={{marginBottom:"50px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo omnis dolorem iste ea.<br></br> Accusantium quas minus qui?</p>
        <ul className='catogry-ul'>


            {/* updating catogories list in the dom */}

            {catogery}
        </ul>
    </div>
    </div>
  )
}

export default Catogories