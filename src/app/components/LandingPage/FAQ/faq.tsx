import Qna from "./qna"

export default function Faq(){
    const faqData = [
        {
            question: "What is MYOB?",
            answer: `MYOB stands for "Manage Your Own Budget". It’s your one-stop tool to track,
        plan, and grow your money with ease.`
        },
        {
            question:"Is my financial data secure?",
            answer: `Absolutely! We use industry standard encryption and best security practices to keep your information private and protected.`
        },
        {
            question: "Can I add multiple bank statements?",
            answer: `Yes! You can surely add multiple bank statemnents and see all your finances in one simple dashboard.`
        },
        {
            question: "Does it work on mobile devices?",
            answer: `Definitely! MYOB is fully responsive and works seamlessly on your phone tablet or desktop.`
        },
        {
            question: "Is there a free plan available?",
            answer: "Yes - Your first bank statement's dashboard is absolutely free, but you will have to take a subscription after that."
        },
        {
            question: "How do I cancel my subscription?",
            answer: `Yes you can cancel your subscription anytime directly from your account settings - no hidden fees, no hassle.`
        },
    ]
    return(
        <>
        <div className="flex flex-col font-[poppins] gap-[6vw] text-center items-center tracking-tight ">
            <div className="text-[3vw] text-neutral-200">
                You got questions? We got you.
            </div>
            <div className="grid grid-col-1 md:grid-cols-2 gap-[2vw] w-full pl-[15vw] items-center ">
                {faqData.map((faqData, index) =>(
                    <Qna 
                    key ={index}
                    question={faqData.question}
                    answer={faqData.answer}
                    />
                )) }
            </div>


        </div>
        
        </>
    )
};