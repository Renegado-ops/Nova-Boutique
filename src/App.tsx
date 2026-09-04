import { useState } from 'react';
import type { Product } from './types/product';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { RunwaySection } from './components/RunwaySection';
import { CategoryGrid } from './components/CategoryGrid';
import { Footer } from './components/Footer';

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

      {/* BANNER VISUAL DE CATEGORÍAS */}
      <CategoryGrid onSelectCategory={setSelectedCategory} />

      {/* CATÁLOGO DE PRODUCTOS */}
      <main className="max-w-7xl mx-auto px-4 pb-8">
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

      {/* SECCIÓN THE RUNWAY */}
      <RunwaySection
        onSelectProduct={(prod) => {
          setActiveProduct(prod);
          setCartCount((c) => c + 1);
        }}
      />

      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
        onWhatsAppOrder={handleWhatsAppOrder}
      />

      {/* NUEVO FOOTER COMPLETO ESTILO TJMAXX */}
      <Footer />
    </div>
  );
}

export default App;