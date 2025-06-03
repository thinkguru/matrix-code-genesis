
const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl font-bold matrix-glow">
                <span className="text-matrix-green">[</span>
                What is MATRIX HACK?
                <span className="text-matrix-green">]</span>
              </h2>
              <div className="w-20 h-1 bg-matrix-green"></div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-matrix-green/90">
              <p>
                Matrix Hack is a <span className="text-matrix-green font-bold">48-hour immersive coding experience</span> where developers, designers, and disruptors from around the world enter the digital void to solve real-world problems.
              </p>
              
              <p>
                Whether you're a <span className="text-matrix-green-light">rebel coder</span> or a <span className="text-matrix-green-light">first-time hacker</span>, this is your call to the Matrix. Build the future, break the system, and emerge as a digital warrior.
              </p>

              <div className="bg-matrix-black/50 border border-matrix-green/30 rounded-lg p-4 mt-6">
                <div className="font-matrix text-sm">
                  <div className="text-matrix-green-light mb-2">
                    <span className="text-matrix-green">system@matrix:~$</span> grep -r "participants" ./hackathon
                  </div>
                  <div className="text-matrix-green">
                    &gt; 500+ hackers expected
                  </div>
                  <div className="text-matrix-green">
                    &gt; 50+ mentors online  
                  </div>
                  <div className="text-matrix-green">
                    &gt; $50K+ in prizes
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-lg border-2 border-matrix-green matrix-glow">
              {/* Animated grid background */}
              <div className="absolute inset-0 bg-matrix-black">
                <div className="grid grid-cols-8 grid-rows-8 h-full w-full gap-1 p-4">
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-matrix-green/20 rounded-sm animate-pulse"
                      style={{
                        animationDelay: `${(i * 50)}ms`,
                        animationDuration: `${2 + Math.random()}s`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Overlay content */}
              <div className="absolute inset-0 flex items-center justify-center bg-matrix-black/50">
                <div className="text-center space-y-4">
                  <div className="text-6xl matrix-glow animate-pulse">
                    <span className="text-matrix-green">[</span>
                    <span className="text-matrix-green-light">01</span>
                    <span className="text-matrix-green">]</span>
                  </div>
                  <div className="font-matrix text-matrix-green">
                    ENTER_THE_MATRIX.exe
                  </div>
                  <div className="w-full bg-matrix-black border border-matrix-green rounded">
                    <div className="h-2 bg-matrix-green animate-pulse" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-xs text-matrix-green/70 font-matrix">
                    Loading rebellion protocols...
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-matrix-green animate-spin"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-matrix-green animate-ping"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
