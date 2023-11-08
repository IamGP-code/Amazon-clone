"use client";

import React from "react";
import Loader from "../../../public/Amazon_loader.svg";
import Image from "next/image";

interface IProps {
  children: React.ReactNode;
}

const LoaderProvider: React.FC<IProps> = ({ children }) => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    //this code will be executed
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <>
        <div className="w-full h-[100vh] flex justify-center items-center">
          <Image src={Loader} alt="Amazon loading icon" className="w-[80px]"/>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default LoaderProvider;
