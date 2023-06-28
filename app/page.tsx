import Hero from '@/components/Hero'
import IssueReportAll from '@/components/IssueReport.tsx/IssueReportAll'
import IssueReportCard from '@/components/IssueReport.tsx/issueReport.Card'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <div className='px-8'>
        <IssueReportAll/>
      </div>
    </div>
  )
}