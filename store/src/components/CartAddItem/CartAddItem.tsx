"use client";

import Image from 'next/image';
import React from 'react';
import  tomatoPic  from '../../../public/tomato.png';

const CartAddItem = () => {
  return (
    <>
    <div className='w-[-475px] flex h-[400px] bg-black '>
       <div>
        <div className='flex  w-full bg-slate-400 h-max'>
            <Image src={tomatoPic} alt='tomato' width={60} height={40} />
            <div className='flex flex-col w-full '>
                <h1 className='text-sm font-bold'>Tomato</h1>
                <p> 475 - 525gm</p>
                <p>&#8377;428.00 <sup className='strike'>&#8377;428.00</sup></p>
            </div>
       </div>
        </div>
    </div>
    </>
  )
}

export default CartAddItem
