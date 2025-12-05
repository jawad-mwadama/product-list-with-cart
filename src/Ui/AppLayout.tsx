import HomeText from './HomeText';
import Menu from '../Features/Menu/Menu';
import Cart from '../Features/Cart/Cart';

function AppLayout() {
  return (
    <div className="grid grid-cols-1 gap-1 lg:grid-cols-[2fr_1fr] lg:px-0">
      <div className="px-2 lg:px-10">
        <HomeText />
        <Menu />
      </div>
      <div className="px-2 py-6">
        <Cart />
      </div>
    </div>
  );
}

export default AppLayout;
