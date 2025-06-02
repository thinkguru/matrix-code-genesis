
const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Challenges', href: '#challenges' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Register', href: '#register' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'Discord', icon: '💬', href: '#' },
    { name: 'LinkedIn', icon: '💼', href: '#' }
  ];

  return (
    <footer className="relative bg-matrix-black border-t-2 border-matrix-green">
      {/* Faint matrix rain in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-matrix-green font-matrix text-xs animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left - Logo and Tagline */}
          <div className="space-y-6">
            <div>
              <div className="text-3xl font-bold matrix-glow mb-2">
                <span className="text-matrix-green">[</span>
                <span className="glitch-text">MATRIX HACK</span>
                <span className="text-matrix-green">]</span>
              </div>
              <div className="text-matrix-green-light font-matrix italic">
                "Follow the white rabbit."
              </div>
            </div>

            <div className="text-matrix-green/80 leading-relaxed">
              A 48-hour journey into the digital rebellion. Join the resistance and hack the future.
            </div>

            {/* Terminal-style info */}
            <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
              <div className="text-matrix-green-light mb-1">
                <span className="text-matrix-green">info@matrix:~$</span> system --status
              </div>
              <div className="text-matrix-green">
                > Event: March 15-17, 2025
              </div>
              <div className="text-matrix-green">
                > Status: Registration Open
              </div>
              <div className="text-matrix-green">
                > Next: Revolution
              </div>
            </div>

            <div className="text-xs text-matrix-green/60">
              © 2025 MATRIX HACK. All rights reserved.<br />
              Built with ❤️ for the rebellion.
            </div>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-matrix-green matrix-glow">
              Quick Access
            </h3>
            
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-matrix-green/80 hover:text-matrix-green-light transition-colors duration-200 font-matrix group"
                >
                  <span className="group-hover:matrix-glow">[{link.name}]</span>
                </button>
              ))}
            </div>

            {/* Terminal navigation */}
            <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
              <div className="text-matrix-green-light mb-1">
                <span className="text-matrix-green">nav@matrix:~$</span> goto --section
              </div>
              <div className="text-matrix-green">
                > Use quick links above
              </div>
              <div className="text-matrix-green">
                > Or scroll to navigate
              </div>
            </div>
          </div>

          {/* Right - Social and Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-matrix-green matrix-glow">
              Connect to the Grid
            </h3>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-matrix-black border-2 border-matrix-green/50 rounded-lg flex items-center justify-center hover:border-matrix-green hover:shadow-matrix-glow-sm transition-all duration-300 transform hover:scale-110 group"
                >
                  <span className="text-xl group-hover:animate-pulse">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="text-matrix-green font-matrix">
                <span className="text-matrix-green-light">Email:</span> oracle@matrixhack.dev
              </div>
              <div className="text-matrix-green font-matrix">
                <span className="text-matrix-green-light">Discord:</span> Join the Hackerverse
              </div>
            </div>

            {/* Emergency contact */}
            <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
              <div className="text-matrix-green-light mb-1">
                <span className="text-matrix-green">contact@matrix:~$</span> emergency --help
              </div>
              <div className="text-matrix-green">
                > 24/7 support available
              </div>
              <div className="text-matrix-green">
                > The Oracle never sleeps
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider and final message */}
        <div className="border-t border-matrix-green/30 mt-8 pt-8">
          <div className="text-center">
            <div className="bg-matrix-black border border-matrix-green/50 rounded-lg p-4 max-w-2xl mx-auto font-matrix text-sm">
              <div className="text-matrix-green-light mb-2">
                <span className="text-matrix-green">system@matrix:~$</span> echo "final_message"
              </div>
              <div className="text-matrix-green">
                > "There is no spoon. There is only code."
              </div>
              <div className="text-matrix-green">
                > Welcome to the real world, Neo.
              </div>
              <div className="text-matrix-green mt-2">
                > Ready to change everything? <span className="animate-blink">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating corner elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-matrix-green/30 animate-pulse"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-matrix-green/30 animate-pulse"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-matrix-green/30 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-matrix-green/30 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
