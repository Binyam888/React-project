import React from 'react'
import { useEffect,useState } from 'react'
import "./meal.css"
import Dish from './SpecialDishes'

import Section from './Section'
import Loder from './Loder'
import Hero from '../Hero/Hero'
// import OneDish from './OneDish'
function Meal() { 

const [list,setList]=useState([])                    // feched data frmo the server by catogories
const [meal,setMeal]=useState([])                   // feched data from the server
const [loading,setLoading]=useState(true)         // conditional redendering
const[singleitem,setSingleItem]=useState([])     //  feching data for single dish-item

// feching data

const getData = async()=>{
    try{
      const api_key ="https://www.themealdb.com/api/json/v1/1/search.php?f=c"  
      const response = await fetch(api_key)
      const data = await response.json()
      
      setMeal(data.meals) // added fetched data to meal using setMeal
      
      setTimeout(() => {
        setLoading(false)
      }, 1000);

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

      setTimeout(() => {
        setLoading(false)
      }, 1000);
     
    }catch(error){
        console.error(error)
    }


   

}


// feching data for single dish Item
const singleItem = async()=>{
    try{
        const api_url ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        const response = await fetch(api_url)
        const result = await response.json()
        setSingleItem(result.meals)

    }
    catch(error){
    console.log(error)

    }

     //useEffect hook

}

    useEffect(()=>{
    getData()
    getList()
    singleItem()
    
    },[])
    
   // filtering catogories to display selection

  
    
    
  return (

<>
    {!loading && <Hero/>}

<div className="container"style={{marginTop:"50px"}} >
   
     {/* updating the fetched data from the dom */}


     { !loading? <Dish meal={meal} setMeal={setMeal}/> :<Loder/>} 

    
    
     {!loading && < Section  singleitem={singleitem} list={list} setList={setList} meal={meal} setSingleItem={setSingleItem}/> }
   

</div>

</>

 
  )
}

export default Meal