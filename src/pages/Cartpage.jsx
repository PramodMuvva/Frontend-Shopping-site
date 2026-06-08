import React from 'react'
import ProductCard from '../components/Productcard'

const Cartpage = (props) => {

  if (props.cartItems.length === 0) {
  return (
    <h1>Your Cart is Empty</h1>
  )
}
const totalPrice = props.cartItems.reduce(
  (total, item) => total + item.price,
  0
)
    

function handleRemove(id) {

  const updatedCart = props.cartItems.filter(
    (item) => item.id !== id
  )

  props.setCartItems(updatedCart)
}
  return (
    <div className="products-container"><h1>Cart</h1>
    
    
    
    {


props.cartItems.map((item) => (

  <div key={item.id}>

    <ProductCard
      name={item.name}
      price={item.price}
      image={item.image}
    />

    <button onClick={() => handleRemove(item.id)}>
      Remove
    </button>

  </div>

))
    }
    
    
    <h2>Total: ₹{totalPrice}</h2>
    </div>
    
  )
}

export default Cartpage