import ProductCard from "../components/Productcard.jsx"

import shoesData from "../data/shoesdata"

function Shoes(props) {
  return (
    <div><h1>Shoes</h1>
    <div className="products-container">

     

     {shoesData.map((product) => (

        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          cartItems={props.cartItems}
          setCartItems={props.setCartItems}
        />

      ))}
        
    

    </div></div>
  )
}

export default Shoes