import Image from "next/image";
import ProductCard from "./Components/ProductCard";

export default function Home() {
  return (
    <div>
       <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-2xl font-bold text-gray-800 py-8">
        Responsive Product Cards
      </h1>
      <ProductCard />
    </div>
    </div>
   
       
      
  );
}
