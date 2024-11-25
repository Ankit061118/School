import React from 'react'
import Navbar from '../Components/Navbar'
import Headers1 from '../Components/Headers1'
import SlidingText from '../Components/SlidingText'
import Last from '../Components/Last'
import { FaMessage } from 'react-icons/fa6'

const Home = () => {
  return (
    <div className='relative mb-10 '>
      <Navbar/>
      <Headers1/>
      <SlidingText/>
      <Last/>
      <div className="fixed z-10 message top-[450px] md:top-[550px]   right-10 md:right-20 border rounded-full bg-red-900 p-3  border-red-900 shadow-lg text-white">
      <div className="">
      <FaMessage className='' />
      </div>
      </div>
    </div>
  )
}

export default Home
