import React, { useState } from 'react'
import TestCard from '../components/TestCard'
import { categories } from '../data/data'
import Slideover from '../components/Slideover'

const MyWorkouts = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-screen p-20 bg-gray-100'>
        <Slideover open={open} setOpen={setOpen}/>
        <p className='font-bold text-gray-700'>Custom your own workout</p>
        <button onClick={()=>{setOpen(true)}} className='mr-2 mt-1 mb-10 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Add New</button>
        <TestCard data={categories}/>    
    </div>
  )
}

export default MyWorkouts