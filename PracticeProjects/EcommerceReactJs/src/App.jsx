import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useState} from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetails'

import Header from './components/Header'
import CartItem from './components/Header'
import Hero from './components/Hero'
import Product from './components/Product'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/product/:id' element = {<ProductDetail/>} />
            <Route path='/' element = {<Home/>} />
            <Route path='/' element = {<Home/>} />
            <Route path='/' element = {<Home/>} />
          </Routes>
          <Sidebar/>
          <Footer/>
       </BrowserRouter>
    </>
  )
}

export default App
