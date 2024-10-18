import React from 'react';
import { Container, Typography, Button, Grid, Box, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateItemQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom'; // Add useNavigate
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate(); // Initialize useNavigate

  // Remove item from cart
  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
  };

  // Increase item quantity
  const handleIncreaseQuantity = (id) => {
    dispatch(updateItemQuantity({ id, quantity: 1 }));
  };

  // Decrease item quantity
  const handleDecreaseQuantity = (id) => {
    dispatch(updateItemQuantity({ id, quantity: -1 }));
  };

  // Navigate to payment page with selected product
  const handleBuyNow = (item) => {
    navigate('/payment', { state: { product: item } });
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Your Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography align="center">Your cart is empty.</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                p={2}
                border="1px solid #ccc"
                borderRadius={2}
                boxShadow={1}
                mb={2}
              >
                <Typography variant="subtitle1" flexGrow={1}>
                  {item.title}
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography variant="body1" sx={{ mr: 2 }}>
                    ${item.price.toFixed(2)}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleDecreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body2" sx={{ mx: 1 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton color="primary" onClick={() => handleIncreaseQuantity(item.id)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemove(item.id)}
                    sx={{ ml: 2 }}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBuyNow(item)} // Buy Now button
                    sx={{ ml: 2 }}
                  >
                    Buy Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
      <Typography variant="h5" align="center" sx={{ mt: 4 }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
    </Container>
  );
}

export default CartPage;
