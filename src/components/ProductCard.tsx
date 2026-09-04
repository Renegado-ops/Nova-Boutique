import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  return (
    <div
      className="bg-white border border-slate-300 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between hover:border-red-600 transition-all cursor-pointer"
      onClick={() => onSelect(product)}
    >
      <div>
        <div className="relative h-64 bg-slate-200 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.badge && (
            <span className="absolute top-2 left-2 bg-red-700 text-white font-extrabold text-[9px] uppercase px-2 py-0.5 rounded">
              {product.badge}
            </span>
          )}
        </div>

        <div className="p-4 space-y-1">
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
            {product.brand}
          </span>
          <h4 className="text-xs font-bold text-slate-800 line-clamp-1">
            {product.name}
          </h4>
        </div>
      </div>

      <div className="p-4 pt-0 border-t border-slate-100 mt-2">
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-base font-extrabold text-red-700">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-slate-400 line-through">
            ${product.compareAtPrice.toFixed(2)}
          </span>
        </div>
        <span className="text-[10px] font-bold text-slate-500 block uppercase">
          COMPARE AT ${product.compareAtPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
