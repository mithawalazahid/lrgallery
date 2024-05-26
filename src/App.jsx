import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [form, setform] = useState({ phone: "" })



  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  
    
    const phone = form.phone;
    const web = "https://wa.me/" + "+91"+phone
    
    
    function searchURL() {

      console.log(web)
     alert("testing")
  }
    
    
  return (
    <>
      
     <h1>whatapp direct chat</h1>
    <div className='gap'>

    </div>
    <input value={form.phone} onChange={handleChange} placeholder='Enter number' className='rounded-full  border border-green-500 w-full p-4 py-1' type="tel" pattern="[0-9]"name='phone' id='phone' required />
     <a href={web}>open</a>

    
     
    </>
  )
}

export default App
