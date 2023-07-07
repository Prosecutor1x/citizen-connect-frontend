import { IIssueData, IProblemData } from '@/Interface/ReportIinterface'
import Link from 'next/link'
import React from 'react'
import { BsGraphUp } from 'react-icons/bs'
import { LuMapPin } from 'react-icons/lu'

const IssueCard = ({ issuetitle, issuedate, issuedescription, issuelocation, issueprogress, issuelevel,issueRaiser,issuetype,_id }: Partial<IIssueData>) => {
    return (
        <div className={`px-6 py-4 border-l-8 ${issuelevel === 'low' && 'border-blue-600'} ${issuelevel === 'moderate' && 'border-yellow-500'} ${issuelevel === 'severe' && 'border-red-600'}  rounded-lg w-full shadow-custom`}>
            <section className='flex justify-between mb-1'>
                <h2 className='text-lg'>{issuetitle}</h2>
              <Link href={`/issues/${_id}`} > <button className='btn-primary'>View Details</button></Link>
                
            </section>
            <span className='font-semibold text-lg'>{issueRaiser}</span>
                <span className='font-semibold text-lg'>{issuetype}</span>
            <h4 className='text-base font-light text-[#00184485] mb-3'>{issuedate}</h4>
            <section className='flex justify-start items-center gap-8 mb-3'>
                <section className='flex justify-start gap-2 items-center cursor-pointer anchor-custom'>
                    <LuMapPin color='#1A75FF' size={'25'} />
                    <span>{issuelocation?.lat}</span>
                    <span>{issuelocation?.long}</span>
                </section>
                <section className='flex justify-start items-center'>
                    <BsGraphUp color='#1A75FF' size={'25'} />
                    <span className='ml-2 mr-2 font-semibold'>Progress:</span>
                    <span className={`${issueprogress === 'started' && 'text-yellow-600'} ${issueprogress === 'not started' && 'text-red-600'} $issue{progress === 'finished' && 'text-green-600'}`}>{issueprogress}</span>
                </section>
            </section>

            <p className=' text-lightTextColor text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                {issuedescription}</p>

            
        </div>
    )
}

export default IssueCard