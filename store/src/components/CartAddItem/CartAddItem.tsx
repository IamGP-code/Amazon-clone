"use client";

import Image from 'next/image';
import React from 'react';
import  tomatoPic  from '../../../public/tomato.png';
// import { IoAddCircleSharp } from 'react-icons/io';
import { GrSubtractCircle }  from 'react-icons/gr';
import { GrAddCircle }  from 'react-icons/gr';
import { Button } from '../ui/button';

interface IProps {
  price: number;
}

const CartAddItem = ({price} : IProps) => {
  const [count, setCount] = React.useState<number>(1);

  const minusCount = () => {
    if(count === 0) {
      return;
    }
    setCount((prev) => prev -1 );
    
  }

  const addCount = () => {
    if(count > 99) {
      return;
    }
    setCount((prev) => prev + 1);
  }


  const showJsx = () => {
    if(count === 0) return null;
    return (
      <div className='w-full flex items-center justify-between h-[70px]  gap-2 '>
      
        <div className='flex  h-full gap-4'>
                      <div className='relative w-[60px] aspect-square'>
                      <Image src={tomatoPic} alt='tomato' fill style={{objectFit: 'cover'}} />
                      </div>
                      
            <div className='flex flex-col h-[70px] max-w-[160px] gap-1'>
                <h1 className='text-sm font-bold w-full line-clamp-1 break-all'>Tomato</h1>
                <p className='text-xs text-grey-dark w-full line-clamp-1 break-all'> 475 - 525gm</p>
                <p className='font-bold text-sm line-clamp-1 w-full break-all'>&#8377;{(price * count)} <sup style={{textDecoration: 'line-through'}}>&#8377;428.00</sup></p>
            </div>
       </div>
       <div className='flex h-full items-center justify-between '>
          <Button variant="outline" size="icon" className='border-none' onClick={minusCount}><GrSubtractCircle size={20} /></Button>
          <span className='font-extrabold px-3'>{count}</span>
          <Button variant="outline" size="icon" className='border-none' onClick={addCount}><GrAddCircle size={20} /></Button>
       </div>
    </div>

    )
  }



  return (
          <>
          {
            showJsx()
          }
         </>
  )
}

export default CartAddItem
