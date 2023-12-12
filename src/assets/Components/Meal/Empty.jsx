import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

function Empty() {
  return (
    <div style={{backgroundColor:"wh",margin:"20px",padding:"20px",border:"solid 3px ",borderColor:"yellow", textAlign:"center",borderRadius:"10px"}}>
        <h1>sorry ,currently out of stock</h1>
        <p style={{margin:"10px"}}>please try again later</p>
        <MagnifyingGlass  
     visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
    </div>
  )
}

export default Empty