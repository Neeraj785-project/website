import React from 'react'
import ImageSlider from '@/app/components/ImageSlider'
import JoinCards from './JoinCards'
import LatestNews from './LatestNews'

const Home = () => {
  return (
  <div className='w-[100%]'>
       <ImageSlider/>
       <JoinCards/>
       <LatestNews/>
       </div>
  )
}

export default Home
