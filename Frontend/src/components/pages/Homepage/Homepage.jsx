import React from 'react'
import Navbar from '../../../utils/Navbar/Navbar'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import Footer from '../../../utils/Footer/Footer'
import AboutSection from './AboutSection'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <AboutSection/>
      <Footer/>
    </>
  )
}

export default Homepage