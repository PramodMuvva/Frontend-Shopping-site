function ProductCard(props) {
    function handleCart() {

    const product = {
      name: props.name,
      price: props.price,
      image: props.image
    }

    props.setCartItems([
      ...props.cartItems,
      product
    ])
  }
  console.log(props.cartItems)
  return (
    <div className="card">

      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>

      <p>₹{props.price}</p>

      <button className="but" onClick={handleCart}>Add to cart</button>

  
    </div>
  )
}

export default ProductCard