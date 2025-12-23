import { useDispatch, useSelector } from 'react-redux';

import {
  addItem,
  decreaseQuantity,
  increaseQuantity,
  type DessertItem,
} from '../Features/Cart/CartSlice';

import Button from './Button';
import cart from '/assets/images/icon-add-to-cart.svg';
import increment from '/assets/images/icon-increment-quantity.svg';
import decrement from '/assets/images/icon-decrement-quantity.svg';

interface RootState {
  cart: {
    cart: { name: string; quantity: number }[];
  };
}

interface QuantityCounterProps {
  dessert: DessertItem;
}

function QuantityCounter({ dessert }: QuantityCounterProps) {
  const dispatch = useDispatch();

  // 1) get current quantity
  //look up item in the cart by its name property
  const currentQuantity = useSelector((state: RootState) => {
    // i only need the quantity for the item corresponding to the current dessert card
    const itemInCart = state.cart.cart.find(
      (item) => item.name === dessert.name
    );
    return itemInCart ? itemInCart.quantity : 0;
  });

  //   handlers
  const handleAddItem = () => {
    // if quantity is 0 dispatch full object
    if (currentQuantity === 0) {
      dispatch(addItem(dessert));
    } else {
      // if it exists just increase quantity
      dispatch(increaseQuantity(dessert.name));
    }
  };

  const handleDecreaseItem = () => {
    // dispatch decrease action which handles removing the item if quantity drops to 0
    dispatch(decreaseQuantity(dessert.name));
  };

  //   2) Render logic, show add to cart or counter controls
  if (currentQuantity === 0) {
    return (
      <Button
        onClick={handleAddItem}
        type="secondary"
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 border-2 border-stone-400 font-semibold whitespace-nowrap"
      >
        <img src={cart} alt="cart" className="h-4 w-4 shrink-0" />
        Add to cart
      </Button>
    );
  }

  // State 2: Show the quantity counter
  return (
    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center justify-between gap-1 rounded-full bg-red p-1">
      {/* Decrease Button (-) */}
      <Button onClick={handleDecreaseItem} type="primary" className="p-0">
        <span className="flex h-5 w-5 items-center justify-center rounded-full border">
          <img src={decrement} alt="decrement" className="h-2 w-2 shrink-0" />
        </span>
      </Button>

      {/* Current Quantity */}
      <span className="font-bold text-white">{currentQuantity}</span>

      {/* Increase Button (+) */}
      <Button
        onClick={() => dispatch(increaseQuantity(dessert.name))}
        type="primary"
        className="p-0"
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-full border">
          <img src={increment} alt="increment" />
        </span>
      </Button>
    </div>
  );
}

export default QuantityCounter;
