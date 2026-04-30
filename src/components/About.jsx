import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="tentang" className="py-24 bg-light-200/30 dark:bg-dark-900/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-light-200 dark:bg-dark-800 z-10 flex flex-col items-center justify-center border border-light-200 dark:border-dark-800">
                {/* Minimal graphic matching design */}
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-gold-500/30 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
                  <div className="w-16 h-16 border-2 border-gold-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full" />
                  </div>
                  {/* Crosshairs */}
                  <div className="absolute w-full h-[1px] bg-gold-500/20 top-1/2 -translate-y-1/2" />
                  <div className="absolute h-full w-[1px] bg-gold-500/20 left-1/2 -translate-x-1/2" />
                </div>
                <div className="mt-8 text-center">
                  <p className="font-serif italic text-gold-500 mb-1">Pure Essence</p>
                  <p className="text-[10px] tracking-[0.2em] text-dark-800/40 dark:text-light-200/40">EST. 2025</p>
                </div>
              </div>
              {/* Background decorative square */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gold-600/20 dark:bg-gold-600/10 z-0" />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h3 className="text-sm tracking-[0.2em] text-dark-800/60 dark:text-light-200/60 uppercase">
              Brand Story
            </h3>
            <h2 className="text-3xl md:text-5xl font-serif text-dark-900 dark:text-light-100">
              Tentang Kami
            </h2>
            <div className="space-y-4 text-dark-800/80 dark:text-light-200/80 leading-relaxed">
              <p>
                Di SYAM, kami percaya bahwa kemewahan aroma seharusnya dapat diakses oleh siapa saja. Kami mengkurasi koleksi parfum terbaik dari seluruh dunia untuk membantu Anda menemukan jati diri melalui wewangian.
              </p>
              <p>
                Melalui sistem decant, Anda dapat mencoba berbagai aroma eksklusif tanpa harus membeli botol penuh secara langsung. Kami menjamin keaslian 100% pada setiap tetes yang kami pindahkan ke wadah steril kami.
              </p>
            </div>
            
            <div className="pt-6">
              <a 
                href="#"
                className="inline-flex items-center text-sm tracking-wider uppercase border border-dark-900 dark:border-light-100 px-6 py-3 hover:bg-dark-900 hover:text-white dark:hover:bg-light-100 dark:hover:text-dark-900 transition-colors duration-300"
              >
                Selengkapnya
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
