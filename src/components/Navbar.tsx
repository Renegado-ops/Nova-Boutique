interface NavbarProps {
  cartCount: number;
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Navbar = ({
  cartCount,
  categories,
  selectedCategory,
  onSelectCategory,
}: NavbarProps) => {
  return (
    <header className="bg-white border-b border-slate-300 sticky top-0 z-50">
      <div className="bg-red-700 text-white text-xs font-bold py-2 px-4 text-center tracking-wider uppercase">
        ENVÍO GRATIS EN COMPRAS MAYORES A $89 USD | CÓDIGO:{' '}
        <span className="underline">SHIP89</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-red-700 tracking-tight cursor-pointer">
            NOVA
            <span className="text-slate-900 text-xs block font-bold tracking-widest -mt-1">
              BOUTIQUE
            </span>
          </h1>
        </div>

        <div className="hidden md:flex flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar marcas, ropa, accesorios..."
            className="w-full bg-slate-100 border border-slate-300 rounded-l py-2 px-3 text-xs outline-none focus:bg-white"
          />
          <button className="bg-slate-900 text-white px-4 text-xs font-bold rounded-r hover:bg-red-700 transition-colors">
            BUSCAR
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold">
          <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-3 py-1.5 rounded cursor-pointer hover:bg-slate-200">
            <span>🛍️</span>
            <span className="text-red-700 font-extrabold">{cartCount}</span>
          </div>
        </div>
      </div>

      <nav className="bg-slate-900 text-white text-xs font-bold tracking-wider uppercase">
        <div className="max-w-7xl mx-auto px-4 flex justify-center gap-6 py-2.5 overflow-x-auto whitespace-nowrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`cursor-pointer hover:text-red-400 transition-colors ${
                selectedCategory === cat
                  ? 'text-red-500 border-b-2 border-red-500 pb-0.5'
                  : ''
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};
