import { User } from "lucide-react"

export default function Navbar() {
    return(
        <>
        <div className="flex flex-row justify-between border-b-1 border-[#575757] px-[5vw] py-7 items-center bg-black">
            <div className="flex flex-row gap-14">
                <div className="flex flex-col gap-[-12px] items-center">
                    <div className="font-[fraunces] text-white font-[800] text-[31px]">
                        MYOB
                    </div>
                    <div className="font-[poppins] tracking-tight font-[400] text-[#00FFB2] opacity-50 text-[12px]">
                        Manage Your Own Bag
                    </div>
                </div>
                <div className="flex flex-row gap-16 tracking-tight font-[poppins] text-xl font-[500] text-[#6B7280] items-center">
                    <div>
                        Why Us?
                    </div>
                    <div>
                        How it Works?
                    </div>
                    <div>
                        FAQs
                    </div>
                    <div>
                        Pricing
                    </div>
                </div>
            </div>
            <div>
                <User className="text-white w-9 h-9" />
            </div>

        </div>
        </>
    )   
}