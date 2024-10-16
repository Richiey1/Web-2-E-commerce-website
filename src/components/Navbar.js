// src/components/Navbar.js
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons

function Navbar() {
  return (
    <nav className="navbar">
            <div className="navbar-title">
        <h1>Black Excellence Mart</h1>
      </div>      
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/cart">
            {/* Add cart icon */}
            <FaShoppingCart className="cart-icon" />
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
