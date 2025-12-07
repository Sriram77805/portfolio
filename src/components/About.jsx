import React from 'react';
import { User, Code } from 'lucide-react';
import { userData } from '../data.js';

const SectionTitle = ({ icon: Icon, title }) => (
  <h2 className="text-3xl font-bold mb-8 flex items-center text-indigo-400">
    <Icon className="w-8 h-8 mr-3 p-1 border-2 border-indigo-400 rounded-full" />
    {title}
  </h2>
);

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 border-t border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="col-span-1 flex justify-center relative">
            <div className="absolute inset-0 bg-fuchsia-900/30 rounded-full blur-3xl opacity-50 w-3/4 h-3/4 animate-pulse"></div>
            <img
              src="https://placehold.co/300x300/4f46e5/ffffff?text=Profile+Pic"
              alt="Profile Illustration"
              className="w-full max-w-xs h-auto object-cover rounded-3xl shadow-2xl border-4 border-indigo-500/50 relative z-10"
            />
          </div>

          <div className="md:col-span-2 relative">
            <div className="absolute top-0 right-0 transform -translate-y-1/2 rotate-90 hidden md:block">            </div>
            <SectionTitle icon={User} title="Who I Am?" />
            <p className="text-gray-300 text-lg leading-relaxed">{userData.about}</p>

            <div className="mt-8 p-6 bg-indigo-900/20 rounded-xl border border-indigo-700/50">
              <h3 className="text-xl font-semibold text-indigo-300 mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2" /> Key Takeaways
              </h3>
              <ul className="list-disc list-inside text-gray-400 ml-4 space-y-2">
                <li>Full-Stack & DevOps Engineer focusing on scalability.</li>
                <li>Proficient in MERN stack (React.js, Node.js, Express.js, MongoDB).</li>
                <li>Experienced with AI/ML architectures (U-Net, CNN, LSTM).</li>
                <li>Driven by performance optimization and problem-solving.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
