import { MapPin, ArrowRight, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-light-100 dark:bg-dark-900 pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold tracking-widest text-gold-500">
              SYAM
            </h2>
            <p className="font-serif italic text-dark-800/80 dark:text-light-200/80">
              Decant & Perfume
            </p>
            <p className="text-sm text-dark-800/60 dark:text-light-200/60 leading-relaxed">
              Kemewahan dalam Setiap Tetes.
            </p>
          </div>



          {/* Contact Col */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-medium text-dark-900 dark:text-light-100 uppercase mb-6">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/628561119531" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-dark-800/70 dark:text-light-200/70 hover:text-gold-500 transition-colors">
                  <MessageCircle size={18} />
                  0856 1119 531
                </a>
              </li>
              <li>
                <a href="mailto:syamdecant@gmail.com" className="flex items-center gap-3 text-sm text-dark-800/70 dark:text-light-200/70 hover:text-gold-500 transition-colors">
                  <Mail size={18} />
                  syamdecant@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Location Col */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-medium text-dark-900 dark:text-light-100 uppercase mb-6">
              Media Sosial & Lokasi
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.tiktok.com/@syamdecant67?_r=1&_t=ZS-93vqhhZfnvw" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-dark-800/70 dark:text-light-200/70 hover:text-gold-500 transition-colors">
                  <ArrowRight size={18} />
                  TikTok: @syamdecant67
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-dark-800/70 dark:text-light-200/70">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block">Karawang, Indonesia</span>
                  <span className="block mt-1 text-[10px] text-gold-500">
                    *Tersedia offline setiap hari Minggu di CFD Galuh Mas Karawang
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h4 className="text-xs tracking-[0.2em] font-medium text-dark-900 dark:text-light-100 uppercase mb-6">
              Berlangganan
            </h4>
            <p className="text-sm text-dark-800/70 dark:text-light-200/70 mb-4">
              Dapatkan info produk terbaru dan penawaran eksklusif.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full bg-transparent border-b border-light-200 dark:border-dark-800 py-2 pl-0 pr-10 text-sm text-dark-900 dark:text-light-100 focus:outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors placeholder:text-dark-800/40 dark:placeholder:text-light-200/40"
              />
              <button 
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500 hover:text-gold-600 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-light-200 dark:border-dark-800 pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-xs text-dark-800/50 dark:text-light-200/50">
            &copy; {currentYear} SYAM Decant & Perfume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
