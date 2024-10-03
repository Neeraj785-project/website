import Image from 'next/image'
import React from 'react'
import Piyush_Goyal from '@/app/images/Piyush_Goyal.jpg'
import instagram_line from '@/app/images/instagram_line.png'
import facebook from '@/app/images/facebook.png'
import youtube from '@/app/images/youtube.png'
import twitter from '@/app/images/twitter.png'
import Link from 'next/link'
const SiteFooter = () => {
    return (
        <div className='bg-[#FF4203] pt-4 pb-10 rounded-t-2xl'>
            <div className='flex gap-2 mx-10'>
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
                    <h1 className='text-[20px] text-white'>Piyush Goyal</h1>
                    <p className='text-[12px] text-white'>Union Commerce and Industry Ministry & North Mumbai Lok Sabha MP</p>
                </div>

            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-1 mx-10 mt-10 gap-5 justify-center items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl text-white'>Contact Us</h1>
                    <p className='text-white mt-2'>8, Teen Murti Marg, New Delhi -110 011</p>
                    <p className='text-white mt-2'>28, Sonmarg, Laxmibai
                        Jagmohandas Marg
                        Nepean Sea Road
                        Mumbai - 400 006
                    </p>
                    <p className='text-white mt-2'> Email: piyush.goyal@gov.in</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl text-white'>About</h1>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Biography</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Journey</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Achievements</Link></p>

                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl text-white'>My Views</h1>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Visions</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Articles</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Blog</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Quotes</Link></p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl text-white'>Press</h1>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Lates news</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Popular</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Speeches</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>International Coverage</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Quick Views</Link></p>
                </div>
                <div className='flex justify-center items-center flex-col '>
                    <h1 className='text-2xl text-white'>Gallery</h1>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Video</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Images</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Old Images</Link></p>

                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl text-white'>Join Us</h1>
                    <p className='mt-2'><Link href={"/"} className='text-white'>As Member</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>As Volunteer</Link></p>
                    <p className='mt-2'><Link href={"/"} className='text-white'>Share Your Ideas</Link></p>

                </div>
            </div>
            {/* ============================Conacting============= */}
            {/* <div className='mt-5 grid lg:grid-cols-2 mx-10 grid-cols-1 gap-4'>
                <div>
                    <h1 className='text-[20px] text-white'>Stay connected</h1>
                    <div className='flex justify-start items-center gap-2'>
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


                    </div>
                </div>
                <div>Hello</div>
            </div> */}

        </div>
    )
}

export default SiteFooter
