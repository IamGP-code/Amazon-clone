"use client";


import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import Logo from "../../../public/Amazon_logo.svg";
import { useMediaQuery } from "@mantine/hooks";
import SearchBox from "../SearchBox/SearchBox";
import AddressBar from "../AddressBar/AddressBar";



const Navbar = () => {
  const isTabletScreen = useMediaQuery('(min-width: 768px)');
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="w-full h-[60px] flex justify-between items-center px-4 bg-primary">
      <div className="flex gap-4">
        <GiHamburgerMenu size={20} color="white" />
        <Image src={Logo} alt="logo" className="w-[80px]" />
        {isLargeScreen ? (<AddressBar/>) : null }
        
      </div>
      
        
      {isTabletScreen ? (<SearchBox />) : null } 
    
          <div className="flex gap-4">
      {isLargeScreen ? (<h1>Returns</h1>) : null }
        <RiAccountPinCircleFill size={20} color="white" />
        <FaOpencart size={20} color="white" />
      </div>
    </div>
  );
};

export default Navbar;
