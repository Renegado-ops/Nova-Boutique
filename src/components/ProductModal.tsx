import { Product } from '../types/product';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onWhatsAppOrder: (product: Product) => void;
}

export const ProductModal = ({
  product,
  onClose,
  onWhatsAppOrder,
}: ProductModalProps) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg p-6 relative shadow-2xl space-y-4">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-slate-400 hover:text-slate-900 font-bold text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="flex gap-4 items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-28 h-36 object-cover rounded"
          />
          <div className="space-y-1">
            <span className="text-xs font-extrabold text-slate-400 uppercase">
              {product.brand}
            </span>
            <h4 className="text-sm font-bold text-slate-900">{product.name}</h4>
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-lg font-extrabold text-red-700">
                ${product.price} USD
              </span>
              <span className="text-xs text-slate-400 line-through">
                ${product.compareAtPrice}
              </span>
            </div>
            <p className="text-[10px] font-bold text-slate-500">
              COMPARE AT ${product.compareAtPrice} USD
            </p>
          </div>
        </div>

        <button
          onClick={() => onWhatsAppOrder(product)}
          className="w-full bg-emerald-600 text-white py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Pedir por WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
