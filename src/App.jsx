import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ProductsPage from './pages/ProductsPage'
import ProductDetails from './pages/ProductDetails'
import HistoryPage from './pages/HistoryPage'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product-details' element={<ProductDetails />} />
        <Route path='/history' element={<HistoryPage />} />
        <Route path='/contact-us' element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default App
