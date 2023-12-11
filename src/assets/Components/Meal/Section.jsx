import React from 'react'
import { Page } from './Page'

function Section(props) {
  return (
    <div className='container'>
        <div className="selection-list" >

<ul >
   
    {props.section.slice(0,10)}
</ul>

</div>
     {!props.section && <Page/>}  
    </div>
  )
}

export default Section