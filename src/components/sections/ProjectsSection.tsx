import React from 'react';
import ProjectCard from '../ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Image Recognition',
    description: 'Deep learning model for real-time object detection using TensorFlow and OpenCV',
    image: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Natural Language Processing Bot',
    description: 'Conversational AI bot using transformer architecture and BERT',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['Python', 'PyTorch', 'BERT', 'NLP'],
    github: 'https://github.com',
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'Real-time data visualization and prediction system for stock market analysis',
    image: 'https://images.unsplash.com/photo-1642176849879-781c8f756986',
    tags: ['React', 'Python', 'scikit-learn', 'D3.js'],
    demo: 'https://demo.com',
  },
];

const ProjectsSection = () => {
  const titleRef = useScrollReveal();
  
  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-center text-4xl font-bold animate-out transition-reveal">
          Featured Projects
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const cardRef = useScrollReveal({ delay: index * 200 });
            return (
              <div
                key={project.title}
                ref={cardRef}
                className="animate-out transition-reveal"
              >
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;