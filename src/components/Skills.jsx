import React from 'react';
import { Code } from 'lucide-react';
import { skillsData } from '../data.js';

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-400">
    <Icon className="w-8 h-8 mr-3 p-1 border-2 border-indigo-400 rounded-full" />
    {title}
  </h2>
);

const getIcon = (skillName) => {
  switch (skillName) {
    case 'React.js': return 'react';
    case 'Node.js': return 'node-js';
    case 'Express.js': return 'server';
    case 'Java': return 'java';
    case 'JavaScript': return 'javascript';
    case 'Python': return 'python';
    case 'MongoDB': return 'database';
    case 'MySQL': return 'database-2';
    case 'Tailwind CSS': return 'tailwindcss';
    case 'Docker': return 'docker';
    case 'Git/GitHub': return 'git';
    case 'AWS': return 'aws';
    default: return 'code';
  }
};

const SkillCard = ({ name }) => (
  <div className="flex-shrink-0 w-32 p-4 bg-gray-800/70 border border-indigo-700/50 rounded-xl shadow-xl hover:shadow-2xl hover:border-indigo-500 transition duration-300 transform hover:scale-[1.03] flex flex-col items-center justify-center mx-2">
    <img
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getIcon(name)}/${getIcon(name)}-original.svg`}
      alt={`${name} icon`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/48x48/1f2937/a5b4fc?text=Code"
      }}
      className="w-12 h-12 mb-3 filter grayscale hover:grayscale-0 transition duration-500"
    />
    <p className="text-sm font-semibold text-gray-200 text-center">{name}</p>
  </div>
);

export default function Skills() {
  const allSkills = skillsData.map(s => s.name);
  const slidingSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Code} title="Skills & Technology Stack" />

        <div className="space-y-10">
          <h3 className="text-xl font-bold text-indigo-400 mb-4 tracking-wider uppercase border-b border-indigo-700 pb-2">
            Core Technologies
          </h3>

          <div className="relative w-full overflow-hidden py-4 border-y border-indigo-700/50">
            <div className="flex w-fit animate-marquee hover:pause">
              {slidingSkills.map((skill, index) => (
                <SkillCard key={index} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
