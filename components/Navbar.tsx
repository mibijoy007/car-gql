'use client'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center p-1 px-3 md:px-4 md:p-2 justify-between border-b-2'>
        <Image 
            src='/logo.png'
            alt='logo'
            width={80}
            height={80}
        />
        <div className='hidden md:flex gap-5'>
            <h3 className='hover:bg-blue-500 p-2 px-4 cursor-pointer rounded-full'>Home</h3>
            <h3 className='hover:bg-blue-500 p-2 px-4 cursor-pointer rounded-full'>History</h3>
            <h3 className='hover:bg-blue-500 p-2 px-4 cursor-pointer rounded-full'>Contact Us</h3>
        </div>
        <UserButton/>
    </div>
  )
}

export default Navbar