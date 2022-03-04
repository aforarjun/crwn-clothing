import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.scss';

function CollectionPreview({title, items}) {
  return (
    <div className='collection-preview'>
        <h2 className='title'>{title.toUpperCase()}</h2>
        <div className="preview">
            {
                items.filter((items, idx)=> idx < 4).map(({id, ...otherColllectionItems})=>(
                    <CollectionItem key={id} {...otherColllectionItems} />
                ))
            }
        </div>
    </div>
  )
}

export default CollectionPreview