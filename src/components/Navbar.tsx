import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai"

function Navbar() {
  return (
    <nav className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image  src='/logo.png' width={50} height={50} alt='logo'/>
            <ul className="md:flex text-white gap-8 items-center font-semibold text-[16px] hidden">
                <li> Home</li>
                <li> About </li>
                <li> Drinks</li>
                <li> Contact</li>

                <button className='bg-accent text-white px-6 py-2 rounded-3xl'> SignUp</button>
            </ul>
            <AiOutlineMenu className='md:hidden text-accent size={30}' />
        </div>
    </nav>
  )
}

export default Navbar