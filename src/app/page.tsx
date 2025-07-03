import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Image from "next/image";
export default function Home() {
  return (
   <>
   <div className="flex flex-col">
        <Navbar />
    <div className="flex flex-col text-center  items-center mt-[10vw] ">
      <div className="font-[poppins] tracking-tight text-white text-7xl z-99 ">
        MANAGE YOUR MONEY LIKE <br/> NEVER BEFORE
      </div>
      <div className="absolute top-40 opacity-30 right-120 z-1 text-[150px] font-just-another-hand text-[#00FFB2]">
        money
      </div>  
      <div className="font-[inter] tracking-tight text-[#6B7280] text-lg">
        Take control of your finances all at one place. Just start by add your<br/> bank statements down below. 
      </div>
    </div>
    <SearchBar />

    <div>
      <Image 
      src="https://picsum.photos/1120/700"
      alt="placeholder"
      className="rounded-lg mt-[5vw]"
      />
    </div>
   </div>
   </>
  );
}
