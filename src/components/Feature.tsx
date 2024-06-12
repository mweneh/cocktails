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
      When looking at a bar menu, the cocktail list can seem endless, 
      but you can never go wrong with a classic. Every year, The Joint announces its bestselling classic cocktails. 
      From margaritas to martinis, scroll through to see the bestselling cocktails and order some.
      </p>
      < Dash />

      <div className='grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10 '>
        <div className='w-fit mx-auto self-end '>
          <Image 
          className= "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl"
          src='/hero2.jpg'
          width={300}
          height={600}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Amaretto Sour</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            A sweet Italian liqueur known for its almond or apricot flavors. 
            Amaretto Sour is made with amaretto, lemon juice, and sugar .
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
            <h2 className="font-medium text-xl">Bloody Mary</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            A classic brunch cocktail,made with vodka, tomato juice, Worcestershire sauce, black pepper, celery salt, 
            Tabasco, and lemon juice. Numerous renditions use different types of alcohol! 
            </p>
          </div>
        </div>


        <div className='w-fit mx-auto self-end '>
          <Image 
          className= "w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl rounded-3xl"
          src='/tail2.jpg'
          width={200}
          height={500}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Mai Tai</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Made with rum, orange curaçao, orgeat (almond syrup), 
            and lime juice. 
            This cocktail was created in the San Francisco Bay Area.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature