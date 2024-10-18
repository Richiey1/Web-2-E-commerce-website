import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function PaymentPage() {
  const location = useLocation();
  const { product } = location.state || {}; // Access product from state
  
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Payment Info:', paymentInfo);
    console.log('Product Info:', product);
  };

  if (!product) {
    return <Typography variant="h6" align="center">No product selected for payment.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Payment
      </Typography>

      {/* Product Summary */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h5">{product.title}</Typography>
        <Typography variant="body1">{product.description}</Typography>
        <Typography variant="h6">Price: ${product.price}</Typography>
      </Box>

      {/* Payment Form */}
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: '0 auto' }}>
        <TextField
          fullWidth
          label="Card Number"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Expiration Date"
          name="expirationDate"
          value={paymentInfo.expirationDate}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="CVV"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handleChange}
          margin="normal"
        />
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 3 }}>
          Submit Payment
        </Button>
      </Box>
    </Container>
  );
}

export default PaymentPage;
