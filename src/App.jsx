import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import About from './components/About';
import Education from './components/Education';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <ProductGrid />
      <About />
      <Education />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
