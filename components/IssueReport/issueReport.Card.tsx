import React from 'react'

const IssueReportCard = () => {
    return (
        <div className='max-w-[20rem] bg-white py-3 rounded-2xl shadow-lg hover:scale-105 transition-all duration-200'>
            <div className=' w-full flex justify-center items-center '>
                <span className='px-6 py-1  rounded-full bg-bluePrimary text-white -mt-10'>Step 1</span>
            </div>
            <img src='/search.png' />
            <h1 className='bg-bluePrimary text-white px-6 py-4 text-lg font-semibold text-center'>Find a issue in your locality</h1>
            <h2 className='px-6 py-3 text-center'>Report your problems in your locality to the government</h2>
        </div>
    )
}

export default IssueReportCard


