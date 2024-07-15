import React from 'react'

function Navbar() {
  return (
    <div className='Navbar justify-between flex bg-[#1D1D1D] py-3 px-10 cursor-pointer font-mono'>

      <h1 className='text-left text-white hover:font-extrabold'>BREAKING NEWS</h1>

      <ul className='flex text-[#2272FF] gap-x-10'>
        <li className='hover:text-red-600 underline decoration-1'>ABOUT</li>
        <li className='hover:text-red-600 underline decoration-1'>CONTACT-US</li>
      </ul>

    </div>
  )
}

export default Navbar


/*
p-[8px] */