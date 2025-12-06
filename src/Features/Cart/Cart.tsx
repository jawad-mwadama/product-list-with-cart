import X from '/assets/images/icon-remove-item.svg';
import Carbon from '/assets/images/icon-carbon-neutral.svg';
import Button from '../../Ui/Button';

function Cart() {
  const click = () => alert('order confirmed');
  return (
    <>
      <div className="rounded-lg bg-rose-50 py-3 font-redHat">
        <h2 className="px-3.5 py-1 text-xl font-bold text-red sm:px-5">
          Your Cart (7)
        </h2>

        {/* divider for all items except the last */}
        <div className="divide-y divide-gray-200">
          <div className="flex items-center justify-between px-3.5 py-2 sm:px-5">
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
        <div className="flex items-center justify-between px-3.5 py-2 sm:px-5">
          <div className="flex flex-col">
            <span className="py-1 font-normal">Order Total</span>
          </div>

          <span className="text-2xl font-bold text-rose-900">$46.50</span>
        </div>

        {/* carbon */}
        <div className="mx-2.5 flex items-center justify-center gap-2 rounded-lg bg-rose-300/40 px-5 py-2 sm:mx-4">
          <img src={Carbon} alt="tree" />
          This is a Carbon neutral delivery.
        </div>

        {/* confrim order */}
        <div className="mx-2.5 flex items-center justify-center py-4 sm:mx-4">
          <Button type="primary" onClick={click} className="w-full">
            Confirm order
          </Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
