import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("dog")
setCount(()=>{
  if(count===dog){
    count+1
  }
})
  return (
    <>
     <h1>{count}</h1>
    </>
  )
}

export default App
