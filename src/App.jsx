import { useEffect, useState } from 'react';
import Cart from './components/Cart.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import ScrollUp from './components/ScrollUp.jsx';
import Featured from './sections/Featured.jsx';
import Home from './sections/Home.jsx';
import NewArrivals from './sections/NewArrivals.jsx';
import Newsletter from './sections/Newsletter.jsx';
import Products from './sections/Products.jsx';
import Story from './sections/Story.jsx';
import Testimonial from './sections/Testimonial.jsx';

const sectionIds = ['home', 'featured', 'products', 'new'];

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    return localStorage.getItem('selected-theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('selected-theme', isDarkTheme ? 'dark' : 'light');
    localStorage.setItem('selected-icon', isDarkTheme ? 'bx bx-moon' : 'bx bx-sun');
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderScrolled(scrollY >= 50);
      setIsScrollVisible(scrollY >= 350);

      const currentSection = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return false;

        const sectionTop = section.offsetTop - 58;
        return scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header
        activeSection={activeSection}
        isDarkTheme={isDarkTheme}
        isMenuOpen={isMenuOpen}
        isScrolled={isHeaderScrolled}
        onCartOpen={() => setIsCartOpen(true)}
        onMenuClose={() => setIsMenuOpen(false)}
        onMenuOpen={() => setIsMenuOpen(true)}
        onThemeToggle={() => setIsDarkTheme((current) => !current)}
      />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className="main">
        <Home />
        <Featured />
        <Story />
        <Products />
        <Testimonial />
        <NewArrivals />
        <Newsletter />
      </main>

      <Footer />
      <ScrollUp isVisible={isScrollVisible} />
    </>
  );
}

export default App;
