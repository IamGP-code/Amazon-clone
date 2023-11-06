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

interface IProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CartSheet = ({open, onOpenChange} : IProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
    
    <SheetContent>
      
       
        <SheetClose className='absolute right-4 top-4' ><IoMdCloseCircleOutline size={24} /></SheetClose>
      
      <SheetHeader className='w-full justify-start'>
        <SheetTitle className='w-max '>Cart</SheetTitle>
        {/* <SheetDescription>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </SheetDescription> */}
      </SheetHeader>
      <CartAddItem />
    </SheetContent>
  </Sheet>
  )
}

export default CartSheet
