import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type CartState, type CartItem, deleteItem } from '../Cart/CartSlice';

import EmptyCart from './EmptyCart';

import X from '/assets/images/icon-remove-item.svg';
import Carbon from '/assets/images/icon-carbon-neutral.svg';

import OrderConfirmedModal from '../Order/OrderConfirmedModal';
import Order from '../Order/Order';

// Define RootState structure (must match your store setup)
interface RootState {
  cart: CartState;
}

// ... (Rest of the component definition remains the same)

function Cart() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // 1. SELECT THE CART DATA FROM REDUX
  const cartItems: CartItem[] = useSelector(
    (state: RootState) => state.cart.cart
  );
  const uniqueItemCount = cartItems.length;

  // 2. CALCULATE DYNAMIC TOTALS
  const orderTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const formattedOrderTotal = orderTotal.toFixed(2);

  // Handler for removing an item
  const handleRemoveItem = (itemName: string) => {
    dispatch(deleteItem(itemName));
  };

  // --- Item Rows Template (Rendered only if cart is NOT empty) ---

  const cartItemRows = (
    <div className="divide-y divide-gray-200">
      {cartItems.map((item) => (
        <div
          key={item.name}
          className="flex items-center justify-between px-3.5 py-2 sm:px-5"
        >
          {/* Item Details */}
          <div className="flex flex-col">
            <span className="py-1 font-semibold text-rose-900">
              {item.name}
            </span>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-rose-600">
                {item.quantity}x
              </span>
              <span>@ ${item.price.toFixed(2)}</span>
              <span className="font-semibold text-gray-900">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => handleRemoveItem(item.name)}
            className="rounded-full border border-red p-1.5 transition-colors hover:border-rose-900"
            aria-label={`Remove one ${item.name} from cart`}
          >
            <img src={X} alt="remove" />
          </button>
        </div>
      ))}
    </div>
  );

  // --- Main Return Statement ---

  return (
    <>
      <div className="rounded-lg bg-rose-50 py-3 font-redHat">
        <h2 className="px-3.5 py-1 text-xl font-bold text-red sm:px-5">
          Your Cart ({uniqueItemCount})
        </h2>

        {/* 3. CONDITIONAL RENDERING */}
        {uniqueItemCount === 0 ? (
          <EmptyCart />
        ) : (
          // If not empty, render the item rows and totals/confirmation
          <>
            {cartItemRows} {/* Renders the list of items */}
            {/* order total */}
            <div className="flex items-center justify-between px-3.5 py-2 sm:px-5">
              <div className="flex flex-col">
                <span className="py-1 font-normal">Order Total</span>
              </div>

              <span className="text-2xl font-bold text-rose-900">
                ${formattedOrderTotal}
              </span>
            </div>
            {/* carbon */}
            <div className="mx-2.5 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-rose-300/40 px-5 py-2 sm:mx-4">
              <img src={Carbon} alt="tree" className="h-4 w-4 shrink-0" />
              This is a
              <span className="font-bold text-black">Carbon neutral</span>
              delivery.
            </div>
            {/* confirm order and order modal */}
            <>
              <Order onConfirm={() => setOpen(true)} />
              <OrderConfirmedModal open={open} onClose={() => setOpen(false)} />
            </>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
