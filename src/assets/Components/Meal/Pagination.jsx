
import React  from 'react'
import { LineWave } from 'react-loader-spinner'

function Pagination(props) {
    const selectionLength =[]
   

   const changePage=(data)=>{

    console.log("demooooooooooooooooo",data)
//    let curentId=e.target.id
// props.setCurentPage( curentId)
props.setActive(data)
   }

    for(let i=1;i<= Math.ceil(props.selection.length/props.itemspage) ;i++){
        console.log(i)
        selectionLength.push(i)
    }
  const slength =  selectionLength.map((item)=>{

    return (
        <li id={item} onClick={(e)=>{
            let curentId=e.target.id
            props.setCurentPage( curentId)
            changePage(curentId)
        }}  className={item == props.active ?"pagination-li active" :"pagination-li"}><h4>{item}</h4></li>
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