import React from 'react';
import { Button, Grid, Card, CardContent, Typography, Rating } from '@mui/material';

const ProductCard = ({ data, handleCart }) => {
  return (
    <Grid   sx={{ mb: 3 }}>
      <Card>
        <img
          style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          src={data.images[0]}
          alt={data.title}
        />
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {data.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {data.description}
          </Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            ${data.price}
          </Typography>
          <Rating name="read-only" value={data.rating} readOnly sx={{ mt: 1 }} />
        </CardContent>
        <div className='card-footer' style={{ textAlign: 'center' }}>
          <Button onClick={(event) => handleCart(event, data)} variant='contained' style={{margin:10}} color='primary'>
            Add to Cart
          </Button>
        </div>
      </Card>
    </Grid>
  );
};

export default ProductCard;
