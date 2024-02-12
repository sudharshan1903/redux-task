import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCartProducts } from '../Reducer/ProductSlice';
import {
  Grid,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Rating
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartCard = ({ data, handleQuantity }) => {
  const dispatch = useDispatch();
  const { productsData = {} } = useSelector((state) => state);
  const { cartProducts = [] } = productsData;

  const handleRemove = () => {
    dispatch(saveCartProducts(cartProducts.filter((item) => item.id !== data.id)));
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card sx={{ display: 'flex', flexDirection: 'column', margin:1 }} >
        <img
        src={data.images[0]}
          alt='img'
          width={200}
          height={150}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight="bold">
            {data.title}
          </Typography>
          <Typography>{data.description}</Typography>
          <Rating name="read-only" value={data.rating} readOnly sx={{ mt: 1 }} />
        </CardContent>
        <CardActions>
          <Select
            onChange={(e) => handleQuantity(e, data)}
            className='p-0 text-center pe-2'
            label='Quantity'
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
          <Typography variant="subtitle1" sx={{ flexGrow: 1, textAlign: 'right' }}>
           <b>Per cost</b>  ${data.price}
          </Typography>
          <IconButton onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Typography variant="subtitle1" sx={{ textAlign: 'right', mt: 2 }}>
          Sub Total: ${data.addPrice ? `${data.addPrice}` : `${data.price}`}
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: 'left', mt: 2 }}>
         <b>Total: </b>${data.addPrice ? `${data.addPrice}` : `${data.price}`}
        </Typography>
      </Card>
    </Grid>
  );
};

export default CartCard;
