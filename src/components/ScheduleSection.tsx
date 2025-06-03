
const ScheduleSection = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "March 15, 2025",
      events: [
        { time: "09:00", title: "Registration & Check-in", description: "Welcome to the Matrix" },
        { time: "10:00", title: "Opening Ceremony", description: "Kickoff & challenge briefing" },
        { time: "11:00", title: "Team Formation", description: "Find your crew or go solo" },
        { time: "12:00", title: "Hacking Begins", description: "Enter the Grid" },
        { time: "18:00", title: "Dinner Break", description: "Fuel for the mind" },
        { time: "20:00", title: "Mentor Office Hours", description: "Get guidance from the Oracle" }
      ]
    },
    {
      day: "Day 2", 
      date: "March 16, 2025",
      events: [
        { time: "08:00", title: "Breakfast", description: "Morning fuel" },
        { time: "10:00", title: "Workshop: AI/ML", description: "Neural network mastery" },
        { time: "14:00", title: "Workshop: Blockchain", description: "Decentralized revolution" },
        { time: "16:00", title: "Mentor Sessions", description: "1-on-1 guidance" },
        { time: "20:00", title: "Late Night Coding", description: "The final push" },
        { time: "00:00", title: "Midnight Energy", description: "Coffee & snacks" }
      ]
    },
    {
      day: "Day 3",
      date: "March 17, 2025", 
      events: [
        { time: "08:00", title: "Final Sprint", description: "Last chance to code" },
        { time: "12:00", title: "Submission Deadline", description: "Upload your rebellion" },
        { time: "13:00", title: "Demo Presentations", description: "Show your creation" },
        { time: "15:00", title: "Judging Period", description: "The Oracle decides" },
        { time: "17:00", title: "Awards Ceremony", description: "Crown the champions" },
        { time: "18:00", title: "Closing & Networking", description: "Exit the Matrix together" }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Timeline to Transcendence
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            48 hours to change the world. Every moment counts in the Matrix.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-matrix-green via-matrix-green-light to-matrix-green hidden md:block"></div>

          {/* Schedule Days */}
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-matrix-black border-2 border-matrix-green rounded-lg px-6 py-3 matrix-glow relative z-10">
                    <h3 className="text-2xl font-bold text-matrix-green text-center">
                      {day.day}
                    </h3>
                    <p className="text-matrix-green-light text-center font-matrix text-sm">
                      {day.date}
                    </p>
                  </div>
                </div>

                {/* Events */}
                <div className="grid md:grid-cols-2 gap-6">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`relative ${
                        eventIndex % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="hidden md:block absolute top-4 w-4 h-4 bg-matrix-green rounded-full border-2 border-matrix-black shadow-matrix-glow-sm" 
                           style={{
                             [eventIndex % 2 === 0 ? 'right' : 'left']: '-2.5rem'
                           }}>
                      </div>

                      {/* Event Card */}
                      <div className="bg-matrix-black/50 border border-matrix-green/50 rounded-lg p-4 hover:border-matrix-green transition-all duration-300 hover:shadow-matrix-glow-sm group">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-matrix text-matrix-green-light text-lg font-bold">
                            {event.time}
                          </span>
                          <span className="text-xs text-matrix-green/60 font-matrix">
                            [{String(eventIndex + 1).padStart(2, '0')}]
                          </span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-matrix-green mb-2 group-hover:matrix-glow transition-all duration-300">
                          {event.title}
                        </h4>
                        
                        <p className="text-matrix-green/80 text-sm">
                          {event.description}
                        </p>

                        {/* Terminal-style indicator */}
                        <div className="mt-3 font-matrix text-xs text-matrix-green/60">
                          <span className="text-matrix-green">$</span> schedule.exe --event={eventIndex + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-matrix-black/70 border border-matrix-green rounded-lg p-6 max-w-2xl mx-auto">
            <div className="font-matrix text-matrix-green mb-2">
              <span className="text-matrix-green-light">timeline@matrix:~$</span> countdown --start
            </div>
            <div className="text-matrix-green text-lg">
              &gt; 48:00:00 remaining until submission
            </div>
            <div className="text-matrix-green">
              &gt; Time is an illusion. Code is reality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
