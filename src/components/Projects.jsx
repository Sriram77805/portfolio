import React, { useState } from 'react';
import { Terminal, Github, Link as LinkIcon } from 'lucide-react';
import { projectsData, publicationData } from '../data.js';

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-400">
    <Icon className="w-8 h-8 mr-3 p-1 border-2 border-indigo-400 rounded-full" />
    {title}
  </h2>
);

const Tag = ({ children }) => (
  <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full border border-indigo-700/50 mr-2 mb-2">{children}</span>
);

const SoftwareProjectCard = ({ project }) => {
  const [pitch, setPitch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  return (
    <div className="p-6 bg-gray-800/70 rounded-2xl shadow-xl border-l-4 border-indigo-500 hover:bg-gray-700/80 transition duration-300">
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-xl font-bold text-indigo-400">{project.name}</h4>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
          <Github className="w-6 h-6" />
        </a>
      </div>
      <p className="text-sm text-gray-500 mb-4">{project.date}</p>

      {pitch ? (
        <div className="mt-4 p-4 bg-indigo-900/40 rounded-lg border border-indigo-600/50">
          <ul className="list-disc list-inside text-gray-200 space-y-1 ml-4">
            {pitch.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      ) : (
        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      )}

      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-700/50">
        <div className="flex flex-wrap">
          {project.tools.map((tool, i) => <Tag key={i}>{tool}</Tag>)}
        </div>
        <button onClick={generatePitch} disabled={isLoading} className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm rounded-lg shadow-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
          {isLoading ? 'Loading…' : '✨ Generate Pitch'}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mt-2 text-right">{error}</p>}
    </div>
  );
};

const PublicationCard = ({ pub }) => (
  <div className="p-6 bg-gray-800/70 rounded-2xl shadow-xl border-l-4 border-green-500 hover:bg-gray-700/80 transition duration-300">
    <div className="flex justify-between items-start mb-3">
      <h4 className="text-xl font-bold text-green-400">{pub.name}</h4>
      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-sm flex items-center">
        DOI: {pub.doi} <LinkIcon className="w-4 h-4 ml-1" />
      </a>
    </div>
    <p className="text-sm text-gray-500 mb-4">{pub.date}</p>
    <p className="text-gray-300 mb-4 leading-relaxed">{pub.description}</p>
    <div className="flex flex-wrap pt-4 border-t border-gray-700/50">
      {pub.tools.map((tool, i) => <Tag key={i}>{tool}</Tag>)}
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Terminal} title="Projects & Research" />

        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-white mb-6">Software Development</h3>
          <div className="grid gap-8">
            {projectsData.map((project, index) => (
              <SoftwareProjectCard key={index} project={project} />
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mt-12 mb-6 border-t pt-8 border-indigo-900/50">AI/ML Publications</h3>
          <div className="grid gap-8">
            {publicationData.map((pub, index) => (
              <PublicationCard key={index} pub={pub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
