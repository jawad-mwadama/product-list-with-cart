import X from '/assets/images/icon-remove-item.svg';
import confirm from '/assets/images/icon-order-confirmed.svg';

interface Modal {
  open: boolean;
  onClose: () => void;
}

function OrderConfirmedModal({ open, onClose }: Modal) {
  return (
    <div
      className={`fixed inset-0 z-50 mx-auto flex items-center justify-center transition-colors ${open ? 'visible bg-black/40' : 'invisible'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded-lg bg-rose-50 p-6 transition-all ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          className="absolute top-2 right-2 rounded-full border border-red p-1.5"
          onClick={onClose}
        >
          <img src={X} alt="remove" />
        </button>
        <span>
          <img src={confirm} alt="order-confirmed" />
        </span>
        <h2>Order now</h2>
        <p>We hope you enjoy your food!</p>
      </div>
    </div>
  );
}
export default OrderConfirmedModal;
