import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import BannerImg from './../../public/banner.jpg';
import ItemCard from "@/components/ItemCard/ItemCard";



export default function Home() {


  return (
    <>
    <Navbar />
    <Banner src={BannerImg} 
    alt="banner image"/>
    <div className="flex flex-col px-6 py-4">
      <h1 className="py-4 text-2xl font-extrabold text-primary">"Veggies" Category</h1>
    <div className="w-full max-w-full h-max overflow-x-scroll flex flex-nowrap gap-2 scroll-smooth">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
    </div>
    
    </>

  
  )
}
