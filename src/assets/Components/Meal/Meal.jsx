import React from 'react'
import { useEffect,useState } from 'react'
import "./meal.css"
function Meal() {
const [meal,setMeal]=useState([])
const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"  
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
        let itemsNumbers = 10
                if (index < itemsNumbers){
                    return (
                        <div style={{padding:"20px",}} key={index}>
                           <img style={{width:"250px",height:"250px",borderRadius:"10px"}} src={e.strMealThumb} alt="nil" />
                           <h4>  {e.strMeal} </h4>
                        </div>
                    )
                }
        

    })
  return (
<>
<div className="container"style={{marginTop:"50px"}} >
    <div className="texts" style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <h1>Special Dishes</h1>
   </div>
    
    <div  className='feched-data' style={{display:"flex",flexWrap:"wrap",marginTop:"30px",justifyContent:"center"}}>

    {mapedItems}
</div>

</div>

</>

 
  )
}

export default Meal