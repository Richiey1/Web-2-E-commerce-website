// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import { Container, Typography, Box, Grid, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      {/* Welcome Message */}
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Black Excellence Mart
      </Typography>

      {/* Products Section */}
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      {/* Footer */}
      <Box component="footer" sx={{ py: 5, mt: 5, backgroundColor: '#333', color: 'white' }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
              sx={{ color: 'white' }}
            >
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
              sx={{ color: 'white' }}
            >
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              component="a"
              href="https://www.twitter.com"
              target="_blank"
              aria-label="Twitter"
              sx={{ color: 'white' }}
            >
              <Twitter />
            </IconButton>
          </Grid>
        </Grid>
        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          &copy; 2024 Black Excellence Mart. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default HomePage;
