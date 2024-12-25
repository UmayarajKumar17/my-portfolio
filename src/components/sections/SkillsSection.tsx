import React from 'react';
import { Brain, Code, Database, Network, Cloud, Cpu } from 'lucide-react';
import SkillCard from '../Skills/SkillCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'Machine Learning',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-pink-500 to-rose-500',
    skills: [
      { name: 'TensorFlow', level: 90 },
      { name: 'PyTorch', level: 85 },
      { name: 'Scikit-learn', level: 95 },
    ],
  },
  {
    title: 'Deep Learning',
    icon: Network,
    gradient: 'bg-gradient-to-r from-purple-500 to-indigo-500',
    skills: [
      { name: 'Neural Networks', level: 88 },
      { name: 'CNN', level: 92 },
      { name: 'RNN/LSTM', level: 85 },
    ],
  },
  {
    title: 'Programming',
    icon: Code,
    gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
    ],
  },
  {
    title: 'Data Engineering',
    icon: Database,
    gradient: 'bg-gradient-to-r from-emerald-500 to-green-500',
    skills: [
      { name: 'SQL', level: 90 },
      { name: 'Spark', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    title: 'Cloud & MLOps',
    icon: Cloud,
    gradient: 'bg-gradient-to-r from-orange-500 to-amber-500',
    skills: [
      { name: 'AWS SageMaker', level: 85 },
      { name: 'Docker', level: 88 },
      { name: 'Kubernetes', level: 82 },
    ],
  },
  {
    title: 'AI Applications',
    icon: Cpu,
    gradient: 'bg-gradient-to-r from-violet-500 to-fuchsia-500',
    skills: [
      { name: 'NLP', level: 90 },
      { name: 'Computer Vision', level: 88 },
      { name: 'Reinforcement Learning', level: 85 },
    ],
  },
];

const SkillsSection = () => {
  const titleRef = useScrollReveal();
  
  return (
    <section id="skills" className="relative min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-center text-4xl font-bold mb-4 animate-out transition-reveal">
          Skills & Expertise
        </h2>
        <p ref={useScrollReveal({ delay: 200 })} className="text-center text-gray-400 mb-12 max-w-2xl mx-auto animate-out transition-reveal">
          Specialized in cutting-edge AI/ML technologies and frameworks, with a focus on
          practical applications and innovative solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const cardRef = useScrollReveal({ delay: index * 200 });
            return (
              <div
                key={category.title}
                ref={cardRef}
                className="animate-out transition-reveal"
              >
                <SkillCard {...category} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;