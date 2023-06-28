import React from 'react'

const IssueReportCard = () => {
    return (
        <div className='max-w-[20rem] bg-bluePrimary p-3 rounded-3xl shadow-xl'>
            <div className=' w-full flex justify-center items-center '>
                <span className='px-6 py-1  rounded-full bg-white -mt-10 border-2  border-bluePrimary'>Step 1</span>
            </div>
            <div className='w-full h-full bg-white rounded-2xl'>

                <img src='/search.png' />
                <h1 className='bg-bluePrimary text-white px-6 py-2 font-semibold text-center'>Find a issue in your locality</h1>
                <h2 className='px-6 py-2 text-center'>Report your problems in your locality to the government</h2>
            </div>

        </div>
    )
}

export default IssueReportCard


