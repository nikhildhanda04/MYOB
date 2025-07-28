export default function Footer() {
    return (
        <>
        <div className="flex bg-[black] border-t-1 border-[#575757]  flex-row tracking-tight font-[inter] items-center text-center justify-between px-[14vw] py-[2vw]">
            <div className="flex flex-col justify-between h-[20vw] items-center">
                <div className="flex flex-col">
                    <div className="text-neutral-200 font-[fraunces] font-[800] text-[4vw]">
                        MYOB
                    </div>
                    <div className="text-[#00FFB2] opacity-60 text-center">
                        managing your expenditures and <br/> income all at one place
                    </div>
                </div>
                <div className="text-neutral-200">
                    created by <span className="font-bold">Nikhil Dhanda</span>
                </div>
            </div>
            <div className="flex justify-start h-[20vw] flex-row gap-[2vw] text-left font-semibold text-neutral-200  ">
                <div className="flex flex-col gap-[1vw]">
                    <div className="text-[2vw] font-[poppins] pb-[1.6vw] ">
                        Navigation
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        Home
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        Why us?
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        FAQs
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        Account
                    </div>
                </div>
                <div className="flex flex-col gap-[1vw]">
                    <div className="text-[2vw] font-[poppins] pb-[1.6vw] ">
                        Socials
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        Instagram
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        X
                    </div>
                    <div className="text-[#6B7280] text-[1.2vw] hover:underline">
                        LinkedIn
                    </div>
                    
                </div>


            </div>
        </div>
        </>
    )
}