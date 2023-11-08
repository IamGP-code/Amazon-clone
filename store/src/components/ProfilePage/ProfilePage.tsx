import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { RiAccountPinCircleFill } from "react-icons/ri"


const ProfilePage = () => {
  return (
    <div>
      <Sheet>
  <SheetTrigger>
        <RiAccountPinCircleFill size={30} color="white" className="cursor-pointer"/>

  </SheetTrigger>
    <SheetContent side={'right'}>
    <SheetHeader>
      <SheetTitle>Are you sure absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>
  )
}

export default ProfilePage
