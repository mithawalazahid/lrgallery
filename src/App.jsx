import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count , setcount] =useState(0);

  return (
    <>
      <div>this is count:{count}</div>
      <button onClick={()=>{setcount(count+1)}}>click me</button>
    </>
  )
}

export default App
