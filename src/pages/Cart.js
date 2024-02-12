import React from 'react';
import Container from '@mui/material/Container';
import CartCard from '../components/CardCart'; // Assuming you have a CartCard component
import { useDispatch, useSelector } from 'react-redux';
import { saveCartProducts } from '../Reducer/ProductSlice';

const  Cart = () => {
  const dispatch = useDispatch();
  const { productsData = {} } = useSelector((state) => state);
  const { cartProducts = [] } = productsData;

  const handleQuantity = (e, data) => {
    let quantity = e.target.value;
    let price = data.price;
    dispatch(
      saveCartProducts(
        cartProducts.map((item) =>
          item.id === data.id ? { ...item, addPrice: quantity * price} : { ...item }
        )
      )
    );
  };

  return (
    <div>
      <Container sx={{ paddingTop: 4 }}>
        {cartProducts.length > 0 ? (
          cartProducts.map((item, i) => (
            <CartCard key={i} data={item} handleQuantity={handleQuantity} />
          ))
        ) : (
          <img
            className='emptyCart'
            src='http://st2.depositphotos.com/6942046/10778/i/450/depositphotos_107780404-Promotion-counter-on-wheels-with-umbrella-food-ice-cream-hot-dog-push-cart-Retail-Trade-Stand-Isolated--render.jpg'
            alt='img'
          />
        )}
      </Container>
    </div>
  );
}
export default  Cart;