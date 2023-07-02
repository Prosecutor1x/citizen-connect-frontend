"use client"
import Navbar from '@/components/Navbar'
import AccountDetails from '@/components/profile/AccountDetails'
import IssueReported from '@/components/profile/IssueReported'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { AiFillThunderbolt, AiOutlineThunderbolt, AiOutlineUser } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

const user = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const currentTab = searchParams.get('currentTab')

    return (
        <div className='bg-blueBackground pb-6'>
            <Navbar />
            <div className='mx-8 py-6 min-h-[90vh] flex justify-between gap-8'>
                <div className='max-w-[20vw] space-y-4 w-full'>
                    <section className='cursor-pointer hover:scale-105 duration-200 flex bg-white justify-start items-center space-x-2 text-blueDeep px-4 py-2.5 shadow-lg font-medium rounded-lg' onClick={() => router.push('/profile?currentTab=personalDetails')}>
                        {
                            currentTab !== 'personalDetails' ? <AiOutlineUser size={'36px'} color='#1A75FF' /> : <FaUser size={'30px'} color='#1A75FF' />
                        }
                        <span>Account</span>
                    </section>
                    <section className='cursor-pointer hover:scale-105 duration-200 flex bg-white justify-start items-center space-x-2 text-blueDeep px-4 py-2.5 shadow-lg font-medium rounded-lg' onClick={() => router.push('/profile?currentTab=issueReported')}>
                        {
                            currentTab !== 'issueReported' ? <AiOutlineThunderbolt size={'36px'} color='#1A75FF' /> : <AiFillThunderbolt size={'36px'} color='#1A75FF' />
                        }
                        <span>Issue Reported</span>
                    </section>
                </div>
                <div className='bg-white shadow-lg rounded-md w-full py-4 px-6'>
                    {currentTab === 'personalDetails' && <AccountDetails />}
                    {currentTab === 'issueReported' && <IssueReported />}
                </div>
            </div>
        </div>
    )
}

export default user