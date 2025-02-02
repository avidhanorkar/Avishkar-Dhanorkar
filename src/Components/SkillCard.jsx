import React from 'react';
import { Code2, Database, Layout, Server, Settings, Smartphone } from 'lucide-react';

const icons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  mobile: Smartphone,
  devops: Settings,
  languages: Code2,
};

function SkillCard({ category, skills, icon }) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-indigo-100 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;