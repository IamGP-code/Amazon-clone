import React, { Dispatch, SetStateAction } from 'react'
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
import {IoMdCloseCircleOutline} from 'react-icons/io'
import CartAddItem from '../CartAddItem/CartAddItem';
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMediaQuery } from '@mantine/hooks';

interface IProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CartSheet = ({open, onOpenChange} : IProps) => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
    
    <SheetContent side={isTablet ? "right" : "bottom"}>
        <SheetClose className='absolute right-4 top-4' ><IoMdCloseCircleOutline size={24} /></SheetClose>
      
      <SheetHeader className='w-full justify-start'>
        <SheetTitle className='w-max '>Cart</SheetTitle>
        <SheetTitle className='w-full border-b'/>
        {/* <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription> */}
      </SheetHeader>
<ScrollArea className='h-[350px] md:h-[88vh] w-full rounded-md'>

<div className=' border-orange-400 flex flex-col gap-2 '>

      <CartAddItem price={50} />
      <CartAddItem price={150}/>
      <CartAddItem price={429}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
      <CartAddItem price={500}/>
</div>
</ScrollArea>
    </SheetContent>
  </Sheet>
  )
}

export default CartSheet
