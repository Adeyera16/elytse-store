
import React from 'react'
import img from '../assets/hero.png'
import AOS from 'aos';
 import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
		AOS.init({ duration: 2000 });
	}, []);
 
  return (
    <div 
    data-aos='fade-right'
    className='w-full  py-16 px-4'>
<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <div>
                
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-[#004DE6]'>
                Social Fashion Marketplace
                </h1>
                <p className='text-[#004DE6] '>
                Join the fashion revolution and step into a world without limits.
                 We are a dynamic social marketplace where innovation meets community, and shopping is an adventure. <br/>
                 Our cutting-edge technology brings your fashion dreams to life, 
                while our diverse  community empowers you to express your unique style. 
                Discover a whole new way to experience fashion.
                </p>

                <div className='flex bg-white'>
                <input className='bg-white  border-none  rounded-md text-blue-800 font-medium md:mx-0 mx-auto my-6 py-3 p-3 w-full ' type='email' placeholder='Enter your best email'/>
                <button className='text-[#004DE6] w-[200px] hover:bg-[#f9d108] rounded-md font-medium md:mx-0 mx-auto my-6 py-3 ml-6 px-6 bg-[#e7c624]'>Submit</button>
                </div>
            </div>
            
            <div className='flex flex-col justify-center'>
        
            <img
            data-aos='zoom-in'
            className='w-[500px] mx-auto my-4'
             src={img} alt='/'/>
            </div>
            </div>
    
    </div>
  )
}

export default Hero