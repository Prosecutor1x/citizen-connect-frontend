'use client'
import { IIssueData } from '@/Interface/ReportIinterface'
import Navbar from '@/components/Navbar'
import { getSingleIssue } from '@/functions/issueReport.tsx/getSingleIssue'
import { format, intervalToDuration } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BsGraphUp } from 'react-icons/bs'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import getUserById from '@/functions/user/getUserById'
import { Avatar } from '@chakra-ui/react'
import Link from 'next/link'


const Issue = ({ params }: any) => {

  const issueId = params.issueId
  const [issue, setIssue] = useState<Partial<IIssueData>>()
  const [mySwiper, setMySwiper] = useState<any>();
  const daysPassed :any = issue?.issuedate && intervalToDuration({start:parseInt(issue?.issuedate), end:Date.now()})

  const getIssueRaiser = async (userId: string) => {
    const _username = await getUserById(userId)
    setIssue((prev) => {
      return {
        ...prev,
        issueRaiserName: _username
      }
    })
  }

  console.log(issue);


  const getAllData = async () => {
    await handleGetSingleIssues()
    issue?.issueraiserid && await getIssueRaiser(issue?.issueraiserid)
  }

  useEffect(() => {
    getAllData()
  }, [])

  const handleGetSingleIssues = async () => {
    try {
      const res = await getSingleIssue(issueId)
      setIssue(res)
    } catch (err: any) {
      console.log(err)
    }
  }

  return (

    <div className='min-h-screen bg-blueBackground'>
      <Navbar />
      <div className='grid grid-cols-4 h-[90vh] bg-white rounded-xl shadow-custom mx-8 my-8 divide-x-2 '>
        <div>

        </div>
        <div className={`col-span-3 px-6 py-4 space-y-4 ${issue?.issuelevel === 'severe' && 'border-t-red-500'} ${issue?.issuelevel === 'moderate' && 'border-t-yellow-500'} ${issue?.issuelevel === 'low' && 'border-t-blue-500'} border-t-8`}>
          <section>
            <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>{issue?.issuetitle}</h1>
            <h1>{issue?.issuedate && format(parseInt(issue?.issuedate), "PP")}</h1>
            </div>
            <h1>Raised {daysPassed?.days} days ago</h1>
          </section>
          <p>{issue?.issuedescription}</p>
          <section className='flex justify-start items-center'>
            <BsGraphUp color='#1A75FF' size={30} />
            <span className='ml-2 mr-2 font-semibold'>Progress:</span>
            <span className={`${issue?.issueprogress === 'started' && 'text-yellow-600'} ${issue?.issueprogress === 'not started' && 'text-red-600'} ${issue?.issueprogress === 'finished' && 'text-green-600'} font-semibold`}>{issue?.issueprogress}</span>
          </section>
          <section className='flex justify-start items-center'>
            <AiOutlineThunderbolt color='#1A75FF' size={30} />
            <span className='ml-2 mr-2 font-semibold'>Issue Type:</span>
            <span >{issue?.issuetype}</span>
          </section>
          <section className='flex justify-start items-center'>
            <FaMapMarkerAlt color='#1A75FF' size={30} />
            <span className='ml-2 mr-2 font-semibold'>Location:</span>
            <span >{issue?.issuetype}</span>
          </section>
          <div className='"w-full flex items-center justify-start">'>
            <button
              className="mr-1 text-[#fff] rounded-full"
              onClick={() => {
                if (mySwiper) mySwiper.slidePrev();
              }}
            >
              <IoIosArrowBack size={30} color='#000' />
            </button>
            <Swiper onInit={(ev: any) => setMySwiper(ev)}
              grabCursor={true}
              loop={true}
              slidesPerView={2}
              //pagination={true}
              spaceBetween={10}
              //navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
              className=" mx-auto">
              {issue?.issueimages?.map((img, i) => {
                return (

                  <SwiperSlide>
                    <img src={img} alt='image' key={i} className='' />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <button
              className="mr-1 text-[#fff] rounded-full"
              onClick={() => {
                if (mySwiper) mySwiper.slideNext();
              }}
            >
              <IoIosArrowForward size={30} color='#000' />
            </button>
          </div>
          <div className='flex justify-start items-center'>
            <span className='mr-3 font-semibold'>issue Raised by</span>
            <span className='flex justify-center items-center gap-2'>
              <Avatar name={issue?.issueRaiserName} size={'sm'}/>
              <Link href={`/profile/${issue?.issueraiserid}?currentTab=personalDetails`}>
                <span className='anchor-custom'>{issue?.issueRaiserName}</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Issue