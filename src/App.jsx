import { useState } from 'react'

import './App.css'
import Meal from './assets/Components/Meal/Meal'

function App() {
  const [count, setCount] = useState(0)
// 
  return (
    <>
     <Meal/>
    </>
  )
}

export default App
