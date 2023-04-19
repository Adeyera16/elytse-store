import React from 'react'
import Navbar from "../components/Navbar";

import Youtube from "../components/Youtube";
import Conversation from "../components/Conversation";
import Virtual from "../components/Virtual";
import Swap from "../components/Swap";
import Faq from "../components/FAQ'S/Faq";
import Team from "../components/Team/Team";
import Services from "../components/Services/MyServices";
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div>
    <Navbar/>
        <Hero/>
        <Youtube/>
        <Services/>
        <Faq/>
        <Team/>
         </div>

  )
}

export default Home