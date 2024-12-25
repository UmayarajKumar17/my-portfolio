import React, { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur group-hover:opacity-100 transition-opacity"></div>
              <Brain className="relative h-8 w-8 text-white" />
            </div>
            <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Portfolio</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-lg p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-gray-900/95 backdrop-blur-md border-t border-white/10">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;