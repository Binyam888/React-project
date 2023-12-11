import React from 'react'

function Empty() {
  return (
    <div style={{backgroundColor:"wh",margin:"20px",padding:"20px",border:"solid 3px ",borderColor:"yellow", textAlign:"center",borderRadius:"10px"}}>
        <h1>sorry ,currently out of stock</h1>
        <p style={{margin:"10px"}}>please try again later</p>
    </div>
  )
}

export default Empty