import React from 'react'
import { useEffect,useState } from 'react'
import "./meal.css"
function Meal() {
const [list,setList]=useState([])            // feched data frmo the server by catogories
const [meal,setMeal]=useState([])           // feched data from the server
const [filtr,setFiltr]=useState([])        // filtered value for showing catg-list
const [loading,setLoading]=useState(true) // conditional redendering
const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"  
      const response = await fetch(api_key)
      const data = await response.json()
      
      setMeal(data.meals) // added fetched data to meal using setMeal

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

    }catch(error){
        console.error(error)
    }

}




    useEffect(()=>{
    getData()
    getList()
    setLoading(false)
    },[])
    
    let mapedItems = meal.map((e,index)=>{
        let itemsNumbers = 10
                if (index < itemsNumbers){
                    return (
                        <div className='meals' key={index}>
                           <img  src={e.strMealThumb} alt="nil" />
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
            <li className='selection' key={index}  ><img src={val.strMealThumb} alt="nil"  />
            <h4>{val.strMeal}</h4>
            </li>
        )
    })
  
   // maped catogoires
    let catogories = list.map((data,index)=>{
        return(
            
            <li key={index} onClick={()=>{
                selectionfn(data.strCategory)
                console.log(data)

            }} className='ctr-list' >{data.strCategory}</li>
        )

    })
    
  return (
<>
<div className="container"style={{marginTop:"50px"}} >
    <div className="texts" >
    <h1>Special Dishes</h1>
   </div>
    
    <div  className='feched-data' >


     {/* updating the fetched data from the dom */}


     { !loading? mapedItems : <h1>Loading....</h1>} 
 </div>
    <div className="list-catog" style={{textAlign:"center"}}>
             <h1 style={{margin:"50px 0"}}>Search by catogories</h1>
        <ul className='catogry-ul'>
            {/* updating catogories list in the dom */}

             {!loading &&catogories}
        </ul>
    </div>
<div className="selection-list" >

    <ul >
       
        {selection }
    </ul>

</div>
</div>

</>

 
  )
}

export default Meal