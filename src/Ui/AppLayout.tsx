import HomeText from './HomeText';
import Menu from '../Features/Menu/Menu';
import Cart from '../Features/Cart/Cart';

function AppLayout() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="px-8 py-8">
        <HomeText />
        <Menu />
      </div>
      <div className="flex justify-end">
        <Cart />
      </div>
    </div>
  );
}

export default AppLayout;
