import {CgArrowTopRight} from "react-icons/cg";

export default function SearchBar() {
    return (
        <>
        <div className="flex flex-row items-center justify-center mt-[3vw] gap-5">
            <div className="flex flex-row items-center">
                <input 
                className="rounded-full border border-[#575757] text-[#6B7280] px-5 py-4 active:outline-[#00FFB2]"
                type="file"
                 placeholder="add your bank statements here as pdf or csv"
                />
            </div>
            <div>
                <button 
                
                className="bg-[#00FFb2] flex text-[black] rounded-full items-center px-6 py-3 font-medium font-[inter] "
                >
                    Get Started <CgArrowTopRight className="inline-block ml-1 w-7 h-7 " />
                </button>
            </div>
        </div>
        </>
    );
}