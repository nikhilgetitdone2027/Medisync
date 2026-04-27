import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAToken, backendUrl } = useContext(AdminContext)
  const { setDToken } = useContext(DoctorContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
        if (data.success) {
          setAToken(data.token)
          localStorage.setItem('aToken', data.token)
          toast.success("Admin Login Successful")
        } else {
          toast.error(data.message)
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/doctor/login', { email, password })
        if (data.success) {
          setDToken(data.token)
          localStorage.setItem('dToken', data.token)
          toast.success("Doctor Login Successful")
        } else {
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
      console.error(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center p-4'>
      <div className='flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-red-100 rounded-2xl bg-white shadow-xl shadow-red-100/50'>
        
        {}
        <div className='w-full mb-2'>
          <p className='text-2xl font-bold text-red-600'><span className='text-gray-800'>{state}</span> Login</p>
          <p className='text-sm text-gray-400 mt-1 font-medium'>Please log in to manage Medisync</p>
        </div>

        {}
        <div className='w-full'>
          <p className='text-sm font-semibold text-gray-700 mb-1'>Email Address</p>
          <input 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
            className='border border-red-100 bg-red-50/30 rounded-lg w-full p-2.5 mt-1 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' 
            type="email" 
            placeholder='admin@medisync.com'
            required 
          />
        </div>

        {}
        <div className='w-full'>
          <p className='text-sm font-semibold text-gray-700 mb-1'>Password</p>
          <input 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            className='border border-red-100 bg-red-50/30 rounded-lg w-full p-2.5 mt-1 outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all' 
            type="password" 
            placeholder='••••••••'
            required 
          />
        </div>

        {}
        <button className='bg-red-600 hover:bg-red-700 text-white w-full py-3 rounded-xl font-bold text-lg shadow-lg shadow-red-200 active:scale-[0.98] transition-all mt-2'>
          Login
        </button>

        {}
        <div className='w-full text-center mt-2'>
          {
            state === 'Admin'
              ? <p className='text-sm text-gray-500'>Doctor Login? <span className='text-red-600 font-bold underline cursor-pointer hover:text-red-800' onClick={() => setState('Doctor')}>Click here</span></p>
              : <p className='text-sm text-gray-500'>Admin Login? <span className='text-red-600 font-bold underline cursor-pointer hover:text-red-800' onClick={() => setState('Admin')}>Click here</span></p>
          }
        </div>

      </div>
    </form>
  )
}

export default Login
