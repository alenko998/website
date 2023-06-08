import React from 'react'
import gymVid from '../assets/gym3.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <video className='object-cover h-full w-full absolute -z-10' src={gymVid} autoPlay loop muted />
      <div className='bg-black/20 w-full h-full absolute'></div>
      <div className='w-full h-[90%] flex justify-center items-center flex-col text-white z-50'>
        <h1 className='text-3xl lg:text-7xl font-bold self-center'>Gym <span className='text-indigo-600'>Website</span> </h1>
        <p className='text-xl ml-4 mr-4 lg:text-3xl font-bold text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore! Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default Hero