import { useState } from 'react';
import Button from '../../Ui/Button';
import OrderConfirmedModal from './OrderConfirmedModal';

function Order() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-2.5 flex items-center justify-center py-4 sm:mx-4">
      <Button type="primary" onClick={() => setOpen(true)} className="w-full">
        Confirm order
      </Button>

      <OrderConfirmedModal open={open} onClose={() => setOpen(false)}>
        <div className="z-50 mx-auto">Order modal</div>
      </OrderConfirmedModal>
    </div>
  );
}

export default Order;
