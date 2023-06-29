import React from 'react'

const ReportIssue = () => {
  return (
    <div className='flex justify-center items-center gap-16 pt-10'>
      <img src='reportIssue.png' className='max-w-[30rem]' />
      <div>
        <h1 className='text-4xl font-semibold text-blueDeep'>
            Report Issue to us
        </h1>
        <p className='text-lg mt-4'>Report the issue you are facing in your locality to the governmentr official and get resolved as soon as possible</p>
        <button className='btn-primary mt-4'>Report Issue</button>
      </div>
    </div>
  )
}

export default ReportIssue