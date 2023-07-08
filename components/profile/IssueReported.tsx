import React, { useEffect, useState } from 'react'
import ReportIssueCard from '../Problem/ReportIssueCard'
import { IIssueData } from '@/Interface/ReportIinterface'
import { fetchAllIssue } from '@/functions/issueReport.tsx/fetchAllIssue'

const IssueReported = () => {
    const [issueAll, setIssueAll] = useState<IIssueData[]>([])

    useEffect(() => {
        getAllIssue()
    }, [])

    console.log(issueAll);


    const getAllIssue = async () => {
        const data = await fetchAllIssue()
        setIssueAll(data as IIssueData[])
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-blueDeep mb-6'>Your Reported Issues</h1>
            <div className='space-y-6'>
                {
                    issueAll?.map((issue, i) => {
                        return (
                            <ReportIssueCard
                                key={i}
                                title={issue.issuetitle}
                                date={issue.issuedate}
                                level={issue.issuelevel}
                                description={issue.issuedescription}
                                location={issue.issuelocation}
                                progress={issue.issueprogress}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default IssueReported