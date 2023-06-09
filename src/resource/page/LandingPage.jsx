import React from 'react'
import Navbar from '../Component/Navbar'
import HeroSection from '../component/HeroSection'
import Tech from '../component/Tech'
import { AboutMe } from '../component/AboutMe'

const LandingPage = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <Tech />
    <AboutMe/>
    </div>
    
  )
}

export default LandingPage