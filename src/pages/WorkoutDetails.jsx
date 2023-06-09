import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Exercise from '../components/Exercise';
import FilterRow from '../components/FilterRow';
import Slideover from '../components/Slideover';
import AddExercise from '../forms/AddExercise';

const WorkoutDetails = () => {
    const {id} = useParams();
    const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-screen pt-20 pl-20 pr-20 bg-gray-100 ov overflow-y-auto'>
        <Slideover open={open} setOpen={setOpen} form={<AddExercise/>}/>
        <p className='font-bold text-gray-700'>Add your own exercises</p>
        <button 
          className='mr-2 mt-1 mb-10 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'
          onClick={()=>{setOpen(true)}}
        >
          Add New
        </button>
        <Exercise/>
    </div>
  )
}

export default WorkoutDetails