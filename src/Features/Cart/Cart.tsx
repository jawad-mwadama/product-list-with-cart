import X from '/assets/images/icon-remove-item.svg';

function Cart() {
  return (
    <>
      <div className="rounded-lg bg-rose-50 py-3">
        <h2 className="px-3.5 py-1 text-xl font-bold text-red">
          Your Cart (7)
        </h2>

        {/* divider for all items except the last */}
        <div className="divide-y divide-gray-200">
          <div className="flex items-center justify-between px-3.5 py-2">
            {/* left*/}
            <div className="flex flex-col">
              <span className="py-1 font-semibold text-rose-900">
                Classic Tiramisu
              </span>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold text-rose-600">1x</span>
                <span>@ $5.50</span>
                <span className="font-semibold text-gray-900">$5.50</span>
              </div>
            </div>

            {/* right */}
            <button className="rounded-full border border-red p-1.5 text-gray-400 hover:text-gray-600">
              <img src={X} alt="remove" />
            </button>
          </div>
        </div>

        {/* order */}
        <div className="flex items-center justify-between px-3.5 py-2">
          <div className="flex flex-col">
            <span className="py-1 font-normal">Order Total</span>
          </div>

          <span className="text-2xl font-bold text-rose-900">$46.50</span>
        </div>
      </div>
    </>
  );
}

export default Cart;
