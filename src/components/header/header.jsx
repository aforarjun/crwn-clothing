import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

function Header({ currentUser, hidden }) {
  return (
    <nav className='header'>
      <Link to='/'>
        <div className="logo-container">
          <Logo className='logo' />
        </div>
      </Link>

      <div className="options">
        <Link to='/shop' className='option'>Shop</Link>
        {
          currentUser ? 
          <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
          :
          <Link to='/sign-in' className='option'>Sign In</Link>
        }
        <Link to='/' className='option'>Contact</Link>

        <CartIcon />
      </div>

      {
        hidden ? null : <CartDropdown />
      }
    </nav>
  )
}

const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) =>({
  currentUser: currentUser,
  hidden: hidden
})

export default connect(mapStateToProps)(Header);