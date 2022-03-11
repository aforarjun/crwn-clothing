import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import './checkout-page.scss';

function CheckOutPage({ cartItems, cartTotalPrice }) {
  return (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.length ?
            cartItems.map( cartItem => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span>No Cart Item <Link to='/shop' >Go To Shop</Link></span>
        }

        <div className="total">
            <span>TOTAL: ${cartTotalPrice}</span>
        </div>


    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckOutPage)