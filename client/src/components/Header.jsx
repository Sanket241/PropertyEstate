import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
// import { useSelector } from 'react-redux';

const Header = () => {
    // const { currentUser } = useSelector((state) => state.user);

    return (
        <>
            <header className='bg-slate-200 shadow-md' >
                <div className='flex justify-between items-center max-w-6xl mx-auto'>

                    <NavLink to="/">
                        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                            <img src="./logo.png" alt="" width="30px" />
                            <span className='text-slate-500 p-1' >Property</span>
                            <span className='text-slate-700 p-1' >Estate</span>
                        </h1>
                    </NavLink>
                    <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
                        <input type="text" placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64 ' />
                        <FaSearch type='submit' className='text-slate-500 ' />
                    </form>
                    <ul className='flex gap-4 '>
                        <li className='hidden sm:inline text-slate-700 hover:underline' ><NavLink to="/">Home</NavLink></li>
                        <li className='hidden sm:inline text-slate-700 hover:underline' ><NavLink to="/about">About</NavLink></li>

                        {/* <NavLink to='/profile'>
                            {currentUser ? (
                                <img
                                    className='rounded-full h-7 w-7 object-cover'
                                    src={currentUser.avatar}
                                    alt='profile'
                                />
                            ) : (
                                <li className=' text-slate-700 hover:underline'> Sign in</li>
                            )}
                        </NavLink> */}
                        <li className='hidden sm:inline text-slate-700 hover:underline' ><NavLink to="/sign-in">Sign In</NavLink></li>
                    </ul>
                </div>

            </header>

        </>
    )
}

export default Header