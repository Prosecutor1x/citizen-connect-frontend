import Navbar from '@/components/Navbar'
import AccountDetails from '@/components/profile/AccountDetails'
import React from 'react'
import {AiOutlineThunderbolt, AiOutlineUser} from 'react-icons/ai'

const user = () => {
  return (
    <div className='bg-blueBackground pb-6'>
        <Navbar/>
        <div className='mx-8 py-6 min-h-[90vh] flex justify-between gap-8'>
            <div className='max-w-[20vw] space-y-4 w-full'>
                <section className='flex bg-white justify-start items-center space-x-2 text-blueDeep px-4 py-2 shadow-lg font-medium rounded-lg'> 
                    <AiOutlineUser size={'36px'} color='#1A75FF'/>
                    <span>Account</span>
                </section>
                <section className='bg-white flex justify-start items-center space-x-2 text-blueDeep px-4 py-2 shadow-lg font-medium  rounded-lg'> 
                    <AiOutlineThunderbolt size={'36px'} color='#1A75FF'/>
                    <span>Issue Reported</span>
                </section>
            </div>
            <div className='bg-white shadow-lg rounded-md w-full py-4 px-6'>
                <AccountDetails/>
            </div>
        </div>
    </div>
  )
}

export default user