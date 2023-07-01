"use client"
import Hero from '@/components/Hero'
import IssueReportAll from '@/components/IssueReport/IssueReportAll'
import IssueReportCard from '@/components/IssueReport/issueReport.Card'
import Navbar from '@/components/Navbar'
import ReportIssue from '@/components/reportIssue'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-blueBackground">
      <Navbar />
      <Hero />
      <div className='px-24'>
        <IssueReportAll/>
        <ReportIssue/>
      </div>
    </div>
  )
}