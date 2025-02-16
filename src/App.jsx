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
    <><
      div className='w-full h-[60px] bg-colorss'>
      <h1 className='text-white font-bold text-[25px] py-2'>whatapp chat direct</h1>

    </div>
      <div className='flex justify-center py-2'>
        <p className='text-gray-500 py-4 w-[90%] text-xl'>now u can message to any person without saving his number in your contact list</p>
      </div>

      <div className='flex justify-center gap-3 mb-2'>
      <input value={form.phone} onChange={handleChange} placeholder='Enter number' className='rounded-md  border border-green-800  p-4 py-1' type="tel" pattern="[0-9]" name='phone' id='phone' required />
      </div>

      <div className='bg-colorss rounded-3xl w-[120px] items-center '>
        <a className='text-white font-bold ' href={web}>CHAT NOW</a>
      </div>



    </>
  )
}

export default App
