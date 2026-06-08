import ProductCard from "../components/Productcard.jsx"

import Shirtsdata from "../data/Shirtsdata"

function Shirts(props) {
  return (
    <div className="products-container">

      <h1>Shirts Page</h1>

      {Shirtsdata.map((shirt)=>(
        <ProductCard 
        key={shirt.id}
        name={shirt.name}
        price={shirt.price}
        image={shirt.image}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}

        />
      ))}

    </div>
  )
}

export default Shirts