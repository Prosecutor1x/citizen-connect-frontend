import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-20 px-8 py-4 flex justify-between items-center text-blueDeep font-semibold bg-white'>
            <img src='/english.png' className='w-36' />
            <li className='flex justify-end items-center space-x-8'>
                <ul className='cursor-pointer hover:scale-105 transition-all duration-150'>
                    Home
                </ul>
                <ul className='cursor-pointer hover:scale-105 transition-all duration-150'>
                    Dashboard
                </ul>
                <ul className='cursor-pointer hover:scale-105 transition-all duration-150'>
                    Issue Report
                </ul>
                <ul className='cursor-pointer hover:scale-105 transition-all duration-150'>
                    Help
                </ul>
                <button className='btn-primary'>
                    <Link href='/auth/login'>
                        Register/Login
                    </Link>

                </button>
            </li>
        </div>
    )
}

export default Navbar