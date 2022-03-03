import React from 'react';

import './homepage.scss';

function HomePage() {
  return (
    <div className='homepage'>
        <div className="directory-menu">
            <div className="menu-item">
                <h2 className='title'>Hats</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
            <div className="menu-item">
                <h2 className='title'>Jackets</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
            <div className="menu-item">
                <h2 className='title'>Sneakers</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
            <div className="menu-item">
                <h2 className='title'>Womens</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
            <div className="menu-item">
                <h2 className='title'>Mans</h2>
                <span className='subtitle'>Shop Now</span>
            </div>
        </div>
    </div>
  )
}

export default HomePage