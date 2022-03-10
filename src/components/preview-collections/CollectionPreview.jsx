import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './collection-preview.scss';

function CollectionPreview({title, items}) {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>
      <div className="preview">
        {
          items
          .filter((items, idx)=> idx < 4)
          .map((item)=>(
            <CollectionItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionPreview