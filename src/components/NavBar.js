import React from 'react';
import { AppBar, Toolbar, Typography, Badge, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const NavBar = ()=> {
  const { productsData = {} } = useSelector((state) => state);
  const { cartProducts = [] } = productsData;

  return (
    <div className='mt-4 mb-4'>
      <AppBar position='static' className='bg-info'>
        <Toolbar>
          <Typography variant='h6' component='div'>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              SHOPPING
            </Link>
          </Typography>
          <div style={{ marginLeft: 'auto' }}>
            <IconButton color='inherit'>
              <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                <Badge badgeContent={cartProducts.length} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </Link>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
