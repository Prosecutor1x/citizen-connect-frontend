import React from 'react'
import IssueReportCard from './issueReport.Card'
import GrNext from 'react-icons/gr'

const IssueReportAll = () => {
  return (
    <div className='flex justify-center items-center space-x-20 mt-20 mb-10'>
        <IssueReportCard/>
        <span className='text-6xl'>&gt;</span>
        <IssueReportCard/>
        <span className='text-6xl'>&gt;</span>
        <IssueReportCard/>
    </div>
  )
}

export default IssueReportAll