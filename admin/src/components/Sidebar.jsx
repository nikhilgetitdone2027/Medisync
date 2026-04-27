import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'

const Sidebar = () => {

  const { dToken } = useContext(DoctorContext)
  const { aToken } = useContext(AdminContext)

  
  const navLinkClass = ({ isActive }) => 
    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer transition-all duration-300 group ${
      isActive 
      ? 'bg-red-50 border-r-4 border-red-600 text-red-700 shadow-sm' 
      : 'text-gray-600 hover:bg-red-50/50 hover:text-red-500'
    }`

  return (
    <div className='min-h-screen bg-white border-r border-red-100'>
      
      {}
      {aToken && (
        <ul className='mt-5'>
          <NavLink to={'/admin-dashboard'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.home_icon} alt='' />
            <p className='hidden md:block font-medium'>Dashboard</p>
          </NavLink>

          <NavLink to={'/all-appointments'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.appointment_icon} alt='' />
            <p className='hidden md:block font-medium'>Appointments</p>
          </NavLink>

          <NavLink to={'/add-doctor'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.add_icon} alt='' />
            <p className='hidden md:block font-medium'>Add Doctor</p>
          </NavLink>

          <NavLink to={'/doctor-list'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.people_icon} alt='' />
            <p className='hidden md:block font-medium'>Doctors List</p>
          </NavLink>
        </ul>
      )}

      {}
      {dToken && (
        <ul className='mt-5'>
          <NavLink to={'/doctor-dashboard'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.home_icon} alt='' />
            <p className='hidden md:block font-medium'>Dashboard</p>
          </NavLink>

          <NavLink to={'/doctor-appointments'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.appointment_icon} alt='' />
            <p className='hidden md:block font-medium'>Appointments</p>
          </NavLink>

          <NavLink to={'/doctor-profile'} className={navLinkClass}>
            <img className='w-5 transition-transform group-hover:scale-110' src={assets.people_icon} alt='' />
            <p className='hidden md:block font-medium'>Profile</p>
          </NavLink>
        </ul>
      )}

      {}
      <div className='absolute bottom-10 left-0 w-full px-9 hidden md:block'>
        <div className='p-4 bg-red-50 rounded-2xl border border-red-100'>
          <p className='text-xs font-bold text-red-600 uppercase tracking-widest'>Medisync Pro</p>
          <p className='text-[10px] text-red-400 mt-1'>Admin Management Suite v3.0</p>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
