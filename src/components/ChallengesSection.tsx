
import { useState } from 'react';

const ChallengesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const challenges = [
    {
      id: 1,
      title: "Crack the Mainframe",
      description: "Build a tool that decentralizes identity verification using blockchain technology. Break free from centralized systems.",
      difficulty: "Hard",
      difficultyColor: "text-red-400",
      tag: "BLOCKCHAIN",
      reward: "$15,000"
    },
    {
      id: 2,
      title: "Neural Network Breach",
      description: "Create an AI-powered solution that can detect and prevent deepfake content in real-time communication platforms.",
      difficulty: "Medium",
      difficultyColor: "text-yellow-400",
      tag: "AI/ML",
      reward: "$10,000"
    },
    {
      id: 3,
      title: "Quantum Cipher",
      description: "Develop a quantum-resistant encryption protocol that can secure data in the post-quantum computing era.",
      difficulty: "Hard",
      difficultyColor: "text-red-400",
      tag: "CRYPTOGRAPHY",
      reward: "$20,000"
    },
    {
      id: 4,
      title: "Digital Rebellion",
      description: "Design a decentralized social platform that gives users complete control over their data and digital identity.",
      difficulty: "Easy",
      difficultyColor: "text-green-400",
      tag: "WEB3",
      reward: "$8,000"
    }
  ];

  return (
    <section id="challenges" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Hacking the Future
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            Choose your mission and break the code. Each challenge is a gateway to revolution.
          </p>
        </div>

        {/* Challenge Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className={`group relative bg-matrix-black/50 border-2 border-matrix-green/30 rounded-lg p-6 transition-all duration-500 hover:border-matrix-green hover:shadow-matrix-glow-lg transform hover:-translate-y-2 cursor-pointer ${
                hoveredCard === index ? 'bg-matrix-green/5' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-matrix-green font-matrix text-sm">
                    [{String(challenge.id).padStart(2, '0')}]
                  </span>
                  <span className="bg-matrix-green/20 text-matrix-green text-xs px-2 py-1 rounded border border-matrix-green/50 font-matrix">
                    {challenge.tag}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-matrix-green-light font-bold text-lg">
                    {challenge.reward}
                  </div>
                  <div className={`text-sm font-matrix ${challenge.difficultyColor}`}>
                    🧠 {challenge.difficulty}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-matrix-green matrix-glow mb-4 group-hover:animate-glitch">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="text-matrix-green/80 leading-relaxed mb-6">
                {challenge.description}
              </p>

              {/* Terminal-style progress indicator */}
              <div className="bg-matrix-black border border-matrix-green/50 rounded p-3 font-matrix text-sm">
                <div className="text-matrix-green-light mb-1">
                  <span className="text-matrix-green">challenge@matrix:~$</span> status --verbose
                </div>
                <div className="text-matrix-green">
                  > Difficulty: <span className={challenge.difficultyColor}>{challenge.difficulty}</span>
                </div>
                <div className="text-matrix-green">
                  > Teams registered: {Math.floor(Math.random() * 50) + 10}
                </div>
                <div className="text-matrix-green">
                  > Time remaining: 48:00:00
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-matrix-green/5 rounded-lg transition-opacity duration-300 ${
                hoveredCard === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Corner decorations */}
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-matrix-green opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-matrix-green opacity-50"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-matrix-black/70 border border-matrix-green rounded-lg p-6 max-w-2xl mx-auto">
            <div className="font-matrix text-matrix-green mb-2">
              <span className="text-matrix-green-light">system@matrix:~$</span> echo "Ready to accept mission?"
            </div>
            <div className="text-matrix-green text-lg">
              > Choose your path. The Matrix awaits your code.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
