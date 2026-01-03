import { useSelector } from 'react-redux';
import Button from '../../Ui/Button';
import type { CartState } from '../Cart/CartSlice';
interface RootState {
  cart: CartState;
}

interface orderProps {
  onConfirm: () => void;
  buttonText?: string;
}
function Order({ onConfirm, buttonText }: orderProps) {
  const itemCount = useSelector((state: RootState) => state.cart.cart.length);

  const finalButtonText = buttonText
    ? buttonText
    : itemCount > 0
      ? 'Confirm Order'
      : 'Start New Order';

  return (
    <div className="mx-2.5 flex items-center justify-center py-4 sm:mx-4">
      <Button type="primary" onClick={onConfirm} className="w-full">
        {finalButtonText}
      </Button>
    </div>
  );
}

export default Order;
