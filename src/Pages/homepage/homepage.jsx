import React from 'react';

import './homepage.scss';
import DirectoryMenu from '../../components/directory-menu/directory-menu';

function HomePage() {
  return (
    <div className='homepage'>
        <DirectoryMenu />
    </div>
  )
}

export default HomePage