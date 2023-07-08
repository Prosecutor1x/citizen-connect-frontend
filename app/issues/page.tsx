'use client';
import { IIssueData } from '@/Interface/ReportIinterface';
import Navbar from '@/components/Navbar'
import ReportIssueCard from '@/components/Problem/ReportIssueCard';

import { fetchAllIssue } from '@/functions/issueReport.tsx/fetchAllIssue';
import React, { useEffect } from 'react'



const Issues = () => {

  const [issues, setIssues] = React.useState<IIssueData[]>([])


  useEffect(() => {
    handleGetAllIssues()
  }, [])

  const handleGetAllIssues = async () => {
    try {
      const res = await fetchAllIssue()
      setIssues(res)
    } catch (err: any) {
      console.log(err)
    }


  }

  return (
    <div className='bg-blueBackground pb-6 min-h-screen'>
      <Navbar />
      <div className='bg-white mx-8 my-8 rounded-lg p-8 shadow-xl min-h-[90vh]'>
        <h1 className='text-2xl font-semibold text-blueDeep'>Issues In Your Area</h1>

        {issues.map((issue, id) => {
          return (
            <div className='my-6' >
              <ReportIssueCard
                key={id}
                title={issue.issuetitle}
                date={issue.issuedate}
                level={issue.issuelevel}
                description={issue.issuedescription}
                location={issue.issuelocation}
                progress={issue.issueprogress}
                issueRaiser={issue.issueRaiser}
                issueType={issue.issuetype}
              />
            </div>)
        })}

      </div>

    </div>
  )
}

export default Issues