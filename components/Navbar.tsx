import React from 'react'

const Navbar = () => {
    return (
        <div className='h-20 px-8 py-4 flex justify-between items-center text-blueDeep font-semibold'>
            <img src='/english.png' className='w-36'/>
            <li className='flex justify-end items-center space-x-8'>
                <ul>
                    Home
                </ul>
                <ul>
                    Dashboard
                </ul>
                <ul>
                    Issue Report
                </ul>
                <ul>
                    Help
                </ul>
                <button className='py-2 px-4 rounded-full bg-blueSecondary hover:bg-bluePrimary hover:text-white'>
                    Register/Login
                </button>
            </li>
        </div>
    )
}

export default Navbar