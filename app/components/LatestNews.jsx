import React from 'react'
import Image from 'next/image'
import news from '@/app/images/news.jpg'
import Link from 'next/link'
const LatestNews = () => {
    return (
        <div className='mt-[40px] md:mx-10 mx-3'>

            <div className=' lg:grid lg:grid-cols-[60%_auto] md:grid md:grid-cols-1'>
                <div>
                    <h1 className='text-6xl text-[#FF4203]'>Latest News</h1>
                    <div className='border-b-2 border-[#FF4203]'></div>

                </div>
            </div>

            <div className=' lg:grid lg:grid-cols-[60%_auto] mt-10 gap-5 md:grid md:grid-cols-1'>

                {/* ========================Left News==================== */}
                <div className='md:grid md:grid-cols-2 p-5 lg:justify-center lg:items-center mb-5 bg-[#f0ccc0]'>
                    <div className='mr-2'>
                    <img className='h-full max-w-auto'
                            src={news.src}
                            alt='Mambers'
                        />
                    </div>
                    <div >
                        <h1 className='text-lg font-bold sm:mt-2'>New opportunities in digitalisation, trade with Australia</h1>
                        <p>Commerce Minister will visit the country at the invitation of Senator Don Farrell, Minister of Trade and Tourism of Australia, according to a statement by the Ministry of Commerce and Industry.</p>
                        <div className='grid grid-cols-2 '>
                            <div><label className='bg-red-700 rounded p-1 mt-3 text-white text-xs'>NEW</label></div>
                            <div ><p>September 24 , 2024</p></div>
                        </div>
                    </div>
                    <div className='mt-4 border-b-2 col-span-2 mb-5'></div>
                    <div className='mr-2'>
                    <img className='h-full max-w-auto'
                            src={news.src}
                            alt='Mambers'
                        />
                    </div>
                    <div >
                        <h1 className='text-lg font-bold sm:mt-2'>New opportunities in digitalisation, trade with Australia</h1>
                        <p>Commerce Minister will visit the country at the invitation of Senator Don Farrell, Minister of Trade and Tourism of Australia, according to a statement by the Ministry of Commerce and Industry.</p>
                        <div className='grid grid-cols-2'>
                            <div><label className='bg-red-700 rounded p-1 mt-3 text-white text-xs'>NEW</label></div>
                            <div>September 24 , 2024</div>
                        </div>
                    </div>
                    <div className=' mt-4 border-b-2 col-span-2 mb-5'></div>
                    <div className='mr-2'>
                    <img className='h-full max-w-auto'
                            src={news.src}
                            alt='Mambers'
                        />
                    </div>
                    <div >
                        <h1 className='text-lg font-bold sm:mt-2'>New opportunities in digitalisation, trade with Australia</h1>
                        <p>Commerce Minister will visit the country at the invitation of Senator Don Farrell, Minister of Trade and Tourism of Australia, according to a statement by the Ministry of Commerce and Industry.</p>
                        <div className='grid grid-cols-2'>
                            <div><label className='bg-red-700 rounded p-1 mt-3 text-white text-xs'>NEW</label></div>
                            <div>September 24 , 2024</div>
                        </div>
                    </div>
                    <div className='mt-4 border-b-2 col-span-2 mb-5'></div>
                    <div className='flex justify-end col-span-2 text-[#FF4203]'><Link className='border-b-2 border-[#FF4203]' href={'/'}>More View</Link></div>
                </div>

                {/* ========================Left News==================== */}

                <div className='bg-blue text-white'>
                <h1 className='text-xl text-[#FF4203] font-bold'>Our Upcoming Events</h1>
                    <div className='border-b-2 border-[#FF4203] md:mt-3'></div>
                    {/* ........................... upcoming main -------- */}
                    <div className='bg-[#FF4203] p-7 rounded-lg mt-1'>
                        {/* ........................... divide part main -------- */}
                        <div className='grid md:grid-cols-[25%_auto] grid-cols-[35%_auto] text-justify'>
                            <div className='bg-white p-1 text-center rounded-b-lg'>
                                <h1 className='text-xl text-[#FF4203] font-bold'>23 -24</h1>
                                <p className='text-[#FF4203]'>sep 2005</p>
                            </div>
                            <div className='flex items-center'><h1 className='text-lg mx-2 md:mx-4'>Commerce Minister will visit trade with Australia</h1></div>
                        </div>
                        <div><p className='text-base mt-2'>New opportunities in digitalisation, trade with Australia New opportunities in digitalisation, trade with Australia
                        Commerce Minister will visit the</p></div>
                        {/* ........................... divide part main -------- */}
                    </div>
                    {/* ........................... upcoming -------- */}
                    {/* ........................... upcoming main -------- */}
                    <div className='bg-[#FF4203] p-7 rounded-lg mt-1'>
                        {/* ........................... divide part main -------- */}
                        <div className='grid md:grid-cols-[25%_auto] grid-cols-[35%_auto] text-justify'>
                            <div className='bg-white p-1 text-center rounded-b-lg'>
                                <h1 className='text-xl text-[#FF4203] font-bold'>23 -24</h1>
                                <p className='text-[#FF4203]'>sep 2005</p>
                            </div>
                            <div className='flex items-center'><h1 className='text-lg mx-2 md:mx-4'>Commerce Minister will visit trade with Australia</h1></div>
                        </div>
                        <div><p className='text-sm mt-2'>New opportunities in digitalisation, trade with Australia New opportunities in digitalisation, trade with Australia
                        Commerce Minister will visit the</p></div>
                        {/* ........................... divide part main -------- */}
                    </div>
                    {/* ........................... upcoming -------- */}
                    {/* ........................... upcoming main -------- */}
                    <div className='bg-[#FF4203] p-7 rounded-lg mt-1'>
                        {/* ........................... divide part main -------- */}
                        <div className='grid md:grid-cols-[25%_auto] grid-cols-[35%_auto] text-justify'>
                            <div className='bg-white p-1 text-center rounded-b-lg'>
                                <h1 className='text-xl text-[#FF4203] font-bold'>23 -24</h1>
                                <p className='text-[#FF4203]'>sep 2005</p>
                            </div>
                            <div className='flex items-center'><h1 className='text-lg mx-2 md:mx-4'>Commerce Minister will visit trade with Australia</h1></div>
                        </div>
                        <div><p className='text-sm mt-2'>New opportunities in digitalisation, trade with Australia New opportunities in digitalisation, trade with Australia
                        Commerce Minister will visit the</p></div>
                        {/* ........................... divide part main -------- */}
                    </div>
                    {/* ........................... upcoming -------- */}
                    <div className='flex justify-end col-span-2 text-[#FF4203] mt-4'><Link className='border-b-2 border-[#FF4203]' href={'/'}>More View</Link></div>
                </div>
                
            </div>
        </div>
    )
}

export default LatestNews
