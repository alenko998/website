import React from 'react'
import TestCard from '../components/TestCard'
import {data} from '../data/data';
import FilterRow from '../components/FilterRow';


const Workouts = () => {
  return (
    <div className='w-full h-full p-20 bg-gray-100'>
        <FilterRow/>
        <TestCard data={data}/>
    </div>
  )
}

export default Workouts