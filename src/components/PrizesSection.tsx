
import { useState } from 'react';

const PrizesSection = () => {
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);

  const prizes = [
    {
      id: 1,
      place: "1st",
      title: "The One",
      amount: "$25,000",
      description: "The ultimate reality hacker",
      benefits: [
        "$25,000 cash prize",
        "1-year mentorship program",
        "Startup incubator access",
        "Matrix Hack trophy",
        "Lifetime VIP status"
      ],
      icon: "👑",
      glow: "shadow-yellow-400/50"
    },
    {
      id: 2,
      place: "2nd", 
      title: "The Chosen",
      amount: "$15,000",
      description: "Master of the digital realm",
      benefits: [
        "$15,000 cash prize",
        "6-month mentorship",
        "Tech conference passes",
        "Matrix Hack medal",
        "Priority access to future events"
      ],
      icon: "🥈",
      glow: "shadow-gray-400/50"
    },
    {
      id: 3,
      place: "3rd",
      title: "The Awakened", 
      amount: "$10,000",
      description: "Breaking free from the system",
      benefits: [
        "$10,000 cash prize",
        "3-month mentorship",
        "Premium software licenses",
        "Matrix Hack badge",
        "Community recognition"
      ],
      icon: "🥉",
      glow: "shadow-orange-400/50"
    }
  ];

  const specialAwards = [
    {
      title: "Best Design",
      description: "For the most visually stunning interface",
      prize: "$5,000",
      icon: "🎨"
    },
    {
      title: "Best Use of Tech",
      description: "Most innovative technology implementation", 
      prize: "$5,000",
      icon: "⚡"
    },
    {
      title: "Most Disruptive",
      description: "Breaking barriers and challenging norms",
      prize: "$5,000", 
      icon: "💥"
    },
    {
      title: "People's Choice",
      description: "Voted by fellow hackers",
      prize: "$3,000",
      icon: "❤️"
    }
  ];

  return (
    <section id="prizes" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Rewards from the System
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            The Oracle has prepared substantial rewards for those who successfully hack the Matrix.
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={prize.id}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                index === 0 ? 'md:-mt-8' : ''
              }`}
              onClick={() => setSelectedPrize(selectedPrize === prize.id ? null : prize.id)}
            >
              {/* Prize Card */}
              <div className={`bg-matrix-black/70 border-2 border-matrix-green rounded-lg p-6 text-center relative overflow-hidden transition-all duration-300 hover:border-matrix-green-light hover:shadow-matrix-glow-lg ${
                selectedPrize === prize.id ? 'border-matrix-green-light shadow-matrix-glow-lg' : ''
              }`}>
                
                {/* Background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-matrix-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Place */}
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {prize.icon}
                  </div>
                  
                  <div className="text-2xl font-bold text-matrix-green matrix-glow mb-2">
                    {prize.place} Place
                  </div>
                  
                  <h3 className="text-3xl font-bold text-matrix-green-light mb-4">
                    {prize.title}
                  </h3>
                  
                  <div className="text-4xl font-bold text-matrix-green matrix-glow mb-4">
                    {prize.amount}
                  </div>
                  
                  <p className="text-matrix-green/80 mb-6">
                    {prize.description}
                  </p>

                  {/* Expandable Benefits */}
                  <div className={`transition-all duration-300 overflow-hidden ${
                    selectedPrize === prize.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-matrix-green/30 pt-4">
                      <div className="text-left space-y-2">
                        {prize.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <span className="text-matrix-green">></span>
                            <span className="text-matrix-green/80 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Terminal prompt */}
                  <div className="bg-matrix-black border border-matrix-green/50 rounded p-2 mt-4 font-matrix text-xs text-left">
                    <div className="text-matrix-green-light">
                      <span className="text-matrix-green">prize@matrix:~$</span> claim --rank={prize.place}
                    </div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-matrix-green/50"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-matrix-green/50"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Awards */}
        <div className="bg-matrix-black/30 border border-matrix-green/50 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-matrix-green matrix-glow text-center mb-8">
            Special Recognition Awards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialAwards.map((award, index) => (
              <div key={index} className="bg-matrix-black/50 border border-matrix-green/30 rounded-lg p-4 text-center hover:border-matrix-green transition-all duration-300 hover:shadow-matrix-glow-sm group">
                <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <h4 className="text-lg font-bold text-matrix-green mb-2">
                  {award.title}
                </h4>
                <p className="text-matrix-green/70 text-sm mb-3">
                  {award.description}
                </p>
                <div className="text-xl font-bold text-matrix-green-light">
                  {award.prize}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Prize Pool */}
        <div className="text-center mt-12">
          <div className="bg-matrix-black/70 border border-matrix-green rounded-lg p-6 max-w-2xl mx-auto">
            <div className="font-matrix text-matrix-green mb-2">
              <span className="text-matrix-green-light">rewards@matrix:~$</span> calculate --total
            </div>
            <div className="text-3xl font-bold text-matrix-green matrix-glow">
              Total Prize Pool: $68,000+
            </div>
            <div className="text-matrix-green/80 mt-2">
              + Exclusive perks and recognition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
