import React, { useState } from 'react'
import { FaCross, FaGripLines } from "react-icons/fa6";

const Navbar = () => {
  const [show,setShow]=useState(false)
  return (
    <div className='flex  items-center md:justify-center w-full h-[80px] shadow-md relative '>
   <div className="hidden md:block">
   <ul className='flex gap-5 text-lg '>
          <li className='cursor-pointer underline'>
            <p>HOME </p>
          </li>
          <li>
            <p className='cursor-pointer '>ABOUT US</p>
          </li>
          <li className='cursor-pointer '>
            <p>INFRASTRUCTURE</p>
          </li>
          <li className='cursor-pointer '>
            <p>ADMISSION</p>
          </li>
          <li className='cursor-pointer '>
            <p>ACADEMICS</p>
          </li>
          <li className='cursor-pointer '>
            <p>ACTIVITIES</p>
          </li>
          <li className='cursor-pointer '>
            <p>CONTACT US</p>
          </li>
      </ul>
   </div>
   <div className="block md:hidden ">
   <FaGripLines className="text-gray-600 ml-5 text-xl" onClick={()=>setShow(!show)}/>
  {show? <div className="absolute z-10 bg-red-950 w-[50vw] mt-7 p-3">
    <p className='ml-44' onClick={()=>setShow(false)}>X</p>
    <ul className='flex flex-col items-center'>
    <li className='cursor-pointer '>
            <p>HOME </p>
          </li>
          <li>
            <p className='cursor-pointer '>ABOUT US</p>
          </li>
          <li className='cursor-pointer '>
            <p>INFRASTRUCTURE</p>
          </li>
          <li className='cursor-pointer '>
            <p>ADMISSION</p>
          </li>
          <li className='cursor-pointer '>
            <p>ACADEMICS</p>
          </li>
          <li className='cursor-pointer '>
            <p>ACTIVITIES</p>
          </li>
          <li className='cursor-pointer '>
            <p>CONTACT US</p>
          </li>
    </ul>
   </div>:<></>}
   </div>
    </div>
  )
}

export default Navbar
