import React from 'react'
import gymVid from '../assets/gym.mp4'

const Exercise = () => {
  return (
    <div className='flex flex-col mb-10'>
        {/* naslov */}
        <div>
            <h1 className='text-4xl font-sans'>Title of the exercise</h1>
        </div>
        <div className='bg-gray-400 h-[2px] mb-2'/>
        {/* slika */}
        <div className='w-full h-[400px] flex  justify-start'>
            <video 
                className='w-4/5 h-full object-cover'
                src={gymVid} autoPlay loop muted
                alt="" 
            />
        </div>
        {/* opis */}
        <div className='max-w-[1300px]'>
            <p className='font-bold text-gray-700 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum cupiditate, exercitationem ab repellendus laudantium incidunt voluptas unde illo recusandae soluta blanditiis placeat expedita tenetur alias tempora, possimus harum velit nemo?</p>
        </div>
        {/* delete */}
        <button className='self-start mr-2 mt-1 mb-10 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Delete</button>

    </div>
  )
}

export default Exercise

{/* <div className='w-1/2 h-[400px] bg-red-100'>
<img 
    className='w-full h-full object-cover'
    src="https://images.unsplash.com/photo-1623874106686-5be2b325c8f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'" 
    alt="" 
/>
</div> */}