import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [state, setState] = useState('Sign Up')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { backendUrl, token, setToken } = useContext(AppContext)

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Sign Up') {
                
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success("Account created successfully!")
                } else {
                    toast.error(data.message)
                }

            } else {
                
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

                if (data.success) {
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                    toast.success("Logged in successfully!")
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            console.error("API Error:", error)
            toast.error(error.response?.data?.message || "Something went wrong. Check connection.")
        }
    }

    useEffect(() => {
        if (token) {
            navigate('/')
        }
    }, [token, navigate])

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg border-red-50'>
                <p className='text-2xl font-semibold text-red-600'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
                <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment on MediSync</p>
                
                {state === 'Sign Up' && (
                    <div className='w-full'>
                        <p>Full Name</p>
                        <input 
                            onChange={(e) => setName(e.target.value)} 
                            value={name} 
                            className='border border-[#DADADA] rounded w-full p-2 mt-1 focus:border-red-400 outline-none' 
                            type="text" 
                            required 
                        />
                    </div>
                )}

                <div className='w-full'>
                    <p>Email</p>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        className='border border-[#DADADA] rounded w-full p-2 mt-1 focus:border-red-400 outline-none' 
                        type="email" 
                        required 
                    />
                </div>

                <div className='w-full'>
                    <p>Password</p>
                    <input 
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password} 
                        className='border border-[#DADADA] rounded w-full p-2 mt-1 focus:border-red-400 outline-none' 
                        type="password" 
                        required 
                    />
                </div>

                <button type='submit' className='bg-red-600 hover:bg-red-700 transition-colors text-white w-full py-2 my-2 rounded-md text-base font-medium'>
                    {state === 'Sign Up' ? 'Create account' : 'Login'}
                </button>

                {state === 'Sign Up'
                    ? <p>Already have an account? <span onClick={() => setState('Login')} className='text-red-600 underline cursor-pointer font-medium'>Login here</span></p>
                    : <p>Create a new account? <span onClick={() => setState('Sign Up')} className='text-red-600 underline cursor-pointer font-medium'>Click here</span></p>
                }
            </div>
        </form>
    )
}

export default Login
