import React from 'react'
import Image from 'next/image'
import group from '@/app/images/group.png'
import hand from '@/app/images/hand.png'
import idea from '@/app/images/idea.png'
const JoinCards = () => {
    return (
        <div className='w-full'>
            <div className='grid lg:grid-cols-3 gap-5 mt-2 mx-10 md:grid-cols-3'>
                <div className='flex flex-col text-center shadow-lg p-5 items-center border-2 rounded-lg'>
                    <Image
                        src={group}
                        width={24}
                        height={24}
                        alt='Mambers'
                    />
                    <h1 className='text-[#FF4203] text-[25px] gap-2'>Join as Member</h1>
                    <p className='text-[#FF4203]'>Become a member and help shape a better future together</p>
                </div>
                <div className='flex flex-col  text-center shadow-lg p-5 rounded-lg items-center border-2'>
                    <Image
                        src={hand}
                        width={24}
                        height={24}
                        alt='Mambers'
                    />
                    <h1 className='text-[#FF4203] text-[25px] gap-2'>Join as Volunteer</h1>
                    <p className='text-[#FF4203]'>Join as a volunteer to create positive change in socity</p>
                </div>
                <div className='flex flex-col  text-center shadow-lg p-5 rounded-lg items-center border-2'>
                    <Image
                        src={idea}
                        width={24}
                        height={24}
                        alt='Mambers'
                    />
                    <h1 className='text-[#FF4203] text-[25px] gap-2'>Share your idea</h1>
                    <p className='text-[#FF4203]'>Share your idea and contribute to meaningful change in the community</p>
                </div>
            </div>
        </div>
    )
}

export default JoinCards
