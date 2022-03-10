import React from 'react';

import './cart-dropdown.scss';
import CustomBtn from '../custom-btn/CustomBtn';

import { connect } from 'react-redux';
import CartDropDownItem from '../cart-dropdown-item/CartDropDownItem';

function CartDropdown({cartItems}) {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.map(cartItem => (
            <CartDropDownItem key={cartItem.id} item={cartItem}  />
          ))
        }
      </div>
      
      <CustomBtn>Go to Checkout</CustomBtn>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) =>({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);