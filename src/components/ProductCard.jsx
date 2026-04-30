import { useState } from 'react';
import { motion } from 'framer-motion';


const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState('2ml');

  const getPrice = (size) => {
    const ml = parseInt(size.replace(/\D/g, '')) || 0;
    
    if (product.pricePerMl && ml > 0) {
      const calculatedPrice = ml * product.pricePerMl;
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(calculatedPrice);
    }
    
    return product.price;
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-dark-800 p-4 border border-light-200 dark:border-dark-800 hover:border-gold-500/50 dark:hover:border-gold-500/50 transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none"
    >
      <div className="relative aspect-square mb-4 bg-light-200/50 dark:bg-dark-900 overflow-hidden">
        {/* We use dummy images or a fallback if image is missing */}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {product.isBestSeller && (
          <div className="absolute top-2 left-2 bg-gold-500 text-white text-[10px] tracking-wider uppercase px-2 py-1">
            Best Seller
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-dark-800/60 dark:text-light-200/60 uppercase mb-1">
            {product.category === 'decant' ? 'Decant' : 'Full Bottle'}
          </p>
          <h4 className="font-serif text-lg text-dark-900 dark:text-light-100 line-clamp-1">
            {product.name}
          </h4>
        </div>

        {/* Sizes */}
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button 
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`text-[10px] border px-2 py-1 transition-colors ${
                selectedSize === size 
                  ? 'border-gold-500 bg-gold-500 text-white' 
                  : 'border-light-200 dark:border-dark-800 text-dark-800/70 dark:text-light-200/70 hover:border-gold-500/50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-light-200 dark:border-dark-800 mt-2">
          <p className="font-medium text-dark-900 dark:text-light-100">
            {getPrice(selectedSize)}
          </p>

        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
