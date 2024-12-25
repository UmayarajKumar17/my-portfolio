import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const contacts = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/UmayarajKumar17',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'www.linkedin.com/in/umayaraj-kumar-250995307',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'umayaraj170706@gmail.com',
  },
];

const ContactSection = () => {
  const titleRef = useScrollReveal();
  
  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 ref={titleRef} className="text-center text-4xl font-bold animate-out transition-reveal">Get in Touch</h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {contacts.map((contact, index) => {
            const contactRef = useScrollReveal({ delay: index * 200 });
            return (
              <a
                key={contact.name}
                ref={contactRef}
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/5 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/10 animate-out transition-reveal"
              >
                <contact.icon className="h-6 w-6" />
                <span>{contact.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;