import React from 'react'
import { useEffect,useState } from 'react'
import "./meal.css"
import Dish from './dish'
import Catogories from './Catogories'
import Section from './Section'
function Meal() { 
    const[clss,setClss]=useState()
const [list,setList]=useState([])                    // feched data frmo the server by catogories
const [meal,setMeal]=useState([])                   // feched data from the server
const [selection,setSelection]=useState([])        // filtered value for showing catg-list
const [loading,setLoading]=useState(true)         // conditional redendering
const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"  
      const response = await fetch(api_key)
      const data = await response.json()
      
      setMeal(data.meals) // added fetched data to meal using setMeal
      setLoading(false)

    }catch(error){
        console.error(error)
    }

}

// feched data using the list

const getList = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/categories.php"  
      const response = await fetch(api_key)
      const data = await response.json()
      
      setList(data.categories) // added fetched data to meal using setMeal
      setLoading(false)
    }catch(error){
        console.error(error)
    }

}




    useEffect(()=>{
    getData()
    getList()
    
    },[])
    
    let mapedItems = meal.map((e,index)=>{
        let itemsNumbers = 10
                if (index < itemsNumbers){
                    return (
                        <li className='meals' key={index}>
                           <img  src={e.strMealThumb} alt="nil" />
                           <h4>  {e.strMeal} </h4>
                        </li>
                    )
                }
        
      
    })

    const selectionfn =(data)=>{
        setClss(data)
        console.log(data)
    let fileteredValue = meal.filter((val)=>{
        
        return val.strCategory === data
    })

    // Added the filtered value to the filter state

    setSelection(fileteredValue)
     

     
   
    }

    let selections = selection.map((val,index)=>{
        return (
            <li className='selection' key={index}  ><img src={val.strMealThumb} alt="nil"  />
            <h4>{val.strMeal}</h4>
            </li>
        )
    })
  
   // maped catogoires
    let catogories = list.map((data,index)=>{
        return(
            
            <li key={index} className={data.strCategory == clss ? "active" : ""}  onClick={()=>{
                selectionfn(data.strCategory)
                console.log(data)

            }} >{data.strCategory}</li>
        )

    })
    
  return (
<>





<div className="container"style={{marginTop:"50px"}} >
   
     {/* updating the fetched data from the dom */}


     { !loading? <Dish item={mapedItems}/> : <h1>Loading....</h1>} 

     {!loading && <Catogories catogery={catogories}/>}

     <Section section={selections}/>

</div>

</>

 
  )
}

export default Meal