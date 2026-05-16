import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Education from './components/Education';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Hero />
      <Features />
      <ProductGrid searchQuery={searchQuery} />
      <About />
      <Education />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
