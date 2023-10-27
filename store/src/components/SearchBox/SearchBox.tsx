import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BiSearch } from "react-icons/bi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaCaretDown } from "react-icons/fa"; 

const SearchBox = () => {
  return (
    <div className="flex w-full max-w-sm items-center rounded-md overflow-hidden">
    <DropdownMenu >
  <DropdownMenuTrigger className='h-10 w-16 bg-slate-300 px-3 flex gap-2 justify-between items-center'>All 
  <FaCaretDown size={16}/>
   </DropdownMenuTrigger>

  <DropdownMenuContent>
    <DropdownMenuLabel className="bg-secondary rounded">All Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Amazon Baby</DropdownMenuItem>
    <DropdownMenuItem>Accessories</DropdownMenuItem>
    <DropdownMenuItem>Mobile and Tablets</DropdownMenuItem>
    <DropdownMenuItem>T-shirts</DropdownMenuItem>
    <DropdownMenuItem>Clothes</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    <Input type="email" placeholder="Search Amazon" className='rounded-none' />
    <Button type="submit" size="icon" className='bg-secondary rounded-none hover:bg-secondary w-16'>
        <BiSearch size={20} color="black"/>
        </Button>
  </div>
  )
}

export default SearchBox
