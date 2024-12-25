import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  github,
  demo,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative p-4">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-gray-300 line-clamp-2">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-3 py-1 text-sm text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <ExternalLink size={20} />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;