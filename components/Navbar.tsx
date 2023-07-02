import { useUser } from '@/context/userContext'
import { Avatar } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const { user } = useUser()
    const router = useRouter()
    return (
        <div className='h-20 px-8 py-4 flex justify-between items-center text-blueDeep font-semibold bg-white shadow-lg'>
            <Link href='/'>
                <img src='/english.png' className='w-36' />
            </Link>
            <li className='flex justify-end items-center space-x-8'>
                <ul className='cursor-pointer hover:scale-105 transition-all duration-150'>
                    <Link href={'/'}>
                        Home
                    </Link>
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
                {
                    user ? <Avatar name={user.user_name} size={'sm'} cursor={'pointer'} onClick={()=>router.push('/profile?currentTab=personalDetails')}/> : <button className='btn-primary'>
                        <Link href='/auth/login'>
                            Register/Login
                        </Link>
                    </button>
                }
            </li>
        </div>
    )
}

export default Navbar