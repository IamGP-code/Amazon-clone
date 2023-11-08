/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import BannerImg from './../../public/fruit_banner_BG.jpg';
import ItemCard from "@/components/ItemCard/ItemCard";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";



export default function Home() {

  return (
    <>
    <Navbar />
    <Banner src={BannerImg} 
    alt="banner image"/>
    <div className="flex flex-col px-6 py-4">
      <h1 className="py-4 text-2xl font-extrabold text-primary">"Veggies" Category</h1>
    <div className="w-full max-w-full h-max overflow-x-scroll flex flex-nowrap gap-2 scroll-smooth">
      <ItemCard src="https://www.bigbasket.com/media/uploads/p/l/10000067_23-fresho-capsicum-green.jpg?tr=w-640,q=80" alt="Cabbage Image" title="Fresho capsicun Green (Loose)  Fresho capsicun Green (Loose) Fresho capsicun Green (Loose)  "/>
      <ItemCard src="https://www.bigbasket.com/media/uploads/p/m/10000201_15-fresho-tomato-hybrid.jpg?tr=w-1920,q=80" alt="tomato image" title="Tomato Hybrid (Loose)"/>
      <ItemCard src="https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-1920,q=80" alt="Onion image" title="Onion Hybrid (Loose)"/>
      <Link href="/itemdetails/tomato"><ItemCard src="https://www.bigbasket.com/media/uploads/p/m/10000201_15-fresho-tomato-hybrid.jpg?tr=w-1920,q=80" alt="tomato image" title="Tomato Hybrid (Loose)"/></Link>
      <ItemCard src="https://www.bigbasket.com/media/uploads/p/m/10000070_15-fresho-carrot-orange.jpg?tr=w-1920,q=80" alt="Carrot image" title="Carrot Hybrid"/>
    </div>
    </div>
    <Footer />
    </>

  
  )
}
