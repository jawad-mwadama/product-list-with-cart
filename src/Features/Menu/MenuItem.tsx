/* React import not required with the automatic JSX runtime */

import QuantityCounter from '../../Ui/QuantityCounter';

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
  const { mobile, tablet, desktop } = dessertData.image;

  return (
    <div>
      <div className="relative font-redHat">
        <picture>
          <source media="(min-width:1024px)" srcSet={desktop} />

          <source media="(min-width: 768px)" srcSet={tablet} />

          <source media="(min-width: 480px)" srcSet={mobile} />

          <img
            src={mobile}
            alt={dessertData.name}
            className="w-full rounded-lg border-red transition duration-600 ease-in-out hover:scale-100 hover:border-3 hover:border-red"
          />
        </picture>

        <QuantityCounter dessert={dessertData} />
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
