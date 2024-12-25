import React from 'react';

interface SkillProgressProps {
  name: string;
  level: number;
  gradient: string;
}

const SkillProgress: React.FC<SkillProgressProps> = ({ name, level, gradient }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
        <div
          className={`h-full ${gradient} transition-all duration-500`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillProgress;