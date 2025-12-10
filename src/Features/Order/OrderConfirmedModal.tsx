import X from '/assets/images/icon-remove-item.svg';
import confirm from '/assets/images/icon-order-confirmed.svg';
import tiramisuThumbnail from '/assets/images/image-tiramisu-thumbnail.jpg';

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
        className={`w-[90%] rounded-lg bg-rose-50 p-6 transition-all sm:max-w-xl ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
      >
        <button
          className="absolute top-3 right-3 rounded-full border border-red p-1.5"
          onClick={onClose}
        >
          <img src={X} alt="remove" />
        </button>

        <span>
          <img src={confirm} alt="order-confirmed" className="h-9 w-9" />
        </span>
        <h2 className="py-2 text-2xl font-bold text-rose-900">Order now</h2>
        <p className="pb-2">We hope you enjoy your food!</p>

        {/* order section */}

        <div className="divide-y divide-gray-200 rounded-lg bg-rose-100 p-1.5">
          <div className="flex items-center justify-between">
            {/* left group */}
            <div className="flex items-center gap-3">
              <img src={tiramisuThumbnail} className="h-12 w-12 rounded-md" />

              <div>
                <p className="font-medium text-rose-900">Classic Tiramisu</p>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-semibold text-rose-600">1x</span>
                  <span>@ $5.50</span>
                </div>
              </div>
            </div>

            {/* right total */}
            <span className="font-semibold text-gray-900">$5.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderConfirmedModal;
