import React from 'react'

const Navbar = () => {
    return (
        <div className='h-20 px-8 py-4 flex justify-between items-center text-blueDeep font-semibold bg-white'>
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
                <button className='btn-primary'>
                    Register/Login
                </button>
            </li>
        </div>
    )
}

export default Navbar