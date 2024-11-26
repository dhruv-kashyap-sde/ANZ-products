import React from 'react'
import Navbar from '../../../utils/Navbar/Navbar'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import Footer from '../../../utils/Footer/Footer'

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <ProductSection/>
      <Footer/>
    </>
  )
}

export default Homepage