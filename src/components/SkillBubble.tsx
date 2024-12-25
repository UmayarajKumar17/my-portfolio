import React from 'react';

interface SkillBubbleProps {
  name: string;
  level: number;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ name, level }) => {
  const size = 40 + level * 10;

  return (
    <div
      className="absolute animate-float cursor-pointer rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-110"
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    >
      <div className="flex h-full w-full items-center justify-center text-center text-sm font-medium text-white">
        {name}
      </div>
    </div>
  );
};

export default SkillBubble;