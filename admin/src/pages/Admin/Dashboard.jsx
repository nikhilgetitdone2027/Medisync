import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='p-6 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100'>

      {}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

        {}
        <div className='flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg border border-red-100 hover:scale-105 transition-all duration-300'>
          <div className='p-3 bg-red-100 rounded-xl'>
            <img className='w-10' src={assets.doctor_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-red-600'>{dashData.doctors}</p>
            <p className='text-gray-500 text-sm'>Doctors</p>
          </div>
        </div>

        {/* Appointments */}
        <div className='flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg border border-red-100 hover:scale-105 transition-all duration-300'>
          <div className='p-3 bg-red-100 rounded-xl'>
            <img className='w-10' src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-red-600'>{dashData.appointments}</p>
            <p className='text-gray-500 text-sm'>Appointments</p>
          </div>
        </div>

        {/* Patients */}
        <div className='flex items-center gap-4 p-5 rounded-2xl bg-white shadow-lg border border-red-100 hover:scale-105 transition-all duration-300'>
          <div className='p-3 bg-red-100 rounded-xl'>
            <img className='w-10' src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-2xl font-bold text-red-600'>{dashData.patients}</p>
            <p className='text-gray-500 text-sm'>Patients</p>
          </div>
        </div>

      </div>

      {/* Latest Bookings */}
      <div className='mt-10 bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden'>

        {/* Header */}
        <div className='flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white'>
          <img className='w-5' src={assets.list_icon} alt="" />
          <p className='font-semibold text-lg'>Latest Bookings</p>
        </div>

        {/* List */}
        <div>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div 
              key={index}
              className='flex items-center px-6 py-4 gap-4 border-b last:border-none hover:bg-red-50 transition'
            >

              <img className='w-12 h-12 rounded-full object-cover border' src={item.docData.image} alt="" />

              <div className='flex-1'>
                <p className='font-medium text-gray-800'>{item.docData.name}</p>
                <p className='text-sm text-gray-500'>
                  Booking on {slotDateFormat(item.slotDate)}
                </p>
              </div>

              {}
              {
                item.cancelled ? (
                  <span className='text-xs px-3 py-1 rounded-full bg-red-100 text-red-500 font-medium'>
                    Cancelled
                  </span>
                ) : item.isCompleted ? (
                  <span className='text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-medium'>
                    Completed
                  </span>
                ) : (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className='text-xs px-3 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition'
                  >
                    Cancel
                  </button>
                )
              }

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Dashboard
