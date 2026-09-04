import { useState } from 'react';
import { Product } from './types/product';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';

export function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('TODOS');
  const [cartCount, setCartCount] = useState<number>(0);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  const categories = [
    'TODOS',
    'MUJER',
    'CARTERAS',
    'CALZADO',
    'ACCESORIOS',
    'CLEARANCE',
  ];

  const filteredProducts =
    selectedCategory === 'TODOS'
      ? PRODUCTS
      : selectedCategory === 'CLEARANCE'
      ? PRODUCTS.filter((p) => p.badge === 'CLEARANCE' || p.price < 25)
      : PRODUCTS.filter((p) => p.category.toUpperCase() === selectedCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hola Nova Boutique! 👋 Me interesa comprar: *${product.name}* (${product.brand}) por $${product.price} USD.`;
    window.open(
      `https://wa.me/18091234567?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      <Navbar
        cartCount={cartCount}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <section className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-slate-900 text-white rounded-lg p-8 md:p-12 text-center space-y-3 border border-slate-800 shadow-md">
          <span className="bg-red-700 text-white text-[10px] font-extrabold tracking-widest px-3 py-1 rounded uppercase">
            HASTA 60% MENOS QUE OTRAS TIENDAS
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">
            GRANDES MARCAS. PRECIOS INCREÍBLES.
          </h2>
          <p className="text-xs text-slate-300 max-w-xl mx-auto">
            Selección exclusiva de moda internacional directa para República
            Dominicana.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex justify-between items-center mb-6 border-b border-slate-300 pb-2">
          <h3 className="text-lg font-extrabold text-slate-900 uppercase">
            {selectedCategory}{' '}
            <span className="text-xs text-slate-500 font-normal">
              ({filteredProducts.length} artículos)
            </span>
          </h3>
          <span className="text-xs text-red-700 font-bold uppercase">
            Precios en USD
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(prod) => {
                setActiveProduct(prod);
                setCartCount((c) => c + 1);
              }}
            />
          ))}
        </div>
      </main>

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onWhatsAppOrder={handleWhatsAppOrder}
      />

      <footer className="bg-slate-900 text-slate-400 text-xs py-8 text-center border-t border-slate-800 space-y-2">
        <p className="font-bold text-white">
          NOVA BOUTIQUE — PROYECTO DEMO EMD
        </p>
        <p className="text-[11px]">
          Desarrollado para exhibición de catálogos e-commerce.
        </p>
      </footer>
    </div>
  );
}

export default App;
