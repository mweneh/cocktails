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
          src='/hero2.jpg'
          width={300}
          height={600}
          alt="grid image" 
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Amaretto Sour</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
            Amaretto is a sweet Italian liqueur known for its almond or apricot flavors. 
            The Amaretto Sour is an easy cocktail to make, 
            but it can often be overpowered by store-bought sweet and sour mix. 
            The best way to make an Amaretto Sour is with fresh juice instead of the mix. Just like the base recipe for other sours, the Amaretto Sour is made with amaretto, lemon juice, and sugar — 
            and you can also add the egg white if you like.
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
            A classic brunch cocktail, the Bloody Mary is traditionally made with vodka, tomato juice, Worcestershire sauce, black pepper, celery salt, 
            Tabasco, and lemon juice. There are numerous renditions that use different types of alcohol. 
            The best part about the Bloody Mary is its garnish — you can top this cocktail with almost anything, like bacon, pickles, and even cheeseburger sliders.
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
            The Mai Tai is made with rum, orange curaçao, orgeat (almond syrup), 
            and lime juice and is one of the most famous tiki cocktails in the world. 
            This cocktail was created in the San Francisco Bay Area, although there are two stories on how it originated. Both Victor J. Bergeron (Trader Vic) and Donn Beach claim to have invented the Mai Tai. 
            No matter who created it, this tiki drink is paradise in a glass.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature