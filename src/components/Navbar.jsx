import { Link } from "react-router-dom"

function Navbar(props) {
  return (
    <nav className="navbar">

      <h1>ShopEase</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shoes">Shoes</Link>

        <Link to="/watches">Watches</Link>

        <Link to="/shirts">Shirts</Link>
      <h3>Cart:{props.cartItems.length}</h3>

<Link to="/cartpage">Cart</Link>        

      </div>

    </nav>
  )
}

export default Navbar