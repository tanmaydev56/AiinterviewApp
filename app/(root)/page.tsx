import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6  max-w-lg'>
       
        <h2 className='text-3xl text-primary-100'>Get started with Prepwise</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae</p>
      
      <Button asChild className='btn-primary max-sm:w-full'><Link href="/interview">Start and interview </Link></Button>
    </div>
    <Image src="/robot.png" alt="eawe" width={500} height={500} className='w-1/2 max-sm:w-full' />
    </section>
    <section className='flex flex-col gap-6 mt-8 '>
      <h2>your interviews </h2>
      <div className='interviews-section'>
          {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>

    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2>take an interview </h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>
        ))}
      </div>
    </section>
    </>
  )
}

export default page
