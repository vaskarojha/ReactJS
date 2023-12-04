import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Cart from './components/cart';

import { CartProvider } from './contexts/CartContext';

function App() {

  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/'  element ={<Home/>} />
        <Route path='/cart'  element ={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
