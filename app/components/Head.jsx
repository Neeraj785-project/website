import Image from 'next/image'
import React from 'react'
import Piyush_Goyal from '@/app/images/Piyush_Goyal.jpg'
import instagram_line from '@/app/images/instagram_line.png'
import facebook from '@/app/images/facebook.png'
import youtube from '@/app/images/youtube.png'
import twitter from '@/app/images/twitter.png'
import Link from 'next/link'
const Head = () => {
    return (
        <div className=' md:grid md:grid-cols-2 md:mx-20 md:my-2 hidden'>

            <div className='flex gap-2'>
                <div>
                    <Image
                        alt="Picture of the author"
                        src={Piyush_Goyal}
                        width={50}
                        height={50}
                        className="rounded-full aspect-square object-cover"
                    />
                </div>
                <div>
                    <h1 className='text-[20px] text-[#FF4203]'>Piyush Goyal</h1>
                    <p className='text-[12px] text-[#FF4203]'>Union Commerce and Industry Ministry & North Mumbai Lok Sabha MP</p>
                </div>

            </div>
            <div className='flex justify-end items-center gap-2'>
                <Link href={"/"}>
                    <Image
                        alt="Picture of the author"
                        src={instagram_line}
                        width={24}
                        height={24}
                    //className='h-4'
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        alt="Picture of the author"
                        src={facebook}
                        width={24}
                        height={24}

                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        alt="Picture of the author"
                        src={twitter}
                        width={24}
                        height={24}
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        alt="Picture of the author"
                        src={youtube}
                        width={24}
                        height={24}

                    />
                </Link>
                <button className='border-2 rounded-full border-[#FF4203] p-3 drop-shadow-md'><p className='text-[12px] text-[#FF4203]'>join as Volunteer</p></button>

            </div>
        </div>

    )
}

export default Head
