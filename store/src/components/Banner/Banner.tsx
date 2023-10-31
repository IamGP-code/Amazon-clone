'use client';

import Image, { StaticImageData } from 'next/image'
import React from 'react'


interface IProps {
    src: string | StaticImageData;
    alt:string;
}


const Banner = ({src, alt} : IProps) => {
  return (
   <div className='w-full h-[175px] relative'>
    <Image src={src} alt={alt} style={{objectFit: 'cover'}} fill={true} />
       </div>
  )
}

export default Banner
