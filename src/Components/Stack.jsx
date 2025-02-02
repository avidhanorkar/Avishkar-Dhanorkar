import React from 'react';
import SkillCard from './SkillCard';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: 'frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    category: 'Backend Development',
    icon: 'backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Database Technologies',
    icon: 'database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Prisma'],
  },
  {
    category: 'Programming Languages',
    icon: 'languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
];

function Stack() {
  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-lora text-[50px] lg:text-[70px] mt-[30px] lg:mt-[50px] font-[700] text-left">
            Technical Skills
          </h2>
          <p className="text-[20px]">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCard
              key={category.category}
              category={category.category}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
