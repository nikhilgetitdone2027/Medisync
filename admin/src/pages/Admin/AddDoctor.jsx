import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [experience, setExperience] = useState('1 Year')
    const [fees, setFees] = useState('')
    const [about, setAbout] = useState('')
    const [speciality, setSpeciality] = useState('General physician')
    const [degree, setDegree] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')

    const { backendUrl } = useContext(AppContext)
    const { aToken } = useContext(AdminContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            if (!docImg) return toast.error('Image Not Selected')

            const formData = new FormData();
            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees)) 
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })
            
            if (data.success) {
                toast.success(data.message)
                
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }

    return (
        <div className='min-h-screen bg-red-50 p-5 w-full'>
            <form onSubmit={onSubmitHandler} className='max-w-5xl mx-auto'>
                <p className='mb-6 text-2xl font-bold text-red-800'>Add New Doctor</p>

                <div className='bg-white p-8 border border-red-100 shadow-xl shadow-red-200/50 rounded-2xl w-full max-h-[85vh] overflow-y-scroll'>
                    
                    {}
                    <div className='flex items-center gap-6 mb-10 pb-6 border-b border-red-50'>
                        <label htmlFor="doc-img" className='relative group'>
                            <img 
                                className='w-20 h-20 bg-red-50 rounded-full cursor-pointer object-cover border-2 border-dashed border-red-300 group-hover:border-red-500 transition-all' 
                                src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
                                alt="" 
                            />
                        </label>
                        <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                        <div>
                            <p className='text-red-900 font-semibold'>Doctor Profile Picture</p>
                            <p className='text-xs text-red-400 mt-1'>Required for identification</p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row items-start gap-12 text-gray-700'>
                        
                        {}
                        <div className='w-full lg:flex-1 flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Full Name</p>
                                <input onChange={e => setName(e.target.value)} value={name} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="text" placeholder='Dr. John Doe' required />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Doctor Email</p>
                                <input onChange={e => setEmail(e.target.value)} value={email} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="email" placeholder='doctor@medisync.com' required />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Password</p>
                                <input onChange={e => setPassword(e.target.value)} value={password} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="password" placeholder='••••••••' required />
                            </div>

                            {}
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Doctor Fees</p>
                                <input onChange={e => setFees(e.target.value)} value={fees} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="number" placeholder='e.g. 50' required />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Experience</p>
                                <select onChange={e => setExperience(e.target.value)} value={experience} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer' >
                                    {[...Array(10)].map((_, i) => (
                                        <option key={i} value={`${i + 1} Year`}>{i + 1} Year{i > 0 ? 's' : ''}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className='w-full lg:flex-1 flex flex-col gap-5'>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Speciality</p>
                                <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all cursor-pointer'>
                                    <option value="General physician">General physician</option>
                                    <option value="Gynecologist">Gynecologist</option>
                                    <option value="Dermatologist">Dermatologist</option>
                                    <option value="Pediatricians">Pediatricians</option>
                                    <option value="Neurologist">Neurologist</option>
                                    <option value="Gastroenterologist">Gastroenterologist</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Education/Degree</p>
                                <input onChange={e => setDegree(e.target.value)} value={degree} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="text" placeholder='MBBS, MD' required />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <p className='text-sm font-semibold text-red-800'>Clinic Address</p>
                                <input onChange={e => setAddress1(e.target.value)} value={address1} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all mb-2' type="text" placeholder='Address Line 1' required />
                                <input onChange={e => setAddress2(e.target.value)} value={address2} className='border border-red-100 bg-red-50/30 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' type="text" placeholder='Address Line 2' required />
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-sm font-semibold text-red-800 mb-2'>Doctor Biography</p>
                        <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full border border-red-100 bg-red-50/30 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' rows={4} placeholder='Write professional history...'></textarea>
                    </div>

                    <button type='submit' className='w-full lg:w-max bg-red-600 hover:bg-red-700 active:scale-[0.98] transition-all px-16 py-4 mt-8 text-white rounded-xl font-bold shadow-xl shadow-red-300'>
                        Complete Registration
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddDoctor
