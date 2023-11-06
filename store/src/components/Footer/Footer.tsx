/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from "@/components/ui/button"
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <div className='h-max w-full bg-slate-800 '>
     <div className='flex py-4'>
      <div className='flex flex-col gap-4 text-white flex-1 items-start pl-5'>
            <a href="http://AmazonPay" className='break-all font-bold'>Get to know Us</a>
               <a href="http://AmazonPay" className='break-all'>About Us</a>
               <a href="http://AmazonPay" className='break-all'>Careers</a>
               <a href="http://AmazonPay" className='break-all'>Press Release</a>
               <a href="http://AmazonPay" className='break-all'>Amazon Science</a>
        
      </div>
      <div className='flex flex-col gap-4 text-white flex-1 items-start px-5'>
               <a href="http://AmazonPay" className='break-all font-bold'>Connect with US</a>
               <a href="http://AmazonPay" className='break-all'>Facebook</a>
               <a href="http://AmazonPay" className='break-all'>Twitter</a>
               <a href="http://AmazonPay" className='break-all'>Instagram</a>
        </div>
        <div className='hidden md:flex flex-col gap-4 text-white flex-1 items-start px-5'>
               <a href="http://AmazonPay" className='break-all font-bold'>Make Money with Us</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay asdfjsaldkfj skljdf</a>
        </div>
        <div className='hidden lg:flex flex-col gap-4 text-white flex-1 items-start px-5'>
               <a href="http://AmazonPay" className='break-all font-bold'>Let us Help You</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay</a>
               <a href="http://AmazonPay" className='break-all'>amazon pay asdfjsaldkfj skljdf</a>
        </div>
      </div>
    </div>
    {/* Footer  2nd section */}
    <div className='h-max w-full bg-slate-950 flex flex-col items-center py-8 gap-4'>
        <div className='flex flex-col gap-3 items-center'>
            
            <a className='text-white opacity-30 flex gap-2 items-center'><BsGlobe2 color="white"/>English</a> 
            <a className='text-white '>Switch Accounts</a> 
            <a className='text-white '>Sign Out</a> 
        </div>
    <div className='flex text-[10px] gap-8 '>
    <a className='text-white '>Condtions of Use</a> 
    <a className='text-white '>Privacy Notice </a> 
    <a className='text-white '>Interest-Based ads</a> 

    </div>
        <div className='text-[8px] text-white mt-[-8px]'>
            <p>
                &copy; 1996-2023, Amazon.in, Inc. and it's affiliates
            </p>
        </div>

    </div>
</>

  )
}

export default Footer
