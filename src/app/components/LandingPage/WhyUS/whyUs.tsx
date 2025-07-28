import Card from "./card"
import { BadgeDollarSign  } from "./globe";
import {ChartLine} from "./graph"
import {Rocket} from "./rocket"


export default function WhyUs (){
    const CardData = [
      {
        title: "Secure",
        desc: "Your privacy and security matters to us the most. Your data is in safe hands",
        icon: BadgeDollarSign
      },
            {
        title: "Fast & Reliable",
        desc: "Experience lightning-fast performance with dependable tools you can trust every time.",
        icon: Rocket
      },
            {
        title: "Smart & Minimal",
        desc: "A clean, clutter-free design with smart features that make managing money effortless.",
        icon: ChartLine
      },
    ];
    return(
        <>
        <div className="flex flex-col py-[12vw] gap-[8vw] px-[1vw] items-center text-center font-[poppins] tracking-tight">
            <div className="text-[3vw] text-neutral-200">
                Why Choose Us?
            </div>
            <div className="text-[#6B7280] text-[1.3vw]">
                Gives you the best experience and manages your finances at <br /> one place-effortlessly
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 px-[5vw] gap-[1.5vw]">
               {CardData.map((card, index)=>(
                <Card 
                key={index}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
                />
               ))}
            </div>
        </div>
        </>
    )
}