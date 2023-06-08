import React from 'react'
import TestCard from '../components/TestCard'
import { categories } from '../data/data'
import FilterRow from '../components/FilterRow'

const Favorite = () => {
  return (
    <div className='w-full h-full p-20 bg-gray-100'>
      <FilterRow/>
      <TestCard data={categories}/>
    </div>
  )
}

export default Favorite