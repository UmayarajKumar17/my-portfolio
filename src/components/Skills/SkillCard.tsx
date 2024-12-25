import React from 'react';
import { LucideIcon } from 'lucide-react';
import SkillProgress from './SkillProgress';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
  gradient: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills, gradient }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
      <div className="absolute -right-8 -top-8 h-32 w-32 opacity-10 transition-opacity group-hover:opacity-20">
        <Icon className={`h-full w-full ${gradient} [mask-image:linear-gradient(45deg,black,transparent)]`} />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <Icon className={`h-6 w-6 ${gradient} [mask-image:linear-gradient(45deg,black,transparent)]`} />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <div className="space-y-4">
          {skills.map((skill) => (
            <SkillProgress key={skill.name} name={skill.name} level={skill.level} gradient={gradient} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;