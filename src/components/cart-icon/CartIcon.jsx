import React from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleCard } from '../../redux/cart/cart.action';

function CartIcon({ toggleCard }) {
  return (
    <div className='cart-icon' onClick={toggleCard}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

// const mapStateToProps = ({ cart: {cartItems} }) =>({
//   totalCartItems: cartItems
// })

const mapDispatchToProps = dispatch =>({
  toggleCard: () => dispatch(toggleCard())
})

export default connect(
  null, 
  mapDispatchToProps
)(CartIcon)