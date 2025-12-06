import type { ReactNode } from 'react';

interface Modal {
  children: ReactNode;
  open?: false;
}

function OrderConfirmedModal({ open, children }: Modal) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
    >
      {children}
    </div>
  );
}

export default OrderConfirmedModal;
