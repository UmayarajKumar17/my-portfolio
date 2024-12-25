import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import ProfileImage from './ProfileImage';

const HeroSection = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      content.classList.add('animate-in');
      content.classList.remove('animate-out');
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse lg:flex-row items-center justify-center gap-12 py-20 lg:py-0">
        <div ref={contentRef} className="relative z-10 text-center lg:text-left animate-out transition-reveal">
          <div className="inline-flex items-center rounded-full bg-pink-500/10 px-3 py-1 text-sm font-medium text-pink-500 ring-1 ring-inset ring-pink-500/20 mb-6">
            <Star className="mr-1 h-3 w-3" /> Available for Opportunities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-gradient-x">
              Umayaraj Kumar
            </span>
            <br />
            <span className="text-white mt-2 block text-3xl sm:text-4xl lg:text-5xl">AI/ML Engineer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed mx-auto lg:mx-0">
            Passionate about artificial intelligence and machine learning,
            creating innovative solutions that push the boundaries of what's possible.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:opacity-90 hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full backdrop-blur-sm bg-white/10 px-6 py-3 text-lg font-semibold text-white transition-all border border-white/20 hover:bg-white/20 hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="relative z-10">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;