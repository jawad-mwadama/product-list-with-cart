import React from 'react';

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

  return (
    <div className="flex font-redHat">
      <div className="w-1/3 p-4">
        <picture>
          {/* desktop */}
          <source media="(min-width:1024px)" srcSet={desktop} />
          {/* tablet */}
          <source media="(min-width: 768px)" srcSet={tablet} />
          {/* mobile */}
          <source media="(min-width: 480px)" srcSet={mobile} />
          {/* fallback */}
          <img
            src={thumbnail}
            alt={dessertData.name}
            className="h-42 rounded-lg hover:border-2 hover:border-red"
          />
        </picture>

        <p className="pt-1.5 text-sm text-stone-400">{dessertData.category}</p>
        <h2 className="f font-semibold text-rose-900">{dessertData.name}</h2>
        <span className="text-xl font-bold text-red">
          ${dessertData.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default MenuItem;
