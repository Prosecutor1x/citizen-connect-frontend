'use client'

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Input, Radio, RadioGroup, Select, Stack, Textarea } from '../lib/chakraui'
import { IoIosAdd } from 'react-icons/io'
import { IProblemData } from '@/Interface/ReportIinterface'

const reportIssuePage = () => {
    const [reportData, setReportData] = useState<IProblemData>({
        title: "",
        description: "",
        type: "",
        level: "low",
        media: [],
        location: "",
        comments: [],
        date: "",
        issueRaiser: ""
    })

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
                            value={reportData.title}
                            fontSize="base"
                            onChange={(e) => setReportData((prev: any) => {
                                return {
                                    ...prev,
                                    title: e.target.value
                                }
                            })}
                        />
                    </section>
                    <section>
                        <h2 className='text-xl mb-2'>Issue Type*</h2>
                        <Select
                            backgroundColor={'#FBFAFF'}
                            placeholder='--select--'
                            focusBorderColor="#1A75FF"
                            size={'md'}
                            value={reportData.type}
                            onChange={(e) => setReportData((prev: any) => {
                                return {
                                    ...prev,
                                    type: e.target.value
                                }
                            })}
                            fontSize="base">
                            <option>
                                Infrastructure Problems
                            </option>
                            <option>
                                Sanitation and Waste Management
                            </option>
                            <option>
                                Public Safety Concerns
                            </option>
                            <option>
                                Environmental Issues
                            </option>
                            <option>
                                Utility Services
                            </option>
                            <option>
                                ransportation and Traffic
                            </option>
                            <option>
                                Health and Public Health
                            </option>
                            <option>
                                Noise or Nuisance Complaints
                            </option>
                            <option>
                                Animal Control
                            </option>
                            <option>
                                General Complaints or Suggestions
                            </option>
                        </Select>
                    </section>
                    <section>
                        <h2 className='text-xl mb-2'>Issue Level*</h2>
                        <RadioGroup value={reportData.level} onChange={(e) => setReportData((prev: any) => {
                                return {
                                    ...prev,
                                    level: e
                                }
                            })}>

                            <Stack direction='row' spacing={'5rem'}>
                                <Radio value='low'><span className='px-4 py-2 bg-blue-500 rounded-md text-white font-semibold'>Low</span></Radio>
                                <Radio value='moderate'><span className='px-4 py-2 bg-yellow-500 rounded-md text-white font-semibold'>Moderate</span></Radio>
                                <Radio value='severe'><span className='px-4 py-2 bg-red-500 rounded-md text-white font-semibold'>Severe</span></Radio>
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
                            value={reportData.description}
                            onChange={(e) => setReportData((prev: any) => {
                                return {
                                    ...prev,
                                    description: e.target.value
                                }
                            })}
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