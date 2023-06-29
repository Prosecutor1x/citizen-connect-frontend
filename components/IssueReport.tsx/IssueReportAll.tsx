import React from 'react'
import IssueReportCard from './issueReport.Card'
import GrNext from 'react-icons/gr'

const IssueReportAll = () => {
  return (
    <div className='mt-20 pb-10 '>
      <h1 className='font-bold text-deepBlue text-4xl  text-center mb-10'>Steps to Report a Issue</h1>
      <div className='flex justify-center items-center space-x-16'>
        <IssueReportCard />
        {/* <span className='text-6xl'>&gt;</span> */}
        <IssueReportCard />
        {/* <span className='text-6xl'>&gt;</span> */}
        <IssueReportCard />
      </div>
    </div>

  )
}

export default IssueReportAll