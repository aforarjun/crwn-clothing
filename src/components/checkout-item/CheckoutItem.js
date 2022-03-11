import React from 'react';

import { connect } from 'react-redux';
import { removeItem, addItem, decreaseCartItem } from '../../redux/cart/cart.action';

import './check-out.scss';

function CheckoutItem({ item, clearItem, decreaseCartItem, addItem }) {
    const { imageUrl, name, quantity, price } = item;
  return (
    <div className='checkout-item'>
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <button className='arrow' onClick={() => decreaseCartItem(item)}>&#10094;</button>
            <span className='value'>{quantity}</span>
            <button className='arrow' onClick={() => addItem(item)}>&#10095;</button>
        </span>
        <span className="price">$ {price}</span>

        <div className="remove-button" onClick={()=> clearItem(item)}>&#120;</div>
    </div>
  )
}



const mapDispatchToProps = (dispatch) =>({
    clearItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseCartItem: item => dispatch(decreaseCartItem(item))
})

export default connect(
    null, 
    mapDispatchToProps
)(CheckoutItem)