import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import AuthbyGoogle from '../components/AuthbyGoogle'

const SignIn = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('user')
  }
  return (
    <>
  <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Email'
            className='border p-3 rounded-lg'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            className='border p-3 rounded-lg'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
          />
          <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            Sign In
          </button>
          <AuthbyGoogle />
        </form>
        <div className='flex gap-2 mt-5'>
          <p>Don't have an account?</p>
          <NavLink to='/sign-up'>
            <span className='text-blue-700'>Sign up</span>
          </NavLink>
        </div>
        {/* {error && <div className='text-red-500 my-3'>{error}</div>} */}
      </div>

    </>
  )
}

export default SignIn