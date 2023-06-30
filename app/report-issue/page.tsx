import Navbar from '@/components/Navbar'
import React from 'react'
import { Input, Radio, RadioGroup, Select, Stack, Textarea } from '../lib/chakraui'
import { IoIosAdd } from 'react-icons/io'

const reportIssuePage = () => {
    return (
        <div className='bg-blueBackground pb-6'>
            <Navbar />
            <div className='bg-white mx-8 my-8 rounded-lg p-8 shadow-xl'>
                <h1 className='text-2xl font-semibold mb-6'>Report New Issue</h1>
                <div className='space-y-6'>
                    <section>
                        <h2 className='text-xl mb-2'>Title*</h2>
                        <Input
                            type="text"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter An Issue Title here"
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <section>
                        <h2 className='text-xl mb-2'>Issue Status*</h2>
                        <RadioGroup>
                            <Stack direction='row' spacing={'5rem'}>
                                <Radio value='1'><span className='px-4 py-2 bg-blue-500 rounded-md text-white font-semibold'>Low</span></Radio>
                                <Radio value='2'><span className='px-4 py-2 bg-yellow-500 rounded-md text-white font-semibold'>Moderate</span></Radio>
                                <Radio value='3'><span className='px-4 py-2 bg-red-500 rounded-md text-white font-semibold'>Severe</span></Radio>
                            </Stack>
                        </RadioGroup>
                    </section>
                    <section>
                        <h2 className='text-xl mb-2'>Description*</h2>
                        <Textarea
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter a brief Description of the issue..."
                            size={'md'}
                            fontSize="base"
                        />
                    </section>
                    <section>
                        <h2 className='text-xl mb-2'>Location*</h2>
                        <div className='justify-between items-center flex space-x-8'>
                            <section className='w-full space-y-2'>
                                <h3 className='text-lg'>District</h3>
                                <Select
                                    backgroundColor={'#FBFAFF'}
                                    placeholder='--select--'
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
                            <section className='w-full space-y-2'>
                                <h3 className='text-lg'>Division</h3>
                                <Select
                                    backgroundColor={'#FBFAFF'}
                                    placeholder='--select--'
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
                        </div>
                    </section>
                    <section>
                        <h2 className='text-xl mb-1'>Add Media</h2>
                        <p className='text-sm font-light text-lightTextColor mb-2'>Add media supporting the issue if possible. Media must be less than 5MB</p>
                        <div className='flex justify-start space-x-4'>
                            <div className='w-[10rem] min-h-[15rem] bg-[#FBFAFF] border-2 border-dashed rounded-md flex justify-center items-center'>
                                <IoIosAdd size={'50'} cursor={'pointer'} />
                            </div>
                            <div className='w-[10rem] min-h-[15rem] bg-[#FBFAFF] border-2 border-dashed rounded-md flex justify-center items-center'>
                                <IoIosAdd size={'50'} cursor={'pointer'} />
                            </div>
                            <div className='w-[10rem] min-h-[15rem] bg-[#FBFAFF] border-2 border-dashed rounded-md flex justify-center items-center'>
                                <IoIosAdd size={'50'} cursor={'pointer'} />
                            </div>
                        </div>

                    </section>
                </div>
                <div className='flex justify-end items-center space-x-8'>
                    <button className='btn-secondary'>Cancel</button>
                    <button className='btn-primary'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default reportIssuePage