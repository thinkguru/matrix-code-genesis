
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    github: '',
    experience: 'beginner'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    console.log('Registration submitted:', formData);
  };

  if (submitted) {
    return (
      <section id="register" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-matrix-black/70 border-2 border-matrix-green rounded-lg p-8 matrix-glow">
              <div className="text-6xl mb-6 animate-pulse">✅</div>
              <h2 className="text-3xl font-bold text-matrix-green matrix-glow mb-4">
                Welcome to the Matrix
              </h2>
              <div className="bg-matrix-black border border-matrix-green/50 rounded p-4 font-matrix text-left">
                <div className="text-matrix-green-light mb-2">
                  <span className="text-matrix-green">system@matrix:~$</span> registration.status
                </div>
                <div className="text-matrix-green">
                  > Registration successful ✓
                </div>
                <div className="text-matrix-green">
                  > User: {formData.name} added to grid
                </div>
                <div className="text-matrix-green">
                  > Confirmation sent to: {formData.email}
                </div>
                <div className="text-matrix-green">
                  > Status: Ready to jack in
                </div>
              </div>
              <p className="text-matrix-green/80 mt-4">
                Check your email for further instructions. The revolution begins soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Enter the Matrix
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            Fill the form, choose your reality, and start hacking. The red pill awaits.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left side - Terminal Info */}
          <div className="space-y-6">
            <div className="bg-matrix-black border border-matrix-green rounded-lg p-6">
              <div className="font-matrix text-sm">
                <div className="text-matrix-green-light mb-4">
                  <span className="text-matrix-green">registration@matrix:~$</span> info --details
                </div>
                <div className="space-y-2 text-matrix-green">
                  <div>> Event: Matrix Hack 2025</div>
                  <div>> Duration: 48 hours</div>
                  <div>> Location: Digital Grid</div>
                  <div>> Team size: 1-4 members</div>
                  <div>> Skills: All levels welcome</div>
                  <div>> Registration fee: $0.00</div>
                  <div>> Spots remaining: 47/500</div>
                </div>
              </div>
            </div>

            <div className="bg-matrix-black/50 border border-matrix-green/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-matrix-green matrix-glow mb-4">
                What to Expect
              </h3>
              <div className="space-y-3 text-matrix-green/80">
                <div className="flex items-start space-x-2">
                  <span className="text-matrix-green mt-1">></span>
                  <span>48 hours of intense coding and innovation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-matrix-green mt-1">></span>
                  <span>Access to mentors and industry experts</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-matrix-green mt-1">></span>
                  <span>Workshops on cutting-edge technologies</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-matrix-green mt-1">></span>
                  <span>Networking with fellow rebels</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-matrix-green mt-1">></span>
                  <span>$68K+ in prizes and recognition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Registration Form */}
          <div className="bg-matrix-black/50 border-2 border-matrix-green rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Terminal header */}
              <div className="font-matrix text-sm text-matrix-green-light mb-6">
                <span className="text-matrix-green">user@matrix:~$</span> register --interactive
              </div>

              {/* Name field */}
              <div>
                <label className="block text-matrix-green font-matrix mb-2">
                  &gt; Enter your name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="terminal-input w-full px-4 py-3 rounded"
                  placeholder="Neo Anderson"
                  required
                />
              </div>

              {/* Email field */}
              <div>
                <label className="block text-matrix-green font-matrix mb-2">
                  &gt; Enter your email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="terminal-input w-full px-4 py-3 rounded"
                  placeholder="neo@thematrix.com"
                  required
                />
              </div>

              {/* Team field */}
              <div>
                <label className="block text-matrix-green font-matrix mb-2">
                  &gt; Team name (optional):
                </label>
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  className="terminal-input w-full px-4 py-3 rounded"
                  placeholder="The Resistance"
                />
              </div>

              {/* GitHub field */}
              <div>
                <label className="block text-matrix-green font-matrix mb-2">
                  &gt; GitHub/Portfolio URL:
                </label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="terminal-input w-full px-4 py-3 rounded"
                  placeholder="https://github.com/neo"
                />
              </div>

              {/* Experience level */}
              <div>
                <label className="block text-matrix-green font-matrix mb-2">
                  &gt; Experience level:
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="terminal-input w-full px-4 py-3 rounded"
                >
                  <option value="beginner">Beginner (Taking the red pill)</option>
                  <option value="intermediate">Intermediate (Learning the Matrix)</option>
                  <option value="advanced">Advanced (Bending the spoon)</option>
                  <option value="expert">Expert (The One)</option>
                </select>
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-matrix-green text-matrix-black hover:bg-matrix-green-light transition-all duration-300 transform hover:scale-105 shadow-matrix-glow-lg font-matrix text-lg py-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-matrix-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Connecting to the Matrix...</span>
                  </div>
                ) : (
                  <span className="glitch-text">JACK IN NOW</span>
                )}
              </Button>

              {/* Terminal response */}
              <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
                <div className="text-matrix-green">
                  &gt; Waiting for user input...
                </div>
                <div className="text-matrix-green">
                  &gt; Choose the red pill and enter the rebellion
                </div>
                <div className="text-matrix-green">
                  &gt; <span className="animate-blink">█</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
