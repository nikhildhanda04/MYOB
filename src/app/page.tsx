import Navbar from "./components/LandingPage/navbar";
import SearchBar from "./components/searchBar";
import WhyUs from "./components/LandingPage/WhyUS/whyUs";
import Faq from "./components/LandingPage/FAQ/faq";
import Footer from "./components/LandingPage/footer";

import {CgArrowTopRight} from "react-icons/cg";
// import Image from "next/image";
export default function Home() {
  return (
   <>
   <div className="flex flex-col gap-[12vw]">
        <Navbar />
    <div className="flex  flex-col gap-[3vw] text-center  items-center">
      <div className="font-[poppins] tracking-tight text-white text-7xl z-99 ">
        MANAGE YOUR MONEY LIKE <br/> NEVER BEFORE
      </div>
        {/* <div className="absolute top-[14vw] font-extrabold tracking-wide opacity-20 right-[30vw] z-1 text-[152px] font-just-another-hand text-[#00FFB2]">
          money
        </div>   */}
      <div className="flex flex-col gap-[1vw] font-[inter] tracking-tight text-[#6B7280] text-lg">
        <div>
          Take control of your finances all at one place. Just start by add your<br/> bank statements down below. 
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
    </div>
    
    <div>
      {/* <Image 
      src="https://picsum.photos/1120/700"
      alt="placeholder"
      className="rounded-lg mt-[5vw]"
      width="1120"
      height="700"
      loading="lazy"
      /> */}
    </div>
    <div className="font-[poppins] text-center text-white px-[15vw] text-[2.7vw] leading-[65px] tracking-tight">
      Track, plan, and grow — giving you <br/> everything you need to take charge of your money and build a secure, stress-free future
    </div>
      <WhyUs />
      <Faq />
      <div className="flex flex-col items-center text-center gap-[3vw] tracking-tight">
        <div className="text-neutral-200 text-[3vw]">
        Ready to take control of your spendings?
        </div>
        <div className="text-[#6B7280] text-[1.4vw]">
          start now, click on the button below to start handling your <br/> finances the best way.
        </div>
        <div>
          <button 
                
                className="bg-[#00FFb2] flex text-[black] rounded-full font-semibold text-[1.4vw] items-center mt-[2vw] px-6 py-3 font-[inter] "
                >
                    Get Started <CgArrowTopRight className="inline-block ml-1 w-7 h-7 " />
                </button>
        </div>
      </div>
      <Footer />
   </div>
   </>
  );
}
