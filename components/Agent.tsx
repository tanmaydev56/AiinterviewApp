import { cn } from '@/utils';
import Image from 'next/image'
import React from 'react'

enum callStatus{
    INACTIVE = "INACTIVE",
    CONNECTING  ="CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED"
}
const Agent = ({userName}:AgentProps) => {
    const isSpeaking = true;
    const msgs = [
        'what is ur name',
        'my name is tanmay sharma'
    ];
    const lastMessage = msgs[msgs.length - 1];
  return (
    <>
    <div className='call-view'>
  <div className=' card-interviewer'>
    <div className='avatar'>
      <Image src="/ai-avatar.png" alt="vapi"
        width={65} height={65} className='object-cover' />
      {
        isSpeaking && <span className='animate-speak'/>
      }
    </div>
    <h3>AI Interviewer</h3>
  </div>
<div className='card-border'>
    <div className='card-content'>
      <Image 
        src="/user-avatar.png" alt='userAvatar'
        width={540} height={540} className='object-cover size-[120px] rounded-full' />
      <h3>{userName}</h3>
    </div>
  </div>
</div>
{msgs.length > 0 && (
    <div className='transcript-border'>
        <div className='transcript'>
            <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                {lastMessage}
            </p>
        </div>
    </div>
)}
<div className='w-full flex justify-center '>
    {callStatus != 'ACTIVE' ?
    <button className='relative btn-call'>
        <span className={cn('absolute animate-ping rounded-full opacity-75',
            callStatus != 'CONNECTING' & 'hidden')}            />
            <span>
                   {callStatus === 'INACTIVE'|| callStatus === 'FINISHED' ? "Start Call" : ". . ."}

            </span>
            </button>
     :(<button className='btn-disconnect'>End Call</button>)}
</div>


    
    </>
  )
}

export default Agent
