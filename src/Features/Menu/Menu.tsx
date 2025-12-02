/* React import not required with the automatic JSX runtime */
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
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {menuData.map((dessertData) => (
        <MenuItem key={dessertData.name} dessertData={dessertData} />
      ))}
    </div>
  );
}

export default Menu;
