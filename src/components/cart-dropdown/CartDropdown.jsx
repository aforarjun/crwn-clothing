import React from 'react';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.scss';
import CustomBtn from '../custom-btn/CustomBtn';
import CartDropDownItem from '../cart-dropdown-item/CartDropDownItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCard } from '../../redux/cart/cart.action'

function CartDropdown({cartItems, dispatch}) {
  const navigate = useNavigate();

  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.length ?
          cartItems.map(cartItem => (
            <CartDropDownItem key={cartItem.id} item={cartItem}  />
          ))
          :
          <span className="empty-message">Your cart is empty</span>
        }
      </div>
      
      <CustomBtn onClick={() => {
        navigate('/checkout');
        dispatch(toggleCard());
      }}>Go to Checkout</CustomBtn>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);