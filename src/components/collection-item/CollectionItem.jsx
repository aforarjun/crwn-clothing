import React from 'react';

import './collection-item.scss';
import CustomBtn from '../custom-btn/CustomBtn';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action'

function CollectionItem({item, addItem}) {
  const { name, imageUrl, price } = item;

  return (
    <div className='collection-item'> 
      <div className="image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <CustomBtn onClick={() => addItem(item)}>Add To Cart</CustomBtn>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);