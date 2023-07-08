'use client'

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Input, Radio, RadioGroup, Select, Stack, Textarea } from '../lib/chakraui'
import { IoIosAdd } from 'react-icons/io'
import { IIssueData } from '@/Interface/ReportIinterface'
import { addnewIssue } from '@/functions/issueReport.tsx/addNewIssue'
import Map from 'react-map-gl';
import getSearchedPLaces from '@/functions/getSearchedPlaces'

const reportIssuePage = () => {
    const [reportData, setReportData] = useState<Partial<IIssueData>>({
        issuetitle: "",
        issuedescription: "",
        issuetype: "",
        issuelevel: "low",
        issuemedia: [],
        issuelocation: "",
        issuecomments: [],
        issuedate: NaN,
        issueRaiser: ""
    })
    const [searchedLocation, setSearchedLocation] = useState<{ lat: number, long: number }>({
        lat: 22.5726,
        long: 88.3639
    })
    const [searchedLocationData, setSearchedLocationData] = useState<any>([])

    const validateForm = () => {
        if (reportData.issuetitle !== "" && reportData.issuedescription !== undefined && reportData.issuetype !== "" && reportData.issuelevel !== undefined) {
            return false
        } else {
            return true
        }
    }

    const handleSubmitReport = async () => {
        const data = {
            issuetitle: reportData.issuetitle,
            issuedescription: reportData.issuedescription,
            issuetype: reportData.issuetype,
            issuelevel: reportData.issuelevel,
            issuemedia: [],
            issuelocation: "",
            issuecomments: [],
            issuedate: Date.now(),
            issueRaiser: ""
        }

        await addnewIssue(data as IIssueData)
    }

    const getPlaces = async (location: string) => {
        const data = await getSearchedPLaces(location)
        data && setSearchedLocationData(data)
    }
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
                            value={reportData.issuetitle}
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
                            value={reportData.issuetype}
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
                        <RadioGroup value={reportData.issuelevel} onChange={(e) => setReportData((prev: any) => {
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
                            value={reportData.issuedescription}
                            onChange={(e) => setReportData((prev: any) => {
                                return {
                                    ...prev,
                                    description: e.target.value
                                }
                            })}
                        />
                    </section>
                    <section className='space-y-2'>
                        <h2 className='text-xl'>Location*</h2>
                        <section className='w-full space-y-2 relative'>
                            <Input
                                type="text"
                                backgroundColor={'#FBFAFF'}
                                focusBorderColor="#1A75FF"
                                placeholder="Search Your Location"
                                size={'md'}
                                fontSize="base"
                                value={reportData.issuelocation}
                                onChange={(e) => {
                                    setReportData((prev: any) => {
                                        return {
                                            ...prev,
                                            location: e.target.value
                                        }
                                    })
                                    getPlaces(e.target.value)
                                }}
                            />
                            <div className='w-full py-2 rounded-md absolute top-7 left-0 z-10'>
                                {
                                    searchedLocationData.features?.map((loc: any, i: number) => {
                                        return <div key={i} className='bg-[#FBFAFF] px-4 py-2 cursor-pointer hover:bg-[#c1c0c5] rounded-md' onClick={() => {
                                            setSearchedLocationData([])
                                            setSearchedLocation({ lat: loc.center[1], long: loc.center[0] })
                                            setReportData((prev: any) => {
                                                return {
                                                    ...prev,
                                                    location: loc.place_name
                                                }
                                            })
                                        }}>{loc.place_name}</div>
                                    })
                                }
                            </div>
                        </section>
                        {/* Map integration */}
                        <Map
                            latitude={searchedLocation.lat}
                            longitude={searchedLocation.long}

                            mapboxAccessToken={'pk.eyJ1Ijoia2luZ3NhcmthcjMwMDYiLCJhIjoiY2xqb2VvNGt6MHloejNzbjN2MnVma3I4dyJ9.mNV9n2t42a5qidyuwUzE-g'}
                            mapLib={import('mapbox-gl')}
                            initialViewState={{
                                latitude: searchedLocation.lat,
                                longitude: searchedLocation.long,
                                zoom: 12
                            }}
                            style={{ width: 'screen', height: 400 }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                        >

                        </Map>

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
                    <button className='btn-primary' disabled={validateForm()} onClick={handleSubmitReport}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default reportIssuePage