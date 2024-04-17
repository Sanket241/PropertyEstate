import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthbyGoogle from '../components/AuthbyGoogle'
const SignUp = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",

  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target

    setUser({
      ...user,
      [name]: value
    })

  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
      const data = await res.json()
      if (data.success === false) {
        setLoading(false)
        setError(data.message)
        return;
      }
      setLoading(false)
      setError(data.message)
      navigate('/sign-in')
      console.log(data);
    } catch (error) {
      setLoading(false)
      setError(data.message)

    }
  }

  return (
   <>
   
   <div className='p-3 max-w-lg mx-auto' >
        <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
          <input type="text" placeholder="username" className='border p-3 rounded-lg' id="username" name="username" value={user.username} onChange={handleChange} />
          <input type="text" placeholder="email" className='border p-3 rounded-lg' id="email" name="email" value={user.email} onChange={handleChange} />
          <input type="text" placeholder="passowrd" className='border p-3 rounded-lg' id="passowrd" name="password" value={user.password} onChange={handleChange} />
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >{loading ? 'Loading...' : 'Sign Up'}</button>
          <AuthbyGoogle />

        
        </form>
        <div className='flex gap-3 mt-5' >
          <p>Have an account?</p>
          <NavLink to="/sign-in"><span className='text-blue-700' >Sign in</span></NavLink>
        </div>
        {
          error && <div className='text-red-500 my-3' >{error}</div>
        }

      </div>
   
   
   </>
  )
}

export default SignUp