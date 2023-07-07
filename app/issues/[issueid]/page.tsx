'use client'
import { IIssueData } from '@/Interface/ReportIinterface'
import Navbar from '@/components/Navbar'
import { getSingleIssue } from '@/functions/issues/getSingleIssue'
import React, {useEffect, useState } from 'react'


const Issue = ({params}:any ) => {

  const issueId = params.issueid
  const [issue, setIssue] = useState<IIssueData>()


  useEffect(() => {
    handleGetSingleIssues()
  }, [])

  const handleGetSingleIssues = async () => {
    try {
      const res = await getSingleIssue(issueId)
      setIssue(res)
      console.log(res)
      
    } catch (err: any) {
      console.log(err)
    }
  }  

  return (

    <div  >
      <Navbar/>

      <h1>{issue?.issuetitle}</h1>
    </div>
  )
}

export default Issue