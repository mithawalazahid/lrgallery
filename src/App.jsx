import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [form, setform] = useState({ phone: "" })
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }
  const phone = form.phone;
  const web = "https://wa.me/" + "+91" + phone
  return (
    <>

      <h1 className='text-green-700 font-bold text-3xl py-2'>whatapp direct chat</h1>
      <div className='flex justify-center py-2'>
        <p className='text-gray-500 py-4 w-[90%] text-xl'>now u can message to any person without saving his number in your contact list,just enter the number in input box and start chat</p>
      </div>

      <div className='flex justify-center gap-3'>
      <input value={form.phone} onChange={handleChange} placeholder='Enter number' className='rounded-md  border border-green-500  p-4 py-1' type="tel" pattern="[0-9]" name='phone' id='phone' required />
      <a className='text-green-700 font-bold ' href={web}>open</a>
      </div>



    </>
  )
}

export default App
