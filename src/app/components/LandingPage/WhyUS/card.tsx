type CardProps = {
    title: string;
    desc: string;
    icon: React.ElementType;
}

export default function Card({title, desc, icon: Icon}: CardProps) {
    return(
        <>
        <div className="flex flex-col tracking-tight px-[2  vw] text-center gap-[1vw] font-[poppins]">
            <div>
            <Icon 
            className=""
            width = {50}
            height = {50}
            stroke = "white"
            />
            </div>
            <div className="text-white">
            {title}    
            </div>
            <div className="text-[#6B7280]">
             {desc}
            </div>

        </div>
        </>
    )
}