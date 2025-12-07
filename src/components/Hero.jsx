import React from 'react';
import { Mail, Download, Github, Linkedin, Link } from 'lucide-react';
import { userData } from '../data.js';

const IconButton = ({ icon: Icon, label, href = '#', download = false }) => (
  <a
    href={href}
    target={href !== '#' ? '_blank' : '_self'}
    rel="noopener noreferrer"
    download={download ? "resume.pdf" : undefined}
    className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] border-2 border-indigo-500 min-w-[150px] justify-center"
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </a>
);

export default function Hero() {
  return (
    <section id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative py-20">
        <div className="text-white z-10">
          <p className="text-xl text-indigo-400 mb-4     font-mono">Hello, This is</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-indigo-400">{userData.name}</span>, I'm a
            <br />
            <span className="text-green-400">Software Engineer.</span>
          </h1>
          <div className="flex space-x-4 mb-8">
            <IconButton icon={Mail} label="CONTACT ME" href={`mailto:${userData.email}`} />
            <IconButton icon={Download} label="GET RESUME" href="#" />
          </div>
          <div className="flex space-x-6">
            <a href={`https://${userData.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute inset-0 bg-indigo-900/30 rounded-3xl backdrop-blur-sm shadow-[0_0_50px_rgba(79,70,229,0.5)] transform -rotate-2"></div>
          <div className="relative p-6 bg-gray-900 border border-indigo-700/50 rounded-3xl shadow-2xl">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <pre className="text-sm font-mono text-gray-300 overflow-auto whitespace-pre-wrap">
              <code className="text-pink-400">const</code> <code className="text-yellow-300">coder</code> = <code className="text-white">{'{'}
              </code>
              <br />
              &nbsp;&nbsp;<code className="text-sky-400">name</code>: <code className="text-green-400">'Sriram M'</code>,
              <br />
              &nbsp;&nbsp;<code className="text-sky-400">role</code>: <code className="text-green-400">'Full Stack Engineer'</code>,
              <br />
              &nbsp;&nbsp;<code className="text-sky-400">skillsCount</code>: <code className="text-amber-300">18</code>,
              <br />
              &nbsp;&nbsp;<code className="text-sky-400">problemSolver</code>: <code className="text-amber-300">true</code>,
              <br />
              &nbsp;&nbsp;<code className="text-sky-400">isHireable</code>: <code className="text-pink-400">function</code>() <code className="text-white">{'{'}
              </code>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<code className="text-pink-400">return</code> (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="text-white">this</code>.<code className="text-sky-400">problemSolver</code> &&
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<code className="text-white">this</code>.<code className="text-sky-400">skillsCount</code> {'>'} <code className="text-amber-300">5</code>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;<code className="text-white">{'}'}</code>
              <br />
              <code className="text-white">{'}'}</code>;
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
