"use client";
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React from 'react'
import { BsCart3 } from 'react-icons/bs';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer/Footer';


interface IProps {
    params: {
        itemId: string;
    }
}

export default function Page({ params }: IProps) {
    return (
        <>
        <Navbar />
        <div className='flex flex-col lg:flex-row w-full h-max p-2 justify-center lg:justify-between items-center gap-2 lg:px-[120px] mb-8'>
            <div className='relative w-full aspect-square max-w-[400px]'>
            <Image alt="tomato image" src="https://www.bigbasket.com/media/uploads/p/m/10000201_15-fresho-tomato-hybrid.jpg?tr=w-1920,q=80" fill style={{objectFit: 'cover'}}/>
            </div>
            <div className='w-full lg:max-w-[40%]'>
            <h1 className='font-bold text-2xl line-clamp-1 break-all'>Tomato</h1>
            <div>
            <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Tomato Types" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Toamto 1</SelectItem>
          <SelectItem value="banana">Tomato 2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
                <div className='w-full  flex font-bold items-center justify-between p-3'>
                    <h1>&#8377;170 <sup>.00</sup></h1>
                   <Button variant='outline'  className='px-14 bg-lime-500 '>
                    <BsCart3  size={16} />
                    </Button> 
                </div>
                <div className='w-full flex flex-col '>
                    <h1 className='font-semibold text-xl'>About Tomato Local</h1>
                    <p className='line-clamp-3 text-sm line-height leading-snug '> These Local Tomaotoes are sourced from Karnataka . These are Oraganinc and sweet and juicy.These Local Tomaotoes are sourced from Karnataka . These are Oraganinc and sweet and juicy.</p>
                </div>
                </div>
            </div>
            <Footer />        
        </>
    )
  }


