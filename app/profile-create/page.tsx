"use client"
import Navbar from '@/components/Navbar'
import { Input, Select } from '../lib/chakraui'
import React, { useState } from 'react'
import { IUser } from '@/Interface/UserInterface'
import { decodeJWT } from '@/functions/decodeJwt'
import { createUser } from '@/functions/user/createUser'
import { useRouter } from 'next/navigation'

const CreateProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        gender: '',
        age: undefined,
        location: '',
    })
    const jwtToken = window.sessionStorage.getItem('jwtToken') as string;
    const router = useRouter()
    const validateForm = () => {
        if (userData.name !== "" && userData.age !== undefined && userData.email !== "" && userData.location !== "" && userData.gender) {
            return false
        } else {
            return true
        }
    }

    const handleCreateUser = async () => {
        const phnNumber = decodeJWT(jwtToken)
        const data = {
            user_name: userData.name,
            user_email: userData.email,
            gender: userData.gender,
            user_phone: phnNumber,
            user_location: userData.location,
            user_age: userData.age
        }
        
        await createUser(data as Partial<IUser>)
        router.push('/')
    }


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
                            value={userData.name}
                            onChange={(e) => setUserData((prev: any) => {
                                return {
                                    ...prev,
                                    name: e.target.value
                                }
                            })}
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
                            placeholder="Enter your Email id"
                            size={'md'}
                            fontSize="base"
                            value={userData.email}
                            onChange={(e) => setUserData((prev: any) => {
                                return {
                                    ...prev,
                                    email: e.target.value
                                }
                            })}
                        />
                    </section>
                    <section>
                        <h2 className='font-medium mb-2'>
                            Gender
                        </h2>
                        <Select
                            backgroundColor={'#FBFAFF'}
                            placeholder='--select--'
                            focusBorderColor="#1A75FF"
                            size={'md'}
                            value={userData.gender}
                            onChange={(e) => setUserData((prev: any) => {
                                return {
                                    ...prev,
                                    gender: e.target.value
                                }
                            })}
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
                            type="number"
                            backgroundColor={'#FBFAFF'}
                            focusBorderColor="#1A75FF"
                            placeholder="Enter Age"
                            size={'md'}
                            value={userData.age}
                            onChange={(e) => setUserData((prev: any) => {
                                return {
                                    ...prev,
                                    age: e.target.value
                                }
                            })}
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
                            value={userData.location}
                            onChange={(e) => setUserData((prev: any) => {
                                return {
                                    ...prev,
                                    location: e.target.value
                                }
                            })}
                            fontSize="base"
                        />
                    </section>
                    <button className='btn-primary w-full rounded-md' disabled={validateForm()} onClick={handleCreateUser}>Submit & Proceed</button>
                </div>
            </div>
        </div>
    )
}

export default CreateProfile