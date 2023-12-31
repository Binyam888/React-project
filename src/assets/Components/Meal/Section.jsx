import React ,{useState} from 'react'

import Catogories from './Catogories'
import OneDish from './OneDish'
import Empty from './Empty'
import Pagination from './Pagination'

function Section(props) {

  const [selection,setSelection]=useState([])   
  const [clss,setClss]=useState("Seafood")
  const [active,setActive]=useState(1)
  
  const [currentpage,setCurentPage]=useState(1)
  const  [itemspage,setItemsPage]=useState(4)



let indexOfLastDish  = currentpage * itemspage
// 1* 4 = 4
// 2 * 4 = 8
let indexOfFirstDish = indexOfLastDish - itemspage
// 4 - 4 = 0
// 8 - 4 = 4

  const{singleitem,list,meal,setList,setSingleItem}=props

  const selectionfn =(data)=>{
    setClss(data)
    setCurentPage(1)                   // reseting the curent page
    setActive(1)                      // reseting the active class
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
 const filteredDish =selection.slice(indexOfFirstDish,indexOfLastDish)


  return (
    <div className='container'>
        <div className="selection-list" >



</div>
      
      <Catogories list={list} setList={setList} clss={clss} selectionfn={selectionfn}
       
      />
       <OneDish singleitem={singleitem} />
      <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",listStyle:"none"}}>
      { singleitem !=0 || selection.length !=0 ? filteredDish :<Empty/>}
  
</ul>
     {/* pagination */}


    { selection.length >4 && <Pagination selection={selection}
        setCurentPage={setCurentPage}
        itemspage={itemspage}
        setActive={setActive}
        active={active}
    />}
      
    </div>
  )
}

export default Section