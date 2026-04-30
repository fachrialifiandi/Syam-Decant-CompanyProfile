import { motion } from 'framer-motion';
import { FlaskConical, Lightbulb } from 'lucide-react';

const Education = () => {
  return (
    <section id="edukasi" className="py-24 bg-[#111111] dark:bg-dark-900 text-light-100 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-sm tracking-[0.2em] text-gold-500 uppercase mb-2">
            Knowledge Center
          </h3>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Edukasi Parfum
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#1a1a1a] dark:bg-dark-800 p-8 flex gap-6"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                <FlaskConical size={24} className="text-gold-500" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-3 text-white">Apa itu Decant?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Decant adalah proses memindahkan cairan parfum dari botol asli (original) ke botol yang lebih kecil tanpa mengubah komposisi aslinya. Ini adalah cara cerdas untuk mencoba parfum mahal dengan harga ekonomis.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] dark:bg-dark-800 p-8 flex gap-6"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20">
                <Lightbulb size={24} className="text-gold-500" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-serif mb-3 text-white">Cara Memilih Parfum?</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Pahami jenis aroma (Top, Heart, dan Base notes). Kenali aktivitas dan kepribadian Anda untuk menentukan apakah aroma Floral, Oriental, Woody, atau Fresh yang paling sesuai.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
