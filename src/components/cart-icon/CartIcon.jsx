import React from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleCard } from '../../redux/cart/cart.action';

function CartIcon({ toggleCard, cartItems }) {
  let items = 0;
  for (let i = 0; i < cartItems.length; i++) {
    items += cartItems[i].quantity
  }

  return (
    <div className='cart-icon' onClick={toggleCard}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{items}</span>
    </div>
  )
}

const mapStateToProps = ({ cart: {cartItems} }) =>({
  cartItems: cartItems
})

const mapDispatchToProps = dispatch =>({
  toggleCard: () => dispatch(toggleCard())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon)