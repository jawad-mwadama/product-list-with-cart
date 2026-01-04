import { useDispatch, useSelector } from 'react-redux';
import { clearCart, type CartItem, type CartState } from '../Cart/CartSlice';
import Order from './Order';

import X from '/assets/images/icon-remove-item.svg';
import confirm from '/assets/images/icon-order-confirmed.svg';
import ModalItemRow from './ModalItemRow';

interface RootState {
  cart: CartState;
}

interface Modal {
  open: boolean;
  onClose: () => void;
}

function OrderConfirmationModal({ open, onClose }: Modal) {
  const dispatch = useDispatch();

  // 1: accessing redux cart data
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.cart
  );

  // 2:calculate dynamic total
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const formattedTotal = orderTotal.toFixed(2);

  // 3: Handle 'start new order' action (clears cart and closes modal)
  const handleStartShopping = () => {
    dispatch(clearCart());
    onClose();
  };

  // optimization: if modal is not open return null immediately
  if (!open) {
    return null;
  }

  //static classes for visibility
  const outerClassName = `fixed inset-0 z-50 mx-auto flex items-center justify-center font-redHat transition-colors bg-black/40`;
  const innerClassName = `w-[90%] rounded-lg bg-rose-50 p-6 transition-all sm:max-w-xl scale-100 opacity-100`;
  return (
    <div
      className={outerClassName}
      onClick={onClose} // Allows closing modal by clicking outside
    >
      <div onClick={(e) => e.stopPropagation()} className={innerClassName}>
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 rounded-full border border-red p-1.5"
          onClick={onClose}
        >
          <img src={X} alt="close" />
        </button>

        <span>
          <img src={confirm} alt="order-confirmed" className="h-9 w-9" />
        </span>
        <h2 className="flex-wrap py-2 text-2xl font-bold text-rose-900 sm:flex">
          Order Confirmed
        </h2>
        <p className="pb-2 text-rose-300">We hope you enjoy your food!</p>

        {/* Dynamic Order Section */}
        <div className="divide-y divide-gray-200 rounded-lg bg-rose-100 p-1.5 py-2">
          {/* Map over the live cart items to render the order details */}
          {cartItems.map((item) => (
            // Using the separate ModalItemRow component for cleaner code
            <ModalItemRow key={item.name} item={item} />
          ))}
        </div>

        {/* Dynamic Order Total */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            <span className="py-1 font-normal">Order Total</span>
          </div>

          <span className="text-2xl font-bold text-rose-900">
            ${formattedTotal}
          </span>
        </div>

        {/* Order Button (Start New Order) */}
        <div className="pt-4">
          <Order onConfirm={handleStartShopping} buttonText="Start new Order" />
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmationModal;
