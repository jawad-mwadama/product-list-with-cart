import X from '/assets/images/icon-remove-item.svg';
import confirm from '/assets/images/icon-order-confirmed.svg';

interface Modal {
  open: boolean;
  onClose: () => void;
}

function OrderConfirmedModal({ open, onClose }: Modal) {
  return (
    <div
      className={`fixed inset-0 z-50 mx-auto flex items-center justify-center font-redHat transition-colors ${open ? 'visible bg-black/40' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-rose-50 p-4 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          className="absolute top-2 right-2 rounded-full border border-red p-1.5"
          onClick={onClose}
        >
          <img src={X} alt="remove" />
        </button>
        <span>
          <img src={confirm} alt="order-confirmed" className="h-9 w-9" />
        </span>
        <h2 className="pt-3 text-2xl font-bold text-rose-900">Order now</h2>
        <p>We hope you enjoy your food!</p>
      </div>
    </div>
  );
}
export default OrderConfirmedModal;
