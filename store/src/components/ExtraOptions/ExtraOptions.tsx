/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from 'react-icons/gi'
import { Label } from '@radix-ui/react-dropdown-menu'
// import { ScrollArea } from '@radix-ui/react-scroll-area'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from '../ui/separator'




const ExtraOptions = () => {
  return (
   
   
    <Sheet>
    <SheetTrigger asChild>
      <div><GiHamburgerMenu size={30} className="cursor-pointer" color="white"/></div>
    </SheetTrigger>
    <SheetContent className='bg-slate-50 p-0 max-h-full flex flex-col' side="left">
     
      <SheetHeader className='p-4 h-[140px] bg-slate-900 w-full justify-end'>
        <SheetTitle className='font-bold items-end flex text-md text-white'>Edits</SheetTitle>
      </SheetHeader>
      
      <div className='flex flex-col h-[calc(100%-140px-40px-10px)]'>
     
      
      <div className="max-h-[50%] flex flex-col">
      <SheetTitle className='font-bold text-sm text-gray-400 p-3'>Category - 1</SheetTitle>
      <Separator />
        <ScrollArea className='flex-1  rounded-md  py-1  mt-0' >
              <div className='px-3 h-max w-full flex flex-col items-start gap-4 text-md font-semibold  cursor-pointer'>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
          </div>
        </ScrollArea>
          </div>
           
          <div className="max-h-[50%] flex flex-col">
      <SheetTitle className='font-bold text-sm text-gray-400 p-3'>Category - 2</SheetTitle>
      <Separator />
        <ScrollArea className='flex-1  rounded-md  py-1  mt-0' >
              <div className='px-3 h-max w-full flex flex-col items-start gap-4 text-md font-semibold  cursor-pointer'>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
                <a href="http://" target="_blank" rel="noopener noreferrer">Amazon Goodies</a>
          </div>
        </ScrollArea>
          </div>
          </div>   
      <SheetFooter className='h-[40px]'>
        <SheetClose asChild>
          <Button type="submit" className='w-full'>Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
 );
  }
export default ExtraOptions
