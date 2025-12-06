import empty from '/assets/images/icon-remove-item.svg';

function EmptyCart() {
  return (
    <div className="rounded-lg bg-rose-50 py-3">
      <h2 className="px-3.5 py-1 text-xl font-bold text-red">Your Cart (0)</h2>

      <div className="flex flex-col items-center justify-center">
        <img src={empty} alt="empty cart" className="py-2" />

        <p className="py-2 text-lg font-bold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
