/* React import not required with the automatic JSX runtime */

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
    <div className="flex flex-col gap-2 p-2 font-redHat">
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
          className="rounded-lg hover:border-2 hover:border-red"
        />
      </picture>

      <p className="text-sm text-stone-400">{dessertData.category}</p>
      <h2 className="font-semibold text-rose-900">{dessertData.name}</h2>
      <span className="text-xl font-bold text-red">
        ${dessertData.price.toFixed(2)}
      </span>
    </div>
  );
}

export default MenuItem;
