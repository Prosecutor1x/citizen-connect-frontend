'use client';
import { IIssueData } from '@/Interface/ReportIinterface';
import Navbar from '@/components/Navbar'
import IssueCard from '@/components/Problem/IssueCard';

import { getAllIssue } from '@/functions/issues/getAllIssue';
import React, { use, useEffect } from 'react'



const Issues = () => {

  const [issues, setIssues] = React.useState<IIssueData[]>([])


  useEffect(() => {
    handleGetAllIssues()
  }, [])

  const handleGetAllIssues = async () => {
    try {
      const res = await getAllIssue()
      setIssues(res)
      console.log(res)
    } catch (err: any) {
      console.log(err)
    }


  }

  return (
    <div className='bg-blueBackground pb-6'>
      <Navbar />

      <div className='bg-white mx-8 my-8 rounded-lg p-8 shadow-xl'>
        <h1 className='text-2xl font-semibold text-blueDeep'>Issues In Your Area</h1>

        {issues.map((data, id) => {
          return (
            //   <div className='bg-white shadow-lg rounded-md w-full py-4 px-6 ' key={id}>
            //     <h1>{data.title}</h1>
            //     <p>{data.description}</p>
            //     <p>{data.location}</p>
            //     <p>{data.date}</p>
            //     <p>{data.progress}</p>
            //     <p>{data.level}</p>
            //     <p>{data.type}</p>
            //     <p>{data.comments?.map((data, id) => {
            //       return (
            //         <div key={id}>
            //           <p>{data.body}</p>
            //           <p>{data.type}</p>
            //           <p>{data.userName}</p>
            //         </div>
            //       )
            //     })}</p>





            //   </div>
            // )
            <div className='my-6' key={id}>
              <IssueCard
                issuetitle={data.issuetitle}
                issuedate={data.issuedate}
                issuelevel={data.issuelevel}
                issuedescription={data.issuedescription}
                issuelocation={data.issuelocation}
                issueprogress={data.issueprogress}
                issueRaiser={data.issueRaiser}
                issuetype={data.issuetype}
                _id={data._id}
              />
             
            </div>)
        })}

      </div>

    </div>
  )
}

export default Issues