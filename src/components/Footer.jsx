import React from "react"
import img from "../assets/page17.png";

export default function Footer(){
    return(
        <footer>
            <div className="text-blue-800  max-w-[1240px] mx-auto px-16">
                <p>Join the revolution of social fashion today - Sign up with Elytse and let's discover trends together, experience the future of personalized style and unlock a world of fashion possibilities!</p>
                <div className='flex bg-white w-[80rem] mx-auto'>
                    <div>
                        <input className='bg-white  border-none  rounded-md text-blue-800 font-medium md:mx-0 mx-auto my-6 py-3 p-3 w-full ' type='email' placeholder='Enter your best email'/>
                        <button className='text-[#004DE6] w-[200px] hover:bg-[#f9d108] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 ml-6 px-6 bg-[#e7c624]'>Submit</button>
                    </div>
                    <img src={img} alt="" />
                </div>
            </div>
        </footer>
    )
}