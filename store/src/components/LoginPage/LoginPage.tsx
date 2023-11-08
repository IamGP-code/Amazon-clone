import React from 'react'
import { Label } from '@radix-ui/react-dropdown-menu'
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


const LoginPage = () => {
  return (
    <div>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label  className="text-right">
            Name
          </Label>
          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label  className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div>
        <SheetTitle className='w-full border-b'/>
      </div>
    </div>
  )
}

export default LoginPage
