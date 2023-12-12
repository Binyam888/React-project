import React from 'react'
import { LineWave } from 'react-loader-spinner'

function Pagination(props) {
    const selectionLength =[]

   const changePage=(e)=>{
   let curentId=e.target.id
props.setCurentPage( curentId)
   }

    for(let i=1;i<= Math.ceil(props.selection.length/props.itemspage) ;i++){
        console.log(i)
        selectionLength.push(i)
    }
  const slength =  selectionLength.map((item)=>{

    return (
        <li id={item} onClick={changePage}  className="pagination-li"><h4>{item}</h4></li>
    )

    })
  return (
    <section>
        <ul style={{display:"flex",listStyle:"none" ,justifyContent:"center",flexWrap:"wrap"} }>
            {slength}
        </ul>
    </section>
  )
}

export default Pagination