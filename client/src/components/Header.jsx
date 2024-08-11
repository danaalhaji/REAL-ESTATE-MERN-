import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {FaCity} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>

        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap items-center'>
                <span className='text-slate-400'>Dana</span>
                <span className='text-blue-900'>Estate</span>
                <FaCity className='text-blue-900'/>
            </h1>
        </Link>
            <form className='bg-slate-50 p-3 rounded-lg flex items-center'>
                <input type="text" placeholder='Searh...' className='bg-transparent focus:outline-none w-24 sm:w-64'>
                </input>
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-600 hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-500 hover:underline'>About</li>
                </Link>
                <Link to='/signin'>
                    <li className='hidden sm:inline text-slate-500 hover:underline'>Sign in</li>
                </Link>
            </ul>
        </div>

    </header>
    
  )
}
