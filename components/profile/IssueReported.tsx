import React from 'react'
import ReportIssueCard from '../Problem/ReportIssueCard'

const IssueReported = () => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-blueDeep mb-6'>Your Reported Issues</h1>
            <div className='space-y-6'>
                <ReportIssueCard
                    title={'Severe Potholes in the Road of 26 Block'}
                    date={1} 
                    level={'severe'}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 150 only five..."}
                    location={'Belgharia'}
                    progress={'started'}
                    />
                <ReportIssueCard
                    title={'Severe Potholes in the Road of 26 Block'}
                    date={2} 
                    level={'low'}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 150 only five..."}
                    location={'Belgharia'}
                    progress={'finished'}
                    />
                <ReportIssueCard
                    title={'Severe Potholes in the Road of 26 Block'}
                    date={3} 
                    level={'moderate'}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. standard dummy text ever since the 150 only five..."}
                    location={'Belgharia'}
                    progress={'not started'}
                    />
                
            </div>
        </div>
    )
}

export default IssueReported