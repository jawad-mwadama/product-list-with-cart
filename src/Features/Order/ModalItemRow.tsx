import type { CartItem } from '../Cart/CartSlice';

interface ModalItemRowProps {
  item: CartItem;
}

function ModalItemRow({ item }: ModalItemRowProps) {
  const orderTotal = (item.quantity * item.price).toFixed(2);

  const thumbnailUrl = item.image.thumbnail;
  return (
    <div className="flex items-center justify-between pt-2">
      {/* Left Group (Thumbnail, Name, Quantity/Price) */}
      <div className="flex items-center gap-3">
        {/* Dynamic Image */}
        <img
          src={thumbnailUrl}
          alt={item.name}
          className="h-12 w-12 rounded-md"
        />

        <div>
          {/* Dynamic Name */}
          <p className="font-medium text-rose-900">{item.name}</p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            {/* Dynamic Quantity and Unit Price */}
            <span className="font-semibold text-rose-600">
              {item.quantity}x
            </span>
            <span>@ ${item.price.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Right Total (Dynamic Line Item Total) */}
      <span className="font-semibold text-gray-900">${orderTotal}</span>
    </div>
  );
}

export default ModalItemRow;
