import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {}
        <div>
          <div className='flex items-center gap-2 mb-5'>
            <div className='bg-red-600 text-white p-1 rounded-md'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
            </div>
            <span className='text-xl font-bold tracking-tight text-gray-800 uppercase'>
              Medi<span className='text-red-600'>Sync</span>
            </span>
          </div>
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            MediSync is committed to bridging the gap between patients and healthcare professionals. 
            We provide a seamless platform for booking appointments and managing your health journey 
            with the world's most trusted doctors.
          </p>
        </div>

        {}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className='cursor-pointer hover:text-red-600 transition-colors'>Home</li>
            <li className='cursor-pointer hover:text-red-600 transition-colors'>About us</li>
            <li className='cursor-pointer hover:text-red-600 transition-colors'>Contact us</li>
            <li className='cursor-pointer hover:text-red-600 transition-colors'>Privacy policy</li>
          </ul>
        </div>

        {}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>support@medisync.com</li>
          </ul>
        </div>

      </div>

      {}
      <div>
        <hr className='border-gray-200' />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2026 @ MediSync.com - All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer
