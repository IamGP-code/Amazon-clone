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



const Navbar = () => {
  const isTabletScreen = useMediaQuery('(min-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-4 bg-primary">
      <div className="flex gap-4 items-center">
        <GiHamburgerMenu size={30} color="white" className="cursor-pointer"/>
        <Image src={Logo} alt="logo" className="h-6 w-[80px] cursor-pointer" />
        {isLargeScreen ? (<AddressBar/>) : null } 
        
      </div>
        
      {isTabletScreen ? (<SearchBox />) : null } 
    
          <div className="flex gap-8 items-center">
          <div className="relative">
      <Badge variant="secondary"  className="flex justify-center items-center absolute left-[0] top-[0] w-0 h-0 px-3 py-2 text-xs">9</Badge>
        
        <FaOpencart size={30} color="white" className="cursor-pointer" />
        </div>
        <RiAccountPinCircleFill size={30} color="white" className="cursor-pointer"/>
      {isLargeScreen ? (<Button variant={"outline"}>Returns</Button>) : null }
        
        
        
      </div>
    </div>
  );
};

export default Navbar;
