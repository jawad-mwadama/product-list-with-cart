import React from 'react';
import data from '../../data/data.json';

import MenuItem from './MenuItem';

interface DessertItem {
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  category: string;
  price: number;
}

const menuData: DessertItem[] = data as DessertItem[];

function Menu() {
  return (
    <div>
      {menuData.map((dessertData) => (
        <MenuItem key={dessertData.name} dessertData={dessertData} />
      ))}
    </div>
  );
}

export default Menu;
