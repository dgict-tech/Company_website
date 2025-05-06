import React from 'react'

function Navbar() {
  return (
    <nav className='hidden lg:flex text-[15px]'>
      <ul className='flex gap-6'>
        <li>
          <a href="#" className='hover:underline hover:text-yellow-200'>HOME</a>
        </li>
        <li>
          <a href="#services" className='hover:underline hover:text-yellow-200'>SERVICES</a>
        </li>
        <li>
          <a href="#works" className='hover:underline hover:text-yellow-200'>WORKS</a>
        </li>
        <li>
          <a href="#about" className='hover:underline hover:text-yellow-200'>ABOUT</a>
        </li>
        <li>
          <a href="#contact" className='hover:underline hover:text-yellow-200'>CONTACT</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar