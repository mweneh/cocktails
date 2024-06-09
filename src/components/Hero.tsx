import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='relative min-h-screen'>
        <Image src="/hero2.png" width={1000} height={600} alt='heroPG' />
    </div>
  )
}

export default Hero