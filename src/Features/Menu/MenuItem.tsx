/* React import not required with the automatic JSX runtime */

import Button from '../../Ui/Button';
import cart from '/assets/images/icon-add-to-cart.svg';

interface MenuItemProps {
  dessertData: {
    image: {
      thumbnail: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
    name: string;
    category: string;
    price: number;
  };
}

function MenuItem({ dessertData }: MenuItemProps) {
  const { thumbnail, mobile, tablet, desktop } = dessertData.image;
  const addToCart = () => {
    alert('i have been clicked');
  };

  return (
    <div>
      <div className="relative font-redHat">
        <picture>
          <source media="(min-width:1024px)" srcSet={desktop} />

          <source media="(min-width: 768px)" srcSet={tablet} />

          <source media="(min-width: 480px)" srcSet={mobile} />

          <img
            src={thumbnail}
            alt={dessertData.name}
            className="w-full rounded-lg border-red transition duration-600 ease-in-out hover:scale-100 hover:border-3 hover:border-red"
          />
        </picture>

        <Button
          onClick={addToCart}
          type="secondary"
          className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 border-2 border-stone-400 font-semibold whitespace-nowrap"
        >
          <img src={cart} alt="cart" className="h-4 w-4 shrink-0" />
          Add to cart
        </Button>
      </div>
      <div className="pt-6">
        <p className="text-sm text-stone-400">{dessertData.category}</p>
        <h2 className="font-semibold text-rose-900">{dessertData.name}</h2>
        <span className="text-xl font-bold text-red">
          ${dessertData.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default MenuItem;
