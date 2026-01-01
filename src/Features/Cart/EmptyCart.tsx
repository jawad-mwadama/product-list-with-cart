import cake from '/assets/images/illustration-empty-cart.svg';

function EmptyCart() {
  return (
    <div className="rounded-lg bg-rose-50 py-3">
      <div className="flex flex-col items-center justify-center">
        <img src={cake} alt="empty cart" className="py-2" />

        <p className="py-2 text-lg font-bold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
