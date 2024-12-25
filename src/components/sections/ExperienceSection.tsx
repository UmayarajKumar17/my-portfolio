import React from 'react';
import { Terminal, Database } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const experiences = [
  {
    title: 'ML Research Intern',
    company: 'Tech Innovation Lab',
    year: '2023',
    description: 'Developed and implemented advanced machine learning algorithms for computer vision applications.',
    icon: Terminal,
  },
  {
    title: 'Data Science Intern',
    company: 'AI Solutions Corp',
    year: '2022',
    description: 'Analyzed large datasets and built predictive models using machine learning techniques.',
    icon: Database,
  },
];

const ExperienceSection = () => {
  const titleRef = useScrollReveal();
  
  return (
    <section id="experience" className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-center text-4xl font-bold animate-out transition-reveal">Experience</h2>
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => {
            const expRef = useScrollReveal({ delay: index * 200 });
            return (
              <div
                key={exp.title}
                ref={expRef}
                className="rounded-xl bg-white/5 p-6 backdrop-blur-sm animate-out transition-reveal"
              >
                <div className="flex items-center gap-4">
                  <exp.icon className="h-8 w-8 text-pink-500" />
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-gray-400">{exp.company} • {exp.year}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">{exp.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;