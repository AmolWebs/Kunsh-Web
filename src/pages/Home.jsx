import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import OurProduct from '../components/OurProduct'
import ClientFeedbacks from '../components/ClientFeedbacks'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurProduct />
      <ClientFeedbacks />
    </div>
  )
}

export default Home


