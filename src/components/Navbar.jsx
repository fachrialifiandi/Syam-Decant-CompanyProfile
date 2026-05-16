import { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value) {
      const element = document.getElementById('koleksi');
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const navLinks = [
    { name: 'BERANDA', href: '#' },
    { name: 'KOLEKSI', href: '#koleksi' },
    { name: 'TENTANG KAMI', href: '#tentang' },
    { name: 'EDUKASI', href: '#edukasi' },
    { name: 'KONTAK', href: '#kontak' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-light-100/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold tracking-widest text-gold-500">
          SYAM
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-widest text-dark-800 dark:text-light-200 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative flex items-center">
            <div className={`overflow-hidden transition-all duration-300 ease-in-out flex items-center ${isSearchOpen ? 'w-48 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Cari parfum..."
                className="w-full bg-transparent border-b border-dark-800/30 dark:border-light-200/30 focus:border-gold-500 dark:focus:border-gold-500 text-dark-800 dark:text-light-200 focus:outline-none text-sm px-1 py-1"
              />
            </div>
            <button 
              onClick={() => {
                if (isSearchOpen) {
                  setSearchQuery('');
                }
                setIsSearchOpen(!isSearchOpen);
              }}
              className="text-dark-800 dark:text-light-200 hover:text-gold-500 transition-colors"
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>

          <button
            onClick={toggleTheme}
            className="text-dark-800 dark:text-light-200 hover:text-gold-500 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => {
              if (isSearchOpen) {
                setSearchQuery('');
              }
              setIsSearchOpen(!isSearchOpen);
            }}
            className="text-dark-800 dark:text-light-200 hover:text-gold-500 transition-colors"
          >
            {isSearchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button
            onClick={toggleTheme}
            className="text-dark-800 dark:text-light-200 hover:text-gold-500 transition-colors"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-dark-800 dark:text-light-200"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-light-100 dark:bg-dark-900 border-t border-light-200 dark:border-dark-800 shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm tracking-widest text-dark-800 dark:text-light-200 hover:text-gold-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
      
      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-light-100 dark:bg-dark-900 border-t border-light-200 dark:border-dark-800 shadow-lg py-4 px-4">
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari parfum..."
            className="w-full bg-transparent border-b border-dark-800/30 dark:border-light-200/30 focus:border-gold-500 dark:focus:border-gold-500 text-dark-800 dark:text-light-200 focus:outline-none text-sm px-2 py-2"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
