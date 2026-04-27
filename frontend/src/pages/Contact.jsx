

import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='px-4 md:px-10'>

      {}
      <div className='text-center text-3xl pt-10'>
        <p className='text-gray-700 font-semibold'>
          CONTACT <span className='text-red-600'>US</span>
        </p>
      </div>

      {}
      <div className='my-12 flex flex-col md:flex-row justify-center gap-12 mb-28 text-sm items-center'>
        
        {}
        <img 
          className='w-full md:max-w-[400px] rounded-2xl shadow-lg border border-red-100' 
          src={assets.contact_image} 
          alt="" 
        />

        {}
        <div className='flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-2xl shadow-xl border border-red-100'>
          
          <p className='font-bold text-xl text-red-600'>OUR OFFICE</p>
          
          <p className='text-gray-500 leading-relaxed'>
            54709 Willms Station <br /> 
            Suite 350, Washington, USA
          </p>

          <p className='text-gray-500'>
            📞 (415) 555-0132 <br />
              hospital@gmail.com
          </p>

          <div className='w-full border-t border-red-100'></div>

          <p className='font-bold text-xl text-red-600'>CAREERS AT MEDISYNC</p>
          
          <p className='text-gray-500'>
            Join our team and help revolutionize healthcare experience.
          </p>

          {}
          <button className='bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 active:scale-95'>
            Explore Jobs
          </button>

        </div>
      </div>

    </div>
  )
}

export default Contact
