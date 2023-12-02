import React from 'react'

function Catogories(props) {
  return (
    <div className='container'>

        {/* <ul className='catogories' >


        </ul> */}

<div className="list-catog" style={{textAlign:"center"}}>
             <h1 className='dish-header' >Choose your dishes</h1>
             <p style={{marginBottom:"50px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo omnis dolorem iste ea.<br></br> Accusantium quas minus qui?</p>
        <ul className='catogry-ul'>
            {/* updating catogories list in the dom */}

            {props.catogery}
        </ul>
    </div>
    </div>
  )
}

export default Catogories