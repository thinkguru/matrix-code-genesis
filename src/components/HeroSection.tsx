
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Decode. Disrupt. Dominate.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    // Blinking cursor
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Headline with Typewriter Effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="matrix-glow glitch-text">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </span>
        </h1>

        {/* Subheadline */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-80">
          <span className="text-matrix-green-light">Welcome to </span>
          <span className="matrix-glow font-bold">MATRIX HACK 2025</span>
          <span className="text-matrix-green-light"> – Enter the Grid</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('#register')}
            size="lg"
            className="bg-matrix-green text-matrix-black hover:bg-matrix-green-light transition-all duration-300 transform hover:scale-105 shadow-matrix-glow-lg font-matrix text-lg px-8 py-4"
          >
            <span className="glitch-text">REGISTER NOW</span>
          </Button>
          
          <Button 
            onClick={() => scrollToSection('#challenges')}
            variant="outline"
            size="lg"
            className="border-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 transition-all duration-300 transform hover:scale-105 font-matrix text-lg px-8 py-4"
          >
            <span className="glitch-text">VIEW CHALLENGES</span>
          </Button>
        </div>

        {/* Terminal-style prompt */}
        <div className="mt-12 text-left max-w-2xl mx-auto">
          <div className="bg-matrix-black/50 border border-matrix-green rounded-lg p-4 font-matrix text-sm">
            <div className="text-matrix-green-light mb-2">
              <span className="text-matrix-green">user@matrix:~$</span> hackathon --start
            </div>
            <div className="text-matrix-green">
              &gt; Initializing Matrix Protocol...
            </div>
            <div className="text-matrix-green">
              &gt; 48 hours to change the world
            </div>
            <div className="text-matrix-green">
              &gt; Ready to jack in? 
              <span className="animate-blink">█</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles/glitch effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-matrix-green animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
