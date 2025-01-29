import React from 'react'
import Navbar from './navbar/Navbar'
import Herosection from './herosection/Herosection'
import Footer from './footer/Footer'
import Details from './details/Details'
import Arrivals from './arrivals/Arrivals'
import Category from './category/Category'
import Newsletter from './newsletter/Newsletter'

const Home = () => {
  return (
    <div>
      <Herosection />
      <Details />
      <Arrivals />
      <Category />
    </div>
  )
}

export default Home
