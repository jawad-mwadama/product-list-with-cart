function Cart() {
  return (
    <div className="rounded-lg bg-rose-50 py-3">
      <h2 className="px-3.5 py-1 text-xl font-bold text-red">Your Cart (7)</h2>

      {/* divider for all items except the last */}
      <div className="divide-y divide-gray-200">
        <div className="flex items-center justify-between px-3.5 py-2">
          {/* left */}
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
          <button className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
