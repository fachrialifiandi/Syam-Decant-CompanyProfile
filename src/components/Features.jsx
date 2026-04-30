import { motion } from 'framer-motion';
import { features } from '../data/products';
import { FlaskConical, Box, Star } from 'lucide-react';

const iconMap = {
  FlaskConical: <FlaskConical size={32} className="text-gold-500 mb-6" strokeWidth={1.5} />,
  Box: <Box size={32} className="text-gold-500 mb-6" strokeWidth={1.5} />,
  Star: <Star size={32} className="text-gold-500 mb-6" strokeWidth={1.5} />
};

const Features = () => {
  return (
    <section className="py-20 bg-light-200/50 dark:bg-dark-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#111111] dark:bg-dark-800 p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>
              <h4 className="text-xl font-serif text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
