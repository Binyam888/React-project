import React from 'react'
import { useState } from 'react';
import {BallTriangle} from 'react-loader-spinner'


function Loder() {
    // const[state,setState]=useState()
 
  return (
    <div className='loader' style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"400px", }}>
 
 <div className="small-part">
 <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}/>
 </div>
 
                
    </div>
  )
}

export default Loder