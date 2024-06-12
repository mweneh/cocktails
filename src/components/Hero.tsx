import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className='relative min-h-screen'>
        <Image 
        className='lg:w-[580px] xl:w-[620px] h-auto absolute right-0 top-0 -z-10 rounded-2xl'
        src="/hero3.jpg" 
        width={1000} 
        height={600} 
        alt='hero_pg' 
        />
        <Navbar />

        <div className='container h-[calc(100vh-120vpx)] grid items-center '>
          <div className=' space-y-4 bg-[#ffffff98] w-fit p-4 '>
            <p className='uppercase font-medium'>throats are open!</p>
            <h2 className='text-4xl sm:text-6xl font-bold'>
              Crispy  <span className=' text-accent'> Fresh</span>
            </h2>
            <p className="text-gray-700 text-[14px] sm:text-[16px]">
            A special drink for a special someone like you.
            <br /> What are you waiting for?
          </p>

          <button className='bg-accent text-white px-6 py-2 rounded-3xl text-[14px] sm:text-[16px]'>
            View More
          </button>
          </div>
        </div>
    </div>
  )
}

export default Hero