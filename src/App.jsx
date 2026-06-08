import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Shoes from "./pages/Shoes"

import Watches from "./pages/Watches"
import Shirts from "./pages/Shirts"
import { useState } from "react"

import { Routes, Route } from "react-router-dom"
import Cartpage from "./pages/Cartpage"

function App() {
  const [cartItems, setCartItems]= useState([])
  return (
    <div>
      
      <Navbar cartItems={cartItems}/>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/shoes" element={<Shoes cartItems={cartItems} 
        setCartItems={setCartItems}/>} />

        <Route path="/watches" element={<Watches cartItems={cartItems} setCartItems={setCartItems}/>} />

        <Route path="/shirts" element={<Shirts cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/cartpage" element={<Cartpage cartItems={cartItems} setCartItems={setCartItems}/>} />

     

      </Routes>

    </div>
  )
}

export default App