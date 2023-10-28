import React from 'react'
import {CiLocationOn} from "react-icons/ci";

const AddressBar = () => {
  return (

    <div className='flex'>
    <CiLocationOn size={30} color='white' className='self-end translate-y-[-3px]'/>
    <div className='flex flex-col h-10 w-[180px] '>
        <h1 className='text-white font-extrabold text-lg max-h-[50%]'>Address</h1>
        <p className='text-sm font-medium text-white max-h-[50%] line-clamp-1'>Mysuru-570028 Mysuru-570028 Mysuru-570028</p>
    </div>
    </div>
  )
}

export default AddressBar
