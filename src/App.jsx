import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoesCart from './components/ShoesCart'
import ShoesProduct from './components/ShoesProduct'
import { CartProvider, useShoesContext } from './context/CartContext'
function App() {
  return (
    <CartProvider>
      <div className="mainContent">
        <div className="card">
          <div className="cardTop">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
            />
          </div>

          <div className="cardTitle">Our Products</div>
          <ShoesProduct />
        </div>

        {/* cart */}
        <ShoesCart />
      </div>
    </CartProvider>
  )
}

export default App
