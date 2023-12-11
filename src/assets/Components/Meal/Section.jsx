import React ,{useState} from 'react'
import { Page } from './Page'
import Catogories from './Catogories'
import OneDish from './OneDish'
import Empty from './Empty'

function Section(props) {

  const [selection,setSelection]=useState([])   
  const [clss,setClss]=useState("Seafood")
  const{singleitem,list,meal,setList,setSingleItem}=props

  const selectionfn =(data)=>{
    setClss(data)
    setSingleItem([])
    // console.log(data)
let fileteredValue = meal.filter((val)=>{
    
    return val.strCategory === data
}).map((val,index)=>{
    return (
        <li className='selection' key={index}  ><img src={val.strMealThumb} alt="nil"  />
        <h4>{val.strMeal}</h4>
        </li>
    )
})

// Added the filtered value to the filter state
setSelection(fileteredValue)
  
 }


  return (
    <div className='container'>
        <div className="selection-list" >



</div>
      
      <Catogories list={list} setList={setList} clss={clss} selectionfn={selectionfn}/>
       <OneDish singleitem={singleitem} />
      <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",listStyle:"none"}}>
      { singleitem !=0 || selection.length !=0 ? selection :<Empty/>}
  
</ul>
      
    </div>
  )
}

export default Section