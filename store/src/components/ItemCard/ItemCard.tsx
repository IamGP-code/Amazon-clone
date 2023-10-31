import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
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
import { Button } from '../ui/button'
import { BiCaretDown } from 'react-icons/bi'


  
const ItemCard = () => {
  return (
  <Card className='w-[230px] min-w-[230px] h-max border-gray-100 border-[0.3pt] bg-white border-gray-300 rounded-md'>
  <CardContent className='p-2 px-3 flex flex-col gap-2'>
    <div className='w-full aspect-square relative rounded-md overflow-hidden'>
        <Image style={{objectFit: 'cover'}} src={"https://www.bigbasket.com/media/uploads/p/l/10000067_23-fresho-capsicum-green.jpg?tr=w-640,q=80"} alt='cabbage image' fill />
        </div>    
  <CardTitle className='line-clamp-2 text-sm'>
    Fresho-capsicum-Green (Loose)
  </CardTitle>
  <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className='flex justify-between px-2 items-center'><span className="font-bold">1 kg</span>
        <span><BiCaretDown color="gray"/></span></Button>
      </SheetTrigger>
      <p><span className='font-bold text-primary text-xl'>&#8377;89</span> <sup className='font-bold text-gray-400 line-through text-sm px-1'>&#8377;99</sup></p>
      <Button  variant={'destructive'} className='w-max px-12 self-center'>Add</Button>
      
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </CardContent>
  
</Card>
    
  )
}

export default ItemCard
