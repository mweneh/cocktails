import React from 'react'
import Image from 'next/image'
import { AiOutlineMenu } from "react-icons/ai"

function Navbar() {
  return (
    <nav className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image  src='/logo.png' width={100} height={100} alt='logo'/>
            <ul className="md:flex text-white gap-8 items-center font-semibold text-[16px] hidden">
                <li> 
                <a href="/contact" className="hover:text-accent">Home</a>
                </li>
                <li> 
                <a href="/contact" className="hover:text-accent">About</a> </li>
                <li> <a href="/contact" className="hover:text-accent">Drinks</a></li>
                <li> <a href="/contact" className="hover:text-accent">Contact</a></li>

                <button className='bg-accent text-white px-6 py-2 rounded-3xl'> SignUp</button>
            </ul>
            <AiOutlineMenu className='md:hidden text-accent size={30}' />
        </div>
    </nav>
  )
}

export default Navbar