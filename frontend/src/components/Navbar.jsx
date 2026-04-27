import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-200'>
      
      {}
      <div 
        onClick={() => navigate('/')} 
        className='flex items-center gap-2 cursor-pointer group'
      >
        <div className='bg-primary text-white p-1.5 rounded-lg group-hover:rotate-6 transition-transform'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
        </div>
        <span className='text-xl font-bold tracking-tight text-gray-800 uppercase'>
          Medi<span className='text-primary'>Sync</span>
        </span>
      </div>

      {}
      <ul className='md:flex items-center gap-8 font-semibold hidden text-gray-600'>
        <NavLink to='/' className={({ isActive }) => `relative pb-1 ${isActive ? 'text-primary' : 'hover:text-black'}`}>
          <li className='cursor-pointer'>HOME</li>
          <hr className='absolute bottom-0 left-0 border-none h-0.5 bg-primary w-full scale-x-0 transition-transform origin-left group-hover:scale-x-100' />
        </NavLink>
        <NavLink to='/doctors' className={({ isActive }) => `relative pb-1 ${isActive ? 'text-primary' : 'hover:text-black'}`}>
          <li className='cursor-pointer'>DOCTORS</li>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => `relative pb-1 ${isActive ? 'text-primary' : 'hover:text-black'}`}>
          <li className='cursor-pointer'>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => `relative pb-1 ${isActive ? 'text-primary' : 'hover:text-black'}`}>
          <li className='cursor-pointer'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-9 h-9 rounded-full border-2 border-primary object-cover' src={userData.image} alt="Profile" />
              <img className='w-2.5 transition-transform group-hover:rotate-180' src={assets.dropdown_icon} alt="" />
              
              {/* --- DROPDOWN MENU --- */}
              <div className='absolute top-full right-0 pt-4 hidden group-hover:block z-50'>
                <div className='min-w-48 bg-white shadow-xl rounded-xl border border-gray-100 flex flex-col p-2 overflow-hidden'>
                  <p onClick={() => navigate('/my-profile')} className='px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer text-gray-700'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer text-gray-700'>My Appointments</p>
                  <hr className='my-1 border-gray-100' />
                  <p onClick={logout} className='px-4 py-3 hover:bg-red-50 text-red-600 rounded-lg transition-colors cursor-pointer font-semibold'>Logout</p>
                </div>
              </div>
            </div>
            : <button 
                onClick={() => navigate('/login')} 
                className='bg-primary text-white px-7 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all hidden md:block'
              >
                Create Account
              </button>
        }
        
        {/* --- MOBILE MENU ICON --- */}
        <button onClick={() => setShowMenu(true)} className='p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors'>
          <img className='w-6' src={assets.menu_icon} alt="Menu" />
        </button>

        {}
        <div className={`md:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex items-center justify-between px-6 py-5 border-b'>
            <span className='text-lg font-bold text-primary'>MediSync</span>
            <button onClick={() => setShowMenu(false)} className='p-2 hover:bg-gray-100 rounded-full'>
               <img src={assets.cross_icon} className='w-6' alt="Close" />
            </button>
          </div>
          <ul className='flex flex-col gap-4 mt-8 px-6 text-xl font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/' className='p-4 hover:bg-blue-50 rounded-xl'>HOME</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' className='p-4 hover:bg-blue-50 rounded-xl'>FIND DOCTORS</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' className='p-4 hover:bg-blue-50 rounded-xl'>OUR STORY</NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' className='p-4 hover:bg-blue-50 rounded-xl'>SUPPORT</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
