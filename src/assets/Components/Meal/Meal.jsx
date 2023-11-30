import React from 'react'
import { useEffect,useState } from 'react'
function Meal() {
const [meal,setMeal]=useState([])
const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=a"  
      const response = await fetch(api_key)
      const data = await response.json()
      console.log(data.meals)
      setMeal(data.meals)

    }catch(error){
        console.error(error)
    }

}
    useEffect(()=>{
    getData()
    },[])
    
    let mapedItems = meal.map((e,index)=>{
                
        return (
            <div style={{padding:"20px"}} key={index}>
                <img style={{width:"300px",borderRadius:"10px"}} src={e.strMealThumb} alt="nil" />
               <h1>  {e.strCategory} </h1>
            </div>
        )

    })
  return (


    <div style={{display:"flex",flexWrap:"wrap"}}>
        {mapedItems}
    </div>
  )
}

export default Meal