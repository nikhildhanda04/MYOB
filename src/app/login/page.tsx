import { BsGoogle } from "react-icons/bs"
import  Image  from 'next/image'

export default function Login() {
    return(
        <>
            <div className="flex flex-row items-center h-screen justify-between px-[10vw]">
                
                <div className="flex flex-col border border-neutral-700 backdrop-blur-3xl    shadow-neutral-900 shadow-2xl p-16 rounded-2xl bg-neutral-900 gap-[3vw] items-center justify-between text-neutral-200">

                    <div>
                    <div className="font-[fraunces] text-center font-black text-[4vw]">
                        Log-In
                    </div>

                    <div className="font-[poppins] text-right">
                        New User? <span className="text-[#00FFb2] hover:underline ">Create Account</span>
                    </div>
                    </div>

                    <form className="flex flex-col text-[1vw] gap-[1vw]">
                        <div>
                            <input 
                            type="text"
                            placeholder="Your Email"
                            className="px-[3vw] font-[poppins] border border-neutral-600 text-neutral-100 rounded-full py-[0.7vw] text-left bg-neutral-600"
                            required
                            />
                        </div>
                        <div>
                            <input 
                            type="text"
                            placeholder="Enter Password"
                            className="px-[3vw] font-[poppins] border border-neutral-600 text-neutral-100 rounded-full py-[0.7vw] text-left bg-neutral-600"
                            required
                            />
                        </div>
                        <div className="text-[#00ffb2] hover:underline text-right">
                            Forgot Password?
                        </div>
                    </form>

                    <div className="flex items-center gap-[3vw] rounded-full text-neutral-800 flex-row bg-white px-[5vw] py-[1vw]">
                        <BsGoogle/>
                        Continue with Google
                    </div>

                    <div>
                    <button className="text-neutral-100 font-[poppins] font-bold rounded-full bg-[#00ffb2] px-[3vw] shadow-[#00ffb2] shadow-xs py-[1vw]">
                        LOGIN
                    </button>
                </div>
                </div>
                <div className="relative object-cover w-[40vw] h-[40vw]">
                     <Image 
                src="/login.svg"
                alt=""
                fill
                />
                </div>

               
                

            </div>
        </>
    )
}