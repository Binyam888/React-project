import React from 'react'
import { LineWave } from 'react-loader-spinner'

function Pagination(props) {
    const selectionLength =[]
    for(let i=1;i<=props.length;i++){
        console.log(i)
        selectionLength.push(i)
    }
  const slength=  selectionLength.map((item)=>{

    return (
        <li  className="pagination-li"><h4>{item}</h4></li>
    )

    })
  return (
    <section>
        <ul style={{display:"flex",listStyle:"none" ,justifyContent:"center"} }>
            {slength}
        </ul>
    </section>
  )
}

export default Pagination