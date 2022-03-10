import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

function Header({ currentUser }) {
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

        <Link to='/' className='option'>Cart</Link>
      </div>
    </nav>
  )
}

const mapStateToProps = state =>({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);