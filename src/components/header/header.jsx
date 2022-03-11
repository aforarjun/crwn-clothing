import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHiden } from '../../redux/cart/cart.selectors';

function Header({ currentUser, hidden }) {
  return (
    <nav className='header'>
      <Link to='/'>
        <div className="logo-container">
          <Logo className='logo' />
        </div>
      </Link>

      <div className="options">
        <Link to='/' className='option'>About Us</Link>
        <Link to='/shop' className='option'>Shop</Link>
        {
          currentUser ? 
          <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
          :
          <Link to='/sign-in' className='option'>Sign In</Link>
        }
        <Link to='/checkout' className='option'>Checkout</Link>

        <CartIcon />
      </div>

      {
        hidden ? null : <CartDropdown />
      }
    </nav>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHiden
})

// or / same no difference

// const mapStateToProps = (state) =>({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHiden(state)
// })

export default connect(mapStateToProps)(Header);