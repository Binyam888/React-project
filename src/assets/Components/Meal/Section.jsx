import React from 'react'

function Section(props) {
  return (
    <div className='container'>
        <div className="selection-list" >

<ul >
   
    {props.section}
</ul>

</div>
    </div>
  )
}

export default Section