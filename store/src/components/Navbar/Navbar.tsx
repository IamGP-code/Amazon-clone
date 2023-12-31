/* eslint-disable react/jsx-no-undef */
"use client";


import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Logo from "../../../public/Amazon_logo.svg";
import { useMediaQuery } from "@mantine/hooks";
import SearchBox from "../SearchBox/SearchBox";
import AddressBar from "../AddressBar/AddressBar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import ExtraOptions from "../ExtraOptions/ExtraOptions";
import React from "react";
import CartSheet from "../CartSheet/CartSheet";
import LoginPage from "../LoginPage/LoginPage";
import ProfilePage from "../ProfilePage/ProfilePage";


const Navbar = () => {
  const isTabletScreen = useMediaQuery('(min-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const [open, setOpen] = React.useState<boolean>(false);



  return (
    <>
    <div className="w-full h-[50px] flex justify-between items-center px-4 bg-primary">
      <div className="flex gap-4 items-center justify-center">
        <ExtraOptions />
        <Image src={Logo} alt="logo" className="h-6 w-[80px] cursor-pointer" />
        {isLargeScreen ? (<AddressBar/>) : null } 
        
      </div>
        
      {isTabletScreen ? (<SearchBox />) : null } 
    
          <div className="flex gap-8 items-center">
          <div className="relative">
      <Badge variant="secondary"  className="flex justify-center items-center absolute left-[0] top-[0] w-0 h-0 px-3 py-2 text-xs">9</Badge>
        
        <Button onClick={() => setOpen(true)}>
            <FaOpencart size={30} color="white" className="cursor-pointer" />
        </Button>
        
        </div>
        <ProfilePage />
      {isLargeScreen ? (<Button variant={"outline"}>Returns</Button>) : null }
        
        
        
      </div>
    </div>
    <CartSheet open={open} onOpenChange={setOpen}/>
    </>
  );
};

export default Navbar;
