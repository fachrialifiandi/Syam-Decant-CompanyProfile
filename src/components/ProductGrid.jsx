import { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = ({ searchQuery = '' }) => {
  const [activeTab, setActiveTab] = useState('Mykonos');
  const [showAll, setShowAll] = useState(false);

  const tabs = ['Mykonos', 'Velixir', 'Afnan', 'Other'];

  const filteredProducts = searchQuery
    ? products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : products.filter(product => product.name.includes(activeTab));

  const displayedProducts = searchQuery 
    ? filteredProducts 
    : (showAll ? filteredProducts : filteredProducts.slice(0, 4));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  return (
    <section id="koleksi" className="py-20 bg-light-100 dark:bg-dark-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-light-200 dark:border-dark-800 pb-4 gap-4">
          <div>
            <h3 className="text-sm tracking-[0.2em] text-dark-800/60 dark:text-light-200/60 uppercase mb-2">
              {searchQuery ? 'Hasil Pencarian' : 'Curated Selection'}
            </h3>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 dark:text-light-100">
              {searchQuery ? `Pencarian: "${searchQuery}"` : 'Koleksi Unggulan'}
            </h2>
          </div>
          
          {!searchQuery && (
            <div className="flex gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`text-sm tracking-wider uppercase border-b-2 pb-1 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-gold-500 text-gold-500 font-medium'
                      : 'border-transparent text-dark-800/70 dark:text-light-200/70 hover:text-dark-900 dark:hover:text-light-100'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-dark-800/60 dark:text-light-200/60 text-lg">
                Tidak ada produk yang cocok dengan pencarian Anda.
              </p>
            </div>
          )}
        </div>
        
        {!searchQuery && filteredProducts.length > 4 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-block border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white px-8 py-3 text-sm tracking-[0.2em] uppercase transition-colors"
            >
              {showAll ? 'Lihat Lebih Sedikit' : 'Lihat Semua'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
