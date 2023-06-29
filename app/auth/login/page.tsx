'use client'

import Navbar from '@/components/Navbar'
import React from 'react'
import EnterMobileNumber from '@/components/Auth/EnterMobileNumber'
import VerifyOtp from '@/components/Auth/VerifyOtp'

const login = () => {
  
  return (
    <div className='min-h-screen bg-blueBackground'>
      <Navbar />
      <div className=' flex justify-center items-center h-[90vh]'>
        <div className='bg-white max-w-[70vw] shadow-xl p-6 rounded-3xl grid grid-cols-2 justify-items-stretch place-items-center gap-6'>
          <img src='/login.png' className='w-full bg-blueSecondary rounded-xl' />
          <EnterMobileNumber/>
          {/* <VerifyOtp/> */}
        </div>
      </div>
    </div>

  )
}

export default login