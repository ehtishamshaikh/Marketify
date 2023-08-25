import React from 'react'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Footer from './components/Footer'
import FeatureProduct from './components/FeatureProduct'


const Home = () => {
  // const data={
  //   name : " "
  // }
  return (<>
    <HeroSection myData="Marketify Ecommerce"/>
    <FeatureProduct/>
    <Services>

    </Services>
    <Trusted/>
    </>

    
)
}


 

export default Home