import React from 'react';

import HomeText from './HomeText';
import Menu from '../Features/Menu/Menu';

function AppLayout() {
  return (
    <div className="p-12">
      <HomeText />
      <Menu />
    </div>
  );
}

export default AppLayout;
