import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon from react-icons


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>Black Excellence Mart</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" activeClassName="active-link">
            <FaShoppingCart className="cart-icon" /> {/* Cart Icon */}
            Cart
          </NavLink>
        </li>        
        <li>
          <NavLink to="/payment" activeClassName="active-link">
            Payment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
