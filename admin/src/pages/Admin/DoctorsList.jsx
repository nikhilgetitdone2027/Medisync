import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

    const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

    useEffect(() => {
        if (aToken) {
            getAllDoctors()
        }
    }, [aToken])

    return (
        <div className='m-5 max-h-[90vh] overflow-y-scroll custom-scrollbar'>
            <h1 className='text-2xl font-bold text-red-700'>All Doctors</h1>
            <p className='text-red-400 text-sm'>Manage doctor availability and profiles</p>

            <div className='w-full flex flex-wrap gap-6 pt-5 gap-y-8'>
                {doctors.map((item, index) => (
                    <div 
                        className='border border-red-100 rounded-2xl max-w-56 overflow-hidden cursor-pointer group bg-white hover:shadow-xl hover:shadow-red-100 transition-all duration-300' 
                        key={index}
                    >
                        {}
                        <div className='relative overflow-hidden bg-red-50'>
                            <img 
                                className='group-hover:scale-110 group-hover:bg-red-600 transition-all duration-500 object-cover w-full h-48' 
                                src={item.image} 
                                alt={item.name} 
                            />
                        </div>

                        <div className='p-5'>
                            <p className='text-gray-800 text-lg font-bold group-hover:text-red-600 transition-colors'>
                                {item.name}
                            </p>
                            <p className='text-red-400 text-sm font-medium mb-3'>
                                {item.speciality}
                            </p>
                            
                            {}
                            <div className='mt-4 flex items-center justify-between border-t border-red-50 pt-3'>
                                <div className='flex items-center gap-2'>
                                    <input 
                                        onChange={() => changeAvailability(item._id)} 
                                        type="checkbox" 
                                        checked={item.available} 
                                        className='cursor-pointer accent-red-600 w-4 h-4'
                                    />
                                    <p className={`text-sm font-semibold ${item.available ? 'text-green-600' : 'text-red-500'}`}>
                                        {item.available ? 'Available' : 'Away'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsList
