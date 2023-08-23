import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { IconButton } from '@mui/material';
import Cart from '../Cart/Cart';
import { useState } from 'react';

const Navbar = () => {

  const [open,setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/uk-logo.png" width= '20px' alt="" />
            <IconButton>
              <KeyboardArrowDownIcon />
            </IconButton>      
          </div>
          <div className="item">
            English
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className='link' to='/products/1'>Women</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/2'>men</Link>
          </div>
          <div className="item">
            <Link className='link' to='/products/3'>kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to='/'>MyEshop</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='link' to='/'>Homepage</Link>
          </div>
          <div className="item">
            <Link className='link' to='/About'>About</Link>
          </div>
          <div className="item">
            <Link className='link' to='/Contact'>Contact</Link>
          </div>
          <div className="item">
            <Link className='link' to='/Stores'>Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cartIcon">
              <ShoppingCartIcon onClick={()=>setOpen(!open)}/>
              <span className='cartNumber'>7</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart /> }
    </div>
  )
}

export default Navbar