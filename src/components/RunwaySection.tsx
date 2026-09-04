import { useState } from 'react';
import type { Product } from '../types/product';

interface RunwayItem {
  id: number;
  brand?: string;
  revealDesigner?: boolean;
  name: string;
  price: number;
  compareAtPrice: number;
  image: string;
  badge?: string;
}

const RUNWAY_PRODUCTS: RunwayItem[] = [
  {
    id: 101,
    brand: 'JASON WU',
    name: 'Mules Wedge Animal Print',
    price: 29.99,
    compareAtPrice: 48.0,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&auto=format&fit=crop&q=80',
    badge: 'almost gone',
  },
  {
    id: 102,
    revealDesigner: true,
    brand: 'VALENTINO BEAUTY',
    name: 'Labial Líquido Luxury',
    price: 24.99,
    compareAtPrice: 40.0,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 103,
    brand: 'MAGASCHONI',
    name: 'Suéter de Punto Rayado',
    price: 39.99,
    compareAtPrice: 67.0,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 104,
    revealDesigner: true,
    brand: 'RAG & BONE',
    name: 'Pantalón Denim Wide Leg',
    price: 89.99,
    compareAtPrice: 135.0,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80',
  },
];

interface RunwaySectionProps {
  onSelectProduct: (product: Product) => void;
}

export const RunwaySection = ({ onSelectProduct }: RunwaySectionProps) => {
  const [revealed, setRevealed] = useState<{ [key: number]: boolean }>({});

  const toggleReveal = (id: number) => {
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="relative flex items-center justify-center my-8">
        <div className="flex-grow border-t border-slate-900"></div>
        <h3 className="flex-shrink mx-6 text-slate-900 font-bold text-lg md:text-2xl text-center">
          you'll love these finds from{' '}
          <span className="text-purple-800 underline underline-offset-4 font-extrabold cursor-pointer hover:opacity-80">
            the runway
          </span>
        </h3>
        <div className="flex-grow border-t border-slate-900"></div>
      </div>

      <div className="relative group/carousel">
        <button className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow border border-slate-200 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2">
          {RUNWAY_PRODUCTS.map((item) => {
            const isRevealed = revealed[item.id];

            return (
              <div
                key={item.id}
                className="flex flex-col items-center group relative cursor-pointer"
                onClick={() =>
                  onSelectProduct({
                    id: item.id,
                    name: item.name,
                    brand: item.brand || 'DESIGNER BRAND',
                    category: 'Runway',
                    price: item.price,
                    compareAtPrice: item.compareAtPrice,
                    image: item.image,
                    badge: item.badge,
                  })
                }
              >
                {item.badge && (
                  <div className="absolute top-2 left-2 z-10 w-12 h-12 rounded-full border-2 border-red-600 text-red-600 flex items-center justify-center text-[9px] font-black uppercase text-center rotate-[-12deg] bg-white/90 p-1 leading-none shadow-sm">
                    almost gone
                  </div>
                )}

                <button
                  className="absolute top-2 right-2 z-10 text-red-600 hover:scale-110 transition-transform p-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Contenedor vertical 3:4 uniforme */}
                <div className="w-full aspect-[3/4] relative overflow-hidden bg-slate-100 rounded-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 text-slate-900 border border-slate-900 rounded-full py-1.5 px-6 text-xs font-bold shadow-md hover:bg-slate-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    quick look
                  </button>
                </div>

                <div className="mt-4 text-center w-full space-y-1">
                  {item.revealDesigner && !isRevealed ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleReveal(item.id);
                      }}
                      className="border border-slate-900 rounded-full py-1 px-5 text-xs font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
                    >
                      reveal designer
                    </button>
                  ) : (
                    <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      {item.brand}
                    </h4>
                  )}

                  <div className="text-sm font-extrabold text-slate-900 pt-1">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase">
                    Compare At ${item.compareAtPrice.toFixed(2)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-900 p-2 rounded-full shadow border border-slate-200 cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};