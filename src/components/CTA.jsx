import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-light-100 dark:bg-dark-900 border-b border-light-200 dark:border-dark-800">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-dark-900 dark:text-light-100 mb-6">
            Mulai Perjalanan Wangi Anda Hari Ini
          </h2>
          <p className="text-dark-800/80 dark:text-light-200/80 mb-10 text-lg">
            Konsultasikan pilihan aroma yang paling cocok untuk Anda dengan tim ahli kami.
          </p>
          <a
            href="https://wa.me/628561119531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium tracking-wide"
          >
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/628561119531"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 transition-transform duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
};

export default CTA;
