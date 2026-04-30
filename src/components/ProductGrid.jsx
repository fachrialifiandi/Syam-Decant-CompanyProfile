import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductGrid = () => {
  return (
    <section id="koleksi" className="py-20 bg-light-100 dark:bg-dark-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-light-200 dark:border-dark-800 pb-4">
          <div>
            <h3 className="text-sm tracking-[0.2em] text-dark-800/60 dark:text-light-200/60 uppercase mb-2">
              Curated Selection
            </h3>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-900 dark:text-light-100">
              Koleksi Unggulan
            </h2>
          </div>
          <a 
            href="#" 
            className="text-sm tracking-wider text-dark-800 dark:text-light-200 hover:text-gold-500 dark:hover:text-gold-500 uppercase border-b border-transparent hover:border-gold-500 transition-colors pb-1"
          >
            Lihat Semua
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
