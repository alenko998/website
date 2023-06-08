import React from 'react'
import { useParams } from 'react-router-dom'
import Exercise from '../components/Exercise';
import FilterRow from '../components/FilterRow';

const WorkoutDetails = () => {
    const {id} = useParams();
  return (
    <div className='w-full h-screen pt-20 pl-20 pr-20 bg-gray-100 ov overflow-y-auto'>
        <p className='font-bold text-gray-700'>Add your own exercises</p>
        <button className='mr-2 mt-1 mb-10 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Add New</button>
        <Exercise/>
        <Exercise/>
        <Exercise/>
    </div>
  )
}

export default WorkoutDetails