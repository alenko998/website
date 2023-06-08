import React from 'react'

const FilterRow = () => {
  return (
      <div className='flex flex-col md:flex-row justify-between mb-10'>

        {/* filter type */}
        <div>
          <p className='font-bold text-gray-700'>Goal</p>
          <div className='flex justify-between flex-wrap'>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Lose fat</button>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Muscle gain</button>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Mass gain</button>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Cardio build</button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className='font-bold text-gray-700'>Difficulty</p>
          <div className='flex justify-between flex-wrap'>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Easy</button>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Medium</button>
            <button className='mr-2 mt-1 mb-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Hard</button>

          </div>
        </div>

      </div>
  )
}

export default FilterRow