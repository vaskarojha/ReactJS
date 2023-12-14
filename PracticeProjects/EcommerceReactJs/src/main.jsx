import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//product context
import ProductProvider from './contexts/ProductContext.jsx'
//sidebar context
import SidebarProvider from './contexts/SidebarContex.jsx'
//cartcontext
import CartProvider from './contexts/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<SidebarProvider>
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
</SidebarProvider>
)
