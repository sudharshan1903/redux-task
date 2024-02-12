import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard'; 
import { useDispatch, useSelector } from 'react-redux';
import { saveProducts, saveCartProducts } from '../Reducer/ProductSlice';
import {ProductDb} from '../db/ProductDb';
import { Message } from '@mui/icons-material';
const Home = () => {
  const dispatch = useDispatch();
  const { productsData = {} } = useSelector((state) => state);
  const { products = [], cartProducts = [] } = productsData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productDetails = ProductDb.products;
        dispatch(saveProducts(productDetails));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);
  const handleCart = (event, data) => {
    if (cartProducts.length === 0) {
      let cartCopy = [...cartProducts];
      cartCopy.push({ ...data, quantity: 1 });
      dispatch(saveCartProducts(cartCopy));
    } else if (cartProducts.length > 0) {
      let matchedData = cartProducts.find((item) => item.id === data.id);
      if (matchedData) {
        Message('This Product Already Added');
      } else {
        let cartCopy = [...cartProducts];
        cartCopy.push({ ...data, quantity: 1 });
        dispatch(saveCartProducts(cartCopy));
      }
    }
  };

  return (
    <Container className="text-center" sx={{ padding:4,display:'flex',direction:'column' }}>
      <Grid container spacing={3}>
        {products.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard data={item} handleCart={handleCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
