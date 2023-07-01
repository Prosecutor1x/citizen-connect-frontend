import { IProblemData } from '@/Interface/ReportIinterface'
import React from 'react'
import { BsGraphUp } from 'react-icons/bs'
import { LuMapPin } from 'react-icons/lu'

const ReportIssueCard = ({ title, date, description, location, progress, level }: Partial<IProblemData>) => {
    return (
        <div className={`px-6 py-4 border-l-8 ${level === 'low' && 'border-blue-600'} ${level === 'moderate' && 'border-yellow-500'} ${level === 'severe' && 'border-red-600'}  rounded-lg w-full shadow-custom`}>
            <section className='flex justify-between mb-1'>
                <h2 className='text-lg'>{title}</h2>
                <span className='font-medium'>{date}</span>
            </section>
            <h4 className='text-base font-light text-[#00184485] mb-3'>36 days Ago</h4>
            <section className='flex justify-start items-center gap-8 mb-3'>
                <section className='flex justify-start gap-2 items-center cursor-pointer anchor-custom'>
                    <LuMapPin color='#1A75FF' size={'25'} />
                    <span>{location}</span>
                </section>
                <section className='flex justify-start items-center'>
                    <BsGraphUp color='#1A75FF' size={'25'} />
                    <span className='ml-2 mr-2 font-semibold'>Progress:</span>
                    <span className={`${progress === 'started' && 'text-yellow-600'} ${progress === 'not started' && 'text-red-600'} ${progress === 'finished' && 'text-green-600'}`}>{progress}</span>
                </section>
            </section>

            <p className=' text-lightTextColor text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                {description}</p>
        </div>
    )
}

export default ReportIssueCard