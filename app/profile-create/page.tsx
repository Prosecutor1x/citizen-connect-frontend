import Navbar from '@/components/Navbar'
import { Input, Select } from '../lib/chakraui'
import React from 'react'

const CreateProfile = () => {
    return (
        <div className='min-h-screen bg-blueBackground'>
            <Navbar />
            <div className='flex justify-center items-center h-[90vh]'>
                <div className='bg-white  max-w-[70vw] min-w-[50vw] shadow-xl p-6 rounded-2xl text-md justify-items-stretch space-y-4'>
                    <h1 className='text-1.5xl'>Add your personal details</h1>
                    <section>
                        <h2 className='font-medium mb-2'>
                            Name
                        </h2>
                        <Input
                            type="text"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter your Name"
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <section>
                        <h2 className='font-medium mb-2'>
                            Email
                        </h2>
                        <Input
                            type="email"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter your Name"
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <section>
                        <h2 className='font-medium mb-2'>
                            Gender
                        </h2>
                        <Select
                            backgroundColor={'#FBFAFF'}
                            placeholder='Gender'
                            focusBorderColor="#1A75FF"
                            size={'md'}
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
                    <section>
                        <h2 className='font-medium mb-2'>
                            Age
                        </h2>
                        <Input
                            type="input"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter Age"
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <section>
                        <h2 className='font-medium mb-2'>
                            City/Town/Village
                        </h2>
                        <Input
                            type="text"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter City/Town/Village"
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <button className='btn-primary w-full rounded-md'>Submit & Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile