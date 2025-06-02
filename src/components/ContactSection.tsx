
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    console.log('Message sent:', { name, email, message });
  };

  const contactMethods = [
    {
      type: 'Email',
      value: 'oracle@matrixhack.dev',
      description: 'Direct line to the Oracle',
      icon: '📧',
      link: 'mailto:oracle@matrixhack.dev'
    },
    {
      type: 'Discord',
      value: 'Join the Hackerverse',
      description: 'Real-time community chat',
      icon: '💬',
      link: '#'
    },
    {
      type: 'Twitter',
      value: '@MatrixHack2025',
      description: 'Latest updates and news',
      icon: '🐦',
      link: '#'
    },
    {
      type: 'GitHub',
      value: 'github.com/matrix-hack',
      description: 'Open source resources',
      icon: '⚡',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Speak to the Oracle
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            Have questions? Need guidance? The Oracle is always listening. Reach out through the digital void.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left side - Contact Methods */}
          <div className="space-y-8">
            {/* Terminal window */}
            <div className="bg-matrix-black border border-matrix-green rounded-lg">
              {/* Terminal header */}
              <div className="border-b border-matrix-green/30 p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 font-matrix text-matrix-green text-sm">
                    oracle@matrix:/communication$
                  </span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-matrix text-sm">
                <div className="text-matrix-green-light mb-4">
                  <span className="text-matrix-green">contact@matrix:~$</span> ls -la /communication/channels
                </div>
                <div className="space-y-2 text-matrix-green">
                  <div>drwxr-xr-x 4 oracle matrix 4096 Mar 15 10:30 .</div>
                  <div>drwxr-xr-x 8 oracle matrix 4096 Mar 15 10:30 ..</div>
                  <div>-rw-r--r-- 1 oracle matrix 1337 Mar 15 10:30 email.contact</div>
                  <div>-rw-r--r-- 1 oracle matrix 2048 Mar 15 10:30 discord.chat</div>
                  <div>-rw-r--r-- 1 oracle matrix 1024 Mar 15 10:30 social.links</div>
                  <div>-rw-r--r-- 1 oracle matrix 4096 Mar 15 10:30 github.repo</div>
                </div>
                <div className="text-matrix-green mt-4">
                  > 4 communication channels available
                </div>
                <div className="text-matrix-green">
                  > Choose your preferred method <span className="animate-blink">█</span>
                </div>
              </div>
            </div>

            {/* Contact methods grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="bg-matrix-black/50 border border-matrix-green/50 rounded-lg p-4 hover:border-matrix-green transition-all duration-300 hover:shadow-matrix-glow-sm group cursor-pointer"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-matrix-green font-bold mb-1">
                        {method.type}
                      </div>
                      <div className="text-matrix-green-light text-sm mb-1 font-matrix">
                        {method.value}
                      </div>
                      <div className="text-matrix-green/70 text-xs">
                        {method.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency contact */}
            <div className="bg-matrix-black/30 border border-matrix-green/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-matrix-green matrix-glow mb-4">
                Emergency Protocol
              </h3>
              <div className="font-matrix text-sm space-y-2 text-matrix-green">
                <div>
                  <span className="text-matrix-green-light">During Event:</span> Use Discord for immediate assistance
                </div>
                <div>
                  <span className="text-matrix-green-light">Technical Issues:</span> GitHub Issues or Email
                </div>
                <div>
                  <span className="text-matrix-green-light">Media Inquiries:</span> press@matrixhack.dev
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-matrix-black/50 border-2 border-matrix-green rounded-lg p-8">
            {submitted ? (
              <div className="text-center">
                <div className="text-6xl mb-6 animate-pulse">📨</div>
                <h3 className="text-2xl font-bold text-matrix-green matrix-glow mb-4">
                  Message Transmitted
                </h3>
                <div className="bg-matrix-black border border-matrix-green/50 rounded p-4 font-matrix text-sm text-left">
                  <div className="text-matrix-green-light mb-2">
                    <span className="text-matrix-green">transmission@oracle:~$</span> status
                  </div>
                  <div className="text-matrix-green">
                    > Message delivered successfully ✓
                  </div>
                  <div className="text-matrix-green">
                    > Expected response: &lt; 24 hours
                  </div>
                  <div className="text-matrix-green">
                    > The Oracle will reach out soon
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="font-matrix text-sm text-matrix-green-light mb-6">
                  <span className="text-matrix-green">message@oracle:~$</span> compose --interactive
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-matrix-green font-matrix mb-2">
                      > Name:
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="terminal-input w-full px-4 py-3 rounded"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-matrix-green font-matrix mb-2">
                      > Email:
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="terminal-input w-full px-4 py-3 rounded"
                      placeholder="your.email@domain.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-matrix-green font-matrix mb-2">
                      > Message:
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="terminal-input w-full px-4 py-3 rounded h-32 resize-none"
                      placeholder="Speak your truth to the Oracle..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-matrix-green text-matrix-black hover:bg-matrix-green-light transition-all duration-300 transform hover:scale-105 shadow-matrix-glow-lg font-matrix text-lg py-4"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-matrix-black border-t-transparent rounded-full animate-spin"></div>
                        <span>Transmitting...</span>
                      </div>
                    ) : (
                      <span className="glitch-text">SEND MESSAGE</span>
                    )}
                  </Button>

                  {/* Terminal response */}
                  <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
                    <div className="text-matrix-green">
                      > Ready to transmit message
                    </div>
                    <div className="text-matrix-green">
                      > The Oracle is listening...
                    </div>
                    <div className="text-matrix-green">
                      > <span className="animate-blink">█</span>
                    </div>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
