import React from 'react'


const TestCard = ({data}) => {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 '>
      {data.map((item,index)=>(
        <a href={`/workout/${item.id}`} >
        <div className='mb-5 border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
            <img 
                className='w-full h-[250px] object-cover rounded-t-lg'
                src={item.image}
                alt={item.name} />
            <div className='flex justify-between p-10 overflow-scroll h-[110px]'>
                <h1 className='font-sans text-xl'>{item.name}</h1>
            </div>
            <div className='bg-gray-200  h-[2px] mx-10'/>
            <div className='p-10 flex flex-col h-[250px] overflow-scroll'>
                <p className='mb-2'> <span className='font-bold'> Difficulty</span>: {item.difficulty}</p>
                <p className='mb-2'> <span className='font-bold'> Goal </span>: {item.goal}</p>
                <p> <span className='font-bold'> Description </span>: {item.description}</p>
            </div>
            <button className='mb-10 ml-10 mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Add to favorite</button>
        </div>
        </a>
      ))}
    </div>
    
  )
}

export default TestCard