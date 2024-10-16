// src/pages/CartPage.js
import { useSelector } from 'react-redux';

function CartPage() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${cart.totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default CartPage;
