interface NavbarProps {
  cartCount: number;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Navbar = ({
  cartCount,
  selectedCategory,
  onSelectCategory,
}: NavbarProps) => {
  return (
    <header className="bg-white font-sans border-b border-gray-200">
      {/* 1. BARRA DE MARCAS ASOCIADAS E ÍCONOS DE UTILIDAD */}
      <div className="border-b border-gray-200 py-2 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-800">
          <div className="flex items-center gap-3 md:gap-5 font-extrabold text-sm tracking-tight">
            <span className="text-red-600 text-base italic font-black cursor-pointer">NOVA</span>
            <span className="text-blue-800 cursor-pointer hover:opacity-80">MARSHALLS</span>
            <span className="text-red-800 font-serif cursor-pointer hover:opacity-80">HOMEGOODS</span>
            <span className="text-orange-600 tracking-wider cursor-pointer hover:opacity-80">SIERRA</span>
            <span className="bg-emerald-700 text-white text-[10px] px-1.5 py-0.5 font-bold cursor-pointer">HOMESENSE</span>
          </div>

          <div className="flex items-center gap-4 md:gap-6 text-[13px] font-normal text-slate-800">
            <button className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
              <span>tiendas</span>
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <button className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
              <span>iniciar sesión</span>
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            <button className="hidden sm:flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
              <span>recompensas</span>
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>

            <button className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer">
              <span>favoritos</span>
              <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <button className="flex items-center gap-1.5 hover:text-red-600 transition-colors cursor-pointer relative">
              <span>mi bolsa</span>
              <div className="relative">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 2. ÁREA CENTRAL: LOGO CENTRADO + BUSCADOR OVALADO */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex items-center justify-between relative">
        <div className="w-full text-center">
          <h1 className="text-5xl md:text-6xl font-black text-red-600 tracking-tighter italic inline-block cursor-pointer select-none">
            NOVA<span className="text-red-600 font-extrabold not-italic text-4xl">.boutique</span>
            <span className="text-xs font-normal not-italic align-top ml-0.5">®</span>
          </h1>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block w-72">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="buscar"
              className="w-full border border-slate-900 rounded-full py-1.5 pl-4 pr-10 text-sm outline-none focus:ring-1 focus:ring-black placeholder:text-slate-600"
            />
            <button className="absolute right-3 text-red-600 hover:text-red-800 transition-colors cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. MENÚ DE DEPARTAMENTOS */}
      <nav className="border-t border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap text-sm font-bold lowercase tracking-tight">
          <button 
            onClick={() => onSelectCategory('TODOS')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'TODOS' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            nuevas llegadas
          </button>
          <button 
            onClick={() => onSelectCategory('RUNWAY')}
            className="text-purple-800 font-extrabold hover:opacity-80 transition-opacity"
          >
            el desfile
          </button>
          <button 
            onClick={() => onSelectCategory('MUJER')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'MUJER' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            mujer
          </button>
          <button 
            onClick={() => onSelectCategory('OTOÑO')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'OTOÑO' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            moda de otoño
          </button>
          <button 
            onClick={() => onSelectCategory('CALZADO')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'CALZADO' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            calzado
          </button>
          <button 
            onClick={() => onSelectCategory('HOMBRE')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'HOMBRE' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            hombre
          </button>
          <button 
            onClick={() => onSelectCategory('ACCESORIOS')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'ACCESORIOS' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            belleza & accesorios
          </button>
          <button 
            onClick={() => onSelectCategory('CARTERAS')}
            className={`hover:text-red-600 transition-colors ${selectedCategory === 'CARTERAS' ? 'text-red-600 underline underline-offset-4' : 'text-slate-900'}`}
          >
            hogar
          </button>
          <button 
            onClick={() => onSelectCategory('TENDENCIAS')}
            className="text-red-600 font-extrabold hover:text-red-800 transition-colors"
          >
            tendencias
          </button>
          <button 
            onClick={() => onSelectCategory('CLEARANCE')}
            className="text-red-600 font-black hover:text-red-800 transition-colors"
          >
            clearance
          </button>
        </div>
      </nav>

      {/* 4. CINTILLA PROMO */}
      <div className="bg-[#eeeeee] py-2.5 px-4 text-center text-xs md:text-sm text-slate-900 border-t border-b border-gray-300 font-normal">
        <span className="font-bold">envío gratis</span> en pedidos de $89+ usa el código <span className="font-bold">ship89</span> | devoluciones gratis en tu tienda local | <a href="#" className="underline font-normal hover:text-red-600">ver detalles &gt;</a>
      </div>
    </header>
  );
};