import React from 'react';

import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import { connect } from 'react-redux';
import { toggleCard } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCard, cartItems }) {

  return (
    <div className='cart-icon' onClick={toggleCard}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItems}</span>
    </div>
  )
}

const mapStateToProps = (state) =>({
  cartItems: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch =>({
  toggleCard: () => dispatch(toggleCard())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CartIcon)