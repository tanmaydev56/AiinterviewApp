import React from 'react'
import dayjs from 'dayjs'
import { getRandomInterviewCover } from '@/utils'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import DisplayTechIcons from './DisplayTechIcons'

const InterviewCard = ({interviewid,role,techStack,userId,type,createdAt}:InterviewCardProps) => {
  const feedBack = null as Feedback | null

 const normalisedType = /mix/gi.test(type) ? "Mixed" : type;

  const formatedDate = dayjs(feedBack?.createdAt || createdAt || Date.now()).format("DD-MM-YYYY")
const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalisedType] || "bg-light-600";

    return (
  <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          {/* Type Badge */}
          <div
            className={cn(
              "absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg",
              badgeColor
            )}
          >
            <p className="badge-text ">{normalisedType}</p>
          </div>

          {/* Cover Image */}
          <Image
            src={getRandomInterviewCover()}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-fit size-[90px]"
          />

          {/* Interview Role */}
          <h3 className="mt-5 capitalize">{role} Interview</h3>

          {/* Date & Score */}
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar"
              />
              <p>{formatedDate}</p>
            </div>

            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="star" />
              <p>{feedBack?.totalScore || "---"}/100</p>
            </div>
          </div>

          {/* Feedback or Placeholder Text */}
          <p className="line-clamp-2 mt-5">
            {feedBack?.finalAssessment ||
              "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>

        <div className="flex flex-row justify-between">
          <DisplayTechIcons techStack={techStack} />

          <Button className="btn-primary">
            <Link
              href={
                feedBack
                  ? `/interview/${interviewid}/feedback`
                  : `/interview/${interviewid}`
              }
            >
              {feedBack ? "Check Feedback" : "View Interview"}
            </Link>
          </Button>
          </div>
        
      </div>
    </div>
  )
}

export default InterviewCard
