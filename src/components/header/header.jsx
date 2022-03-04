import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';

function Header() {
  return (
    <nav className='header'>
      <Link to='/'>
        <div className="logo-container">
          <Logo className='logo' />
        </div>
      </Link>

      <div className="options">
        <Link to='/shop' className='option'>Shop</Link>
        <Link to='/' className='option'>Contact Us</Link>
        <Link to='/' className='option'>Cart</Link>
      </div>
    </nav>
  )
}

export default Header