import React from 'react'
import Dash from './Dash'
import Image from 'next/image'

function Feature() {
  return (
    <div className='container pt-40'>
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Drinks</span>
      </h2>

      <p className="max-w-[550px] pt-10 text-gray-700">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa placeat
        repellat expedita tempore hic iste. Laborum odit illo ex nostrum! Lorem
        ipsum dolor sit amet.
      </p>
      < Dash />

      <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10 '>
        <div className='w-fit mx-auto self-end '>
          <Image 
          className= "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl"
          src='/hero3.jpg'
          width={300}
          height={600}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Memento Strong</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>


        <div className='w-fit mx-auto '>
          <Image 
          className= "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl"
          src='/tail3.jpg'
          width={500}
          height={900}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Long Island</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>


        <div className='w-fit mx-auto self-end '>
          <Image 
          className= "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl"
          src='/tail2.jpg'
          width={300}
          height={600}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Jamaican Girl</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, nesciunt distinctio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature