import React from 'react'
import { useEffect,useState } from 'react'
import "./meal.css"
function Meal() {
const [meal,setMeal]=useState([])
const [filtr,setFiltr]=useState([])
const [loading,setLoading]=useState(true)
const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"  
      const response = await fetch(api_key)
      const data = await response.json()
      
      setMeal(data.meals)

    }catch(error){
        console.error(error)
    }

}
    useEffect(()=>{
    getData()
    setLoading(false)
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

    const selectionfn =(data)=>{
        console.log(data)
    let fileterrr = meal.filter((val)=>{
        
        return val.strCategory === data
    })

    // Added the filtered value to the filter state
    setFiltr(fileterrr)
     

     
   
    }

    let selection = filtr.map((val,index)=>{
        return (
            <li key={index} style={{margin:"10px"}} ><img style={{width:"250px",height:"250px",borderRadius:"10px"}} src={val.strMealThumb} alt="nil"  /></li>
        )
    })
  
   // maped catogoires
    let catogories = meal.map((data,index)=>{
        return(
            
            <li onClick={()=>{
                selectionfn(data.strCategory)

            }} className='ctr-list' >{data.strCategory}</li>
        )

    })
  return (
<>
<div className="container"style={{marginTop:"50px"}} >
    <div className="texts" style={{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <h1>Special Dishes</h1>
   </div>
    
    <div  className='feched-data' style={{display:"flex",flexWrap:"wrap",marginTop:"30px",justifyContent:"center"}}>

     { !loading? mapedItems : <h1>Loading....</h1>} 
 </div>
 <div className="list-catog" style={{textAlign:"center"}}>
 <h1>Search by catogories</h1>
    <ul style={{display:"flex",flexWrap:"wrap",textDecoration:"none",listStyle:"none",padding:"20px"}}>
        {!loading &&catogories}
    </ul>
</div>
<div className="selection-list" >

    <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",padding:"20px",listStyle:"none",}}>
       
        {selection }
    </ul>

</div>
</div>

</>

 
  )
}

export default Meal