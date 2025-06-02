
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphic backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold matrix-glow">
              <span className="text-matrix-green">[</span>
              <span className="glitch-text hover:animate-glitch">MATRIX HACK</span>
              <span className="text-matrix-green">]</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-matrix-green hover:text-matrix-green-light transition-colors duration-200 glitch-text relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-matrix-green transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            onClick={() => scrollToSection('#register')}
            className="bg-matrix-black border-2 border-matrix-green text-matrix-green hover:bg-matrix-green hover:text-matrix-black transition-all duration-300 animate-pulse-green font-matrix"
          >
            <span className="glitch-text">REGISTER NOW</span>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-matrix-green">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-full h-0.5 bg-matrix-green mb-1"></span>
              <span className="block w-full h-0.5 bg-matrix-green mb-1"></span>
              <span className="block w-full h-0.5 bg-matrix-green"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
