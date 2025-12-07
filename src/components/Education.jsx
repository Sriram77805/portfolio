import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import { educationData } from '../data.js';

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-400">
    <Icon className="w-8 h-8 mr-3 p-1 border-2 border-indigo-400 rounded-full" />
    {title}
  </h2>
);

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800/50 border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={GraduationCap} title="Education & Certifications" />

        <div className="grid md:grid-cols-2 gap-10">
          {educationData.map((edu, index) => (
            <div key={index} className="relative p-6 bg-gray-800 rounded-xl shadow-xl border border-indigo-700/50">
              <span className="absolute top-0 right-0 -mt-3 -mr-3 px-3 py-1 bg-indigo-600 text-white text-xs font-bold uppercase rounded-full shadow-lg">
                {edu.period}
              </span>
              <div className="flex items-center space-x-4">
                <GraduationCap className="w-8 h-8 text-indigo-400 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-indigo-300">{edu.institution}</p>
                  {edu.details && <p className="text-sm text-gray-400 mt-1">{edu.details}</p>}
                </div>
              </div>
            </div>
          ))}

          <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-green-700/50">
            <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center">
              <BookOpen className="w-6 h-6 mr-2" /> Certifications (AWS)
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg border border-gray-700">
                Getting Started With Amazon AWS
              </li>
              <li className="flex justify-between items-center bg-gray-700/50 p-3 rounded-lg border border-gray-700">
                Getting Started with DevOps on AWS
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-3">Links available in original resume.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
