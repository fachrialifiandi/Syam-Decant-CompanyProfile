import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-sm tracking-[0.2em] text-dark-800/60 dark:text-light-200/60 uppercase">
              Essence of Elegance
            </h3>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-dark-900 dark:text-light-100 leading-tight">
              Temukan Aroma <br/> Khas Anda
            </h1>
            <p className="text-lg text-dark-800/80 dark:text-light-200/80 max-w-md leading-relaxed">
              Parfum decant premium dan botol original untuk pengalaman wewangian yang mewah dan terjangkau.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#koleksi"
                className="inline-flex justify-center items-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                Jelajahi Koleksi
              </a>
            </div>
          </motion.div>

          {/* Visual Content - Minimalist Bottle SVG */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-96 sm:w-80 sm:h-[30rem] border border-gold-500/20 dark:border-gold-500/40 rounded-t-[6rem] flex items-center justify-center bg-light-200/30 dark:bg-dark-800/30">
              {/* Bottle Outline SVG */}
              <svg 
                viewBox="0 0 100 150" 
                className="w-32 h-48 sm:w-40 sm:h-60 text-gold-500 stroke-current stroke-[1.5]"
                fill="none"
              >
                <path d="M40 20 L40 10 C40 4.477 44.477 0 50 0 C55.523 0 60 4.477 60 10 L60 20 Z" />
                <rect x="25" y="20" width="50" height="130" rx="5" />
                <line x1="35" y1="70" x2="65" y2="70" strokeDasharray="2 4" />
                <line x1="35" y1="85" x2="65" y2="85" strokeDasharray="2 4" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
