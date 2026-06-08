import ProductCard from "../components/Productcard.jsx"

import Watchesdata from "../data/Watchesdata"
function Watches(props) {
  return (
    <div className="products-container">

      <h1 className="page-heading">Watches Page</h1>

      {Watchesdata.map((watch)=>(
        <ProductCard 
        key={watch.id}
        name={watch.name}
        price={watch.price}
          image={watch.image}

        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        />
        ))}

    </div>
  )
}

export default Watches