export const Footer = () => {
    return (
      <footer className="bg-[#79a3c3] font-sans text-[#3a2119] border-t border-[#628ba8] mt-12">
        {/* 1. SECCIÓN: FAMILIA DE TIENDAS */}
        <div className="max-w-5xl mx-auto pt-10 px-4 text-center">
          <h4 className="text-[#3a2119] font-extrabold text-lg md:text-xl tracking-tight mb-8 lowercase">
            shop our family of stores for more savings:
          </h4>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center max-w-3xl mx-auto mb-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#1a365d] font-black text-2xl tracking-tighter italic">
                Marshalls
              </span>
              <a href="#" className="text-[#3a2119] text-xs font-bold underline hover:text-white">
                shop
              </a>
            </div>
  
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#3b2319] font-extrabold text-xl tracking-wider">
                SIERRA
              </span>
              <a href="#" className="text-[#3a2119] text-xs font-bold underline hover:text-white">
                shop
              </a>
            </div>
  
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#2b1810] font-serif font-bold text-xl">
                HomeGoods
              </span>
              <a href="#" className="text-[#3a2119] text-xs font-bold underline hover:text-white">
                visit
              </a>
            </div>
  
            <div className="flex flex-col items-center gap-2">
              <span className="bg-[#3a2119] text-white font-bold text-xs px-2 py-1 tracking-wider">
                HOMESENSE
              </span>
              <a href="#" className="text-[#3a2119] text-xs font-bold underline hover:text-white">
                visit
              </a>
            </div>
          </div>
  
          {/* Términos legales */}
          <div className="text-[10px] text-[#3a2119]/80 max-w-4xl mx-auto leading-relaxed space-y-1 my-8 px-4 text-center font-medium">
            <p>
              *Savings percentage based on comparison to regular prices of comparable items at full-price department or specialty retailers. Savings vary over time. Any strikethrough price shown is our prior price. Styles vary by store and online.
            </p>
            <p>**Shipping and Delivery see details.</p>
            <p>
              †Subject to credit approval. Excludes gift cards. Discount is only valid when used with your TJX Rewards credit card. See coupon for details.
            </p>
            <p>‡ Some exclusions apply. Excludes handbags from The Runway and diamonds.</p>
            <p>§Select styles only. Actual prices as marked.</p>
            <p>~Participating stores only. Please contact your local store for details.</p>
          </div>
        </div>
  
        {/* 2. BANNER ESPRESSO */}
        <div className="bg-[#3a2119] text-[#ede6dd] py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-around gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <svg className="w-6 h-6 text-[#79a3c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-extrabold text-sm tracking-tight">Find A Store Near You</span>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="city, state or zip code"
                  className="py-2 px-3 text-xs text-[#3a2119] bg-white rounded-l outline-none w-full sm:w-64 placeholder:text-slate-500"
                />
                <button className="bg-[#79a3c3] text-white px-3 py-2 rounded-r font-black hover:bg-[#628ba8] transition-colors">
                  &gt;
                </button>
              </div>
            </div>
  
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <svg className="w-6 h-6 text-[#79a3c3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-sm tracking-tight leading-tight">
                    Sign Up To Join Our Email List
                  </span>
                  <a href="#" className="text-[10px] underline text-[#79a3c3] hover:text-white">
                    privacy statement
                  </a>
                </div>
              </div>
              <div className="flex items-center w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="email address"
                  className="py-2 px-3 text-xs text-[#3a2119] bg-white rounded-l outline-none w-full sm:w-64 placeholder:text-slate-500"
                />
                <button className="bg-[#79a3c3] text-white px-3 py-2 rounded-r font-black hover:bg-[#628ba8] transition-colors">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* 3. COLUMNAS DE NAVEGACIÓN */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-xs font-semibold">
          <div className="space-y-3">
            <h5 className="font-black text-[#3a2119] text-sm lowercase">support</h5>
            <ul className="space-y-2 text-[#3a2119]/90 lowercase">
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">track my order</a></li>
              <li><a href="#" className="hover:underline">returns</a></li>
              <li><a href="#" className="hover:underline">TJX Rewards credit card</a></li>
              <li><a href="#" className="hover:underline">gift cards</a></li>
              <li><a href="#" className="hover:underline">find a store</a></li>
              <li><a href="#" className="hover:underline">shipping & delivery</a></li>
              <li><a href="#" className="hover:underline">product recalls</a></li>
              <li><a href="#" className="hover:underline">site map</a></li>
              <li><a href="#" className="hover:underline">my account</a></li>
              <li><a href="#" className="hover:underline">contact us</a></li>
            </ul>
          </div>
  
          <div className="space-y-3">
            <h5 className="font-black text-[#3a2119] text-sm lowercase">TJX Rewards® credit card</h5>
            <ul className="space-y-2 text-[#3a2119]/90 lowercase">
              <li><a href="#" className="hover:underline">pay bill</a></li>
              <li><a href="#" className="hover:underline">learn more & apply</a></li>
              <li><a href="#" className="hover:underline">view my rewards</a></li>
            </ul>
          </div>
  
          <div className="space-y-3">
            <h5 className="font-black text-[#3a2119] text-sm lowercase">shopping & app</h5>
            <ul className="space-y-2 text-[#3a2119]/90 lowercase">
              <li><a href="#" className="hover:underline">how we do it</a></li>
              <li><a href="#" className="hover:underline">comparison pricing</a></li>
              <li><a href="#" className="hover:underline">gift cards</a></li>
              <li><a href="#" className="hover:underline">find a store</a></li>
              <li><a href="#" className="hover:underline">runway stores</a></li>
              <li><a href="#" className="hover:underline">grand openings</a></li>
              <li><a href="#" className="hover:underline">download on the app store</a></li>
              <li><a href="#" className="hover:underline">get it on google play</a></li>
            </ul>
          </div>
  
          <div className="space-y-3">
            <h5 className="font-black text-[#3a2119] text-sm lowercase">our company</h5>
            <ul className="space-y-2 text-[#3a2119]/90 lowercase">
              <li><a href="#" className="hover:underline">the TJX companies, inc.</a></li>
              <li><a href="#" className="hover:underline">TJX corporate responsibility</a></li>
              <li><a href="#" className="hover:underline">careers</a></li>
              <li><a href="#" className="hover:underline">inclusion & diversity</a></li>
              <li><a href="#" className="hover:underline">community support</a></li>
              <li><a href="#" className="hover:underline">environmental sustainability</a></li>
              <li><a href="#" className="hover:underline">CA supply chain</a></li>
              <li><a href="#" className="hover:underline">investor relations</a></li>
            </ul>
          </div>
  
          <div className="space-y-3">
            <h5 className="font-black text-[#3a2119] text-sm lowercase">privacy & terms</h5>
            <ul className="space-y-2 text-[#3a2119]/90 lowercase">
              <li><a href="#" className="hover:underline">privacy statement</a></li>
              <li><a href="#" className="hover:underline">CA privacy</a></li>
              <li><a href="#" className="hover:underline">terms of use</a></li>
              <li><a href="#" className="hover:underline">do not sell or share my personal information</a></li>
              <li><a href="#" className="hover:underline">site accessibility</a></li>
            </ul>
          </div>
        </div>
  
        {/* 4. COPYRIGHT */}
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-[#628ba8] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#3a2119]">
          <div className="flex items-center gap-4">
            <span className="font-bold">stay connected with Nova Boutique</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-7 h-7 rounded-full border border-[#3a2119] flex items-center justify-center hover:bg-[#3a2119] hover:text-white transition-colors font-bold text-xs">
                🎵
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-[#3a2119] flex items-center justify-center hover:bg-[#3a2119] hover:text-white transition-colors font-bold text-xs">
                ▶
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-[#3a2119] flex items-center justify-center hover:bg-[#3a2119] hover:text-white transition-colors font-bold text-xs">
                f
              </a>
              <a href="#" className="w-7 h-7 rounded-full border border-[#3a2119] flex items-center justify-center hover:bg-[#3a2119] hover:text-white transition-colors font-bold text-xs">
                📷
              </a>
            </div>
          </div>
  
          <div className="text-[#3a2119]/80 font-medium text-[11px]">
            © 2026 Nova Boutique | <a href="#" className="hover:underline">[-] feedback</a>
          </div>
        </div>
      </footer>
    );
  };