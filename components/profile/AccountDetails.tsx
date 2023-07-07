import { useUser } from '@/context/userContext'
import { Avatar, Input, Select } from '../../app/lib/chakraui'
import React from 'react'

const AccountDetails = () => {
    const {user} = useUser()
    return (
        <div className='space-y-6'>
            <section className='flex justify-start space-x-4 items-center '>
                <Avatar name={user?.username} size='2xl' />
                <div>
                    <h1 className='text-2xl font-semibold'>{user?.username}</h1>
                </div>
            </section>
            <div className='grid grid-cols-5 gap-4 place-content-center items-center'>
                <section className='col-span-2'>
                    <h1 className='text-xl font-medium mb-1'>Email id</h1>
                    <p className='text-base font-light text-[#00184485]'>All of your document and messages will be sent via this email id</p>
                </section>
                <section className='col-span-3'>
                    <Input
                        type="text"
                        backgroundColor={'#FBFAFF'}
                        focusBorderColor="#1A75FF"
                        placeholder="abc@gmail.com"
                        size={'md'}
                        fontSize="base"
                        value={user?.useremail}
                    />
                </section>
            </div>
            <hr className='my-2' />
            <div className='grid grid-cols-5 gap-4 place-content-center items-center'>
                <section className='col-span-2'>
                    <h1 className='text-xl font-medium mb-1'>Gender</h1>
                </section>
                <section className='col-span-3'>
                    <Select
                        backgroundColor={'#FBFAFF'}
                        placeholder='Gender'
                        focusBorderColor="#1A75FF"
                        size={'md'}
                        defaultValue={user?.gender}
                        fontSize="base">
                        <option>
                            Male
                        </option>
                        <option>
                            Female
                        </option>
                        <option>
                            Trans
                        </option>

                    </Select>
                </section>
            </div>
            <hr className='my-2' />
            <div className='grid grid-cols-5 gap-4 place-content-center items-center'>
                <section className='col-span-2'>
                    <h1 className='text-xl font-medium mb-1'>Age</h1>
                </section>
                <section className='col-span-3'>
                    <Input
                        type="text"
                        backgroundColor={'#FBFAFF'}
                        focusBorderColor="#1A75FF"
                        placeholder="Enter Age"
                        size={'md'}
                        value={user?.userage}
                        fontSize="base"
                    />
                </section>
            </div>
            <hr className='my-2' />
            <div className='grid grid-cols-5 gap-4 place-content-center items-center'>
                <section className='col-span-2'>
                    <h1 className='text-xl font-medium mb-1'>Locality</h1>
                </section>
                <section className='col-span-3'>
                    <Input
                        type="text"
                        backgroundColor={'#FBFAFF'}
                        focusBorderColor="#1A75FF"
                        placeholder="Enter City/Town/Village"
                        size={'md'}
                        value={user?.userlocation}
                        fontSize="base"
                    />
                </section>
            </div>
        </div>
    )
}

export default AccountDetails