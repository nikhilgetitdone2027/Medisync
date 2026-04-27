import React, { useEffect, useContext } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

    const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
    const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

    useEffect(() => {
        if (aToken) {
            getAllAppointments()
        }
    }, [aToken])

    return (
        <div className='w-full max-w-6xl m-5'>
            {}
            <div className='mb-6'>
                <h1 className='text-2xl font-bold text-red-700'>Appointment Management</h1>
                <p className='text-red-400 text-sm'>View and manage patient bookings</p>
            </div>

            <div className='bg-white border border-red-100 rounded-2xl overflow-hidden shadow-lg shadow-red-100/50'>
                
                {}
                <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-4 px-6 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold text-sm'>
                    <p>#</p>
                    <p>Patient</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Doctor</p>
                    <p>Fees</p>
                    <p className='text-center'>Action</p>
                </div>

                {}
                <div className='max-h-[75vh] overflow-y-scroll custom-scrollbar'>
                    {appointments.map((item, index) => (
                        <div
                            key={index}
                            className='flex flex-wrap justify-between max-sm:gap-3 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center py-4 px-6 border-b border-red-50 hover:bg-red-50/80 transition-all duration-200 group'
                        >
                            {}
                            <p className='max-sm:hidden text-red-300 font-medium group-hover:text-red-500 transition-colors'>{index + 1}</p>

                            {}
                            <div className='flex items-center gap-3'>
                                <div className='relative'>
                                    <img src={item.userData.image} className='w-9 h-9 rounded-full object-cover border-2 border-red-100' alt="" />
                                    <div className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full'></div>
                                </div>
                                <p className='text-gray-800 font-semibold text-base'>{item.userData.name}</p>
                            </div>

                            {/* Age */}
                            <p className='max-sm:hidden text-gray-600 font-medium bg-red-50 w-fit px-2 py-0.5 rounded'>
                                {calculateAge(item.userData.dob)}
                            </p>

                            {/* Date & Time */}
                            <div className='text-red-600 text-sm'>
                                <p className='font-bold'>{slotDateFormat(item.slotDate)}</p>
                                <p className='text-xs opacity-75'>{item.slotTime}</p>
                            </div>

                            {/* Doctor Info */}
                            <div className='flex items-center gap-3'>
                                <img src={item.docData.image} className='w-8 h-8 rounded-full bg-red-50 border border-red-100' alt="" />
                                <p className='text-gray-700 font-medium'>{item.docData.name}</p>
                            </div>

                            {/* Fees */}
                            <p className='text-red-700 font-bold text-base'>
                                {currency}{item.amount}
                            </p>

                            {/* Status / Action */}
                            <div className='flex justify-center'>
                                {item.cancelled ? (
                                    <span className='px-3 py-1 bg-red-100 text-red-500 text-[10px] uppercase tracking-wider font-bold rounded-full border border-red-200'>
                                        Cancelled
                                    </span>
                                ) : item.isCompleted ? (
                                    <span className='px-3 py-1 bg-green-100 text-green-600 text-[10px] uppercase tracking-wider font-bold rounded-full border border-green-200'>
                                        Completed
                                    </span>
                                ) : (
                                    <button 
                                        onClick={() => cancelAppointment(item._id)}
                                        className='group/btn flex items-center justify-center p-2 rounded-full hover:bg-red-100 transition-colors'
                                    >
                                        <img
                                            className='w-6 cursor-pointer group-hover/btn:scale-110 group-hover/btn:rotate-90 transition-all duration-300'
                                            src={assets.cancel_icon}
                                            alt="Cancel"
                                        />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {}
            {appointments.length === 0 && (
                <div className='flex flex-col items-center justify-center py-20 text-red-200'>
                    <p className='text-xl font-bold'>No appointments scheduled</p>
                </div>
            )}
        </div>
    )
}

export default AllAppointments
