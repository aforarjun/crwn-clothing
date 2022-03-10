import React from 'react';

import './cart-dropdown.scss';
import CustomBtn from '../custom-btn/CustomBtn';

import { connect } from 'react-redux';
import CartDropDownItem from '../cart-dropdown-item/CartDropDownItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = (state) =>({
  cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);