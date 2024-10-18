import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';  // Correct import
import { fetchProductById } from '../services/productService';  // Service to fetch product details

function ProductPage() {
  const { id } = useParams();  // Get product ID from the URL
  const [product, setProduct] = useState(null);  // State to store product details
  const dispatch = useDispatch();  // Dispatch for adding item to cart
  const navigate = useNavigate();  // Navigate hook for routing

  // Fetch the product details when the component mounts or the ID changes
  useEffect(() => {
    async function loadProduct() {
      const data = await fetchProductById(id);  // Fetch product details by ID
      setProduct(data);  // Set the fetched product data
    }
    loadProduct();
  }, [id]);

  // If the product is not loaded yet, display a loading message
  if (!product) return <p>Loading...</p>;

  // Handle adding the product to the cart
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));  // Dispatch addItemToCart action with the product
  };

  // Handle "Buy Now" button click - navigate to the payment page with product details
  const handleBuyNow = () => {
    navigate('/payment', { state: { product } });  // Pass product data to payment page
  };

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductPage;
