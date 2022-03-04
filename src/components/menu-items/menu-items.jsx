import React from 'react';

import './menu-item.scss';

function MenuItems({title, imageUrl, size}) {
  return (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        <div className="content">
            <h2 className='title'>{title.toUpperCase()}</h2>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
  )
}

export default MenuItems;