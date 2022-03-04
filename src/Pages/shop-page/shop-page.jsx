import React, { Component } from 'react';

import './shop-page.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-collections/CollectionPreview';

export class ShopPage extends Component {
  constructor(){
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (
      <div className='shop-page'>
        <h1>Collections</h1>
        {
          this.state.collections.map(({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage