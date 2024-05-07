import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons.jsx/NavigateButtons'
import ProductSection from '../ProductSection.jsx/ProductSection'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
    <Navbar/>
    <Slider/>
    <NavigateButtons/>
    <ProductSection/>
    <Footer/>
    </div>
  )
}

export default Main
