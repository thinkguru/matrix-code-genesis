
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQsSection = () => {
  const faqs = [
    {
      question: "Who can participate in Matrix Hack?",
      answer: "Anyone with a passion for technology! Whether you're a student, professional developer, designer, or just someone curious about coding, you're welcome to join the rebellion. All skill levels are encouraged to participate."
    },
    {
      question: "What tech stacks and programming languages are allowed?",
      answer: "All technologies are welcome in the Matrix! From Web3 and blockchain to AI/ML, mobile development, web applications, IoT, and beyond. Use whatever tools help you build your vision - Python, JavaScript, React, blockchain platforms, or any emerging technologies."
    },
    {
      question: "Can I participate alone or do I need a team?",
      answer: "Both options are available! You can hack solo like a lone wolf, or form a team of up to 4 members. We'll have team formation sessions during the opening ceremony to help you find like-minded rebels."
    },
    {
      question: "Is there a registration fee?",
      answer: "No! Matrix Hack is completely free to participate. We believe in making innovation accessible to everyone. Food, drinks, and swag are all provided during the event."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "Bring your laptop, chargers, any hardware you want to hack with, and most importantly - your creativity! We'll provide Wi-Fi, power outlets, food, drinks, and the digital infrastructure you need to build amazing projects."
    },
    {
      question: "How are projects judged and what are the criteria?",
      answer: "Projects are evaluated by industry experts on: Innovation & Creativity (30%), Technical Implementation (25%), Impact & Usefulness (25%), and Presentation Quality (20%). We value both technical excellence and real-world problem solving."
    },
    {
      question: "Are there any age restrictions?",
      answer: "Participants must be at least 16 years old. Those under 18 will need parental consent. We welcome university students, recent graduates, and professionals of all career stages."
    },
    {
      question: "Will there be mentors and workshops available?",
      answer: "Absolutely! We have 50+ industry mentors from top tech companies ready to guide you. Plus workshops on AI/ML, blockchain, UI/UX design, pitch presentation, and more throughout the 48 hours."
    },
    {
      question: "What happens to intellectual property and project ownership?",
      answer: "You own 100% of your project and any IP you create during the hackathon. Matrix Hack claims no ownership rights. We only ask for permission to showcase your work in our portfolio and future promotional materials."
    },
    {
      question: "Can I start working on my project before the hackathon begins?",
      answer: "No pre-existing code or projects allowed! All development must happen during the official 48-hour window. However, you can research ideas, form teams, and plan your approach beforehand."
    }
  ];

  return (
    <section id="faqs" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold matrix-glow mb-4">
            <span className="text-matrix-green">[</span>
            Frequently Asked Questions
            <span className="text-matrix-green">]</span>
          </h2>
          <div className="w-32 h-1 bg-matrix-green mx-auto mb-6"></div>
          <p className="text-xl text-matrix-green/80 max-w-2xl mx-auto">
            Consult the Oracle for answers to all your Matrix-related queries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Terminal header */}
          <div className="bg-matrix-black border border-matrix-green rounded-t-lg p-4 font-matrix text-sm">
            <div className="text-matrix-green-light">
              <span className="text-matrix-green">oracle@matrix:~$</span> query --database=faq --interactive
            </div>
            <div className="text-matrix-green">
              &gt; Loading knowledge base...
            </div>
            <div className="text-matrix-green">
              &gt; {faqs.length} entries found
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-matrix-black/50 border-x border-b border-matrix-green rounded-b-lg">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-matrix-green/30 last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                    <div className="flex items-center space-x-4 w-full">
                      <span className="text-matrix-green font-matrix text-sm">
                        [{String(index + 1).padStart(2, '0')}]
                      </span>
                      <span className="text-matrix-green text-lg font-semibold group-hover:matrix-glow transition-all duration-300 flex-1">
                        {faq.question}
                      </span>
                      <div className="text-matrix-green group-hover:text-matrix-green-light transition-colors duration-300">
                        <span className="font-matrix text-lg">[+]</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-4">
                    <div className="pl-12">
                      {/* Terminal-style answer */}
                      <div className="bg-matrix-black border border-matrix-green/50 rounded p-4 font-matrix text-sm mb-4">
                        <div className="text-matrix-green-light mb-2">
                          <span className="text-matrix-green">answer@oracle:~$</span> display --query={index + 1}
                        </div>
                        <div className="text-matrix-green">
                          &gt; Processing response...
                        </div>
                      </div>
                      
                      <div className="text-matrix-green/90 leading-relaxed pl-4 border-l-2 border-matrix-green/30">
                        {faq.answer}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom terminal prompt */}
          <div className="bg-matrix-black border border-matrix-green rounded-lg p-4 mt-8 font-matrix text-sm">
            <div className="text-matrix-green-light mb-2">
              <span className="text-matrix-green">help@matrix:~$</span> contact --support
            </div>
            <div className="text-matrix-green">
              &gt; Still have questions? Reach out to our support team
            </div>
            <div className="text-matrix-green">
              &gt; Email: oracle@matrixhack.dev
            </div>
            <div className="text-matrix-green">
              &gt; Response time: &lt; 24 hours
            </div>
            <div className="text-matrix-green">
              &gt; Status: Always here to help <span className="animate-blink">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
