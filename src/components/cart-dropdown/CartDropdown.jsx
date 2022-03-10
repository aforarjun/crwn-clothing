import React from 'react';

import './cart-dropdown.scss';
import CustomBtn from '../custom-btn/CustomBtn';

function CartDropdown() {
  return (
    <div className='cart-dropdown'>
        <div className="cart-item"></div>
        
        <CustomBtn>Go to Checkout</CustomBtn>
    </div>
  )
}

export default CartDropdown