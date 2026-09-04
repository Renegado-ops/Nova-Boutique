interface CategoryTile {
    name: string;
    image: string;
  }
  
  const TILES: CategoryTile[] = [
    { name: 'new arrivals', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&auto=format&fit=crop&q=80' },
    { name: 'women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80' },
    { name: 'home', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=80' },
    { name: 'handbags', image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&auto=format&fit=crop&q=80' },
    { name: 'men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80' },
    { name: 'kids & baby', image: 'https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=500&auto=format&fit=crop&q=80' },
    { name: 'beauty', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80' },
    { name: 'halloween', image: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=500&auto=format&fit=crop&q=80' },
    { name: 'dresses', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&auto=format&fit=crop&q=80' },
    { name: 'shoes', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500&auto=format&fit=crop&q=80' },
    { name: 'jackets', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=80' },
    { name: 'sweaters', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80' },
  ];
  
  interface CategoryGridProps {
    onSelectCategory: (catName: string) => void;
  }
  
  export const CategoryGrid = ({ onSelectCategory }: CategoryGridProps) => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {TILES.map((tile, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(tile.name.toUpperCase())}
              className="relative h-64 md:h-80 overflow-hidden cursor-pointer group rounded-sm"
            >
              <img
                src={tile.image}
                alt={tile.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-auto">
                <span className="bg-white text-red-600 font-extrabold text-xs md:text-sm px-6 py-2 rounded-full shadow-md whitespace-nowrap lowercase tracking-tight group-hover:bg-red-600 group-hover:text-white transition-colors duration-200 block text-center">
                  {tile.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };