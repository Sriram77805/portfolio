import React from 'react';
import { User, Code, Terminal, GraduationCap } from 'lucide-react';
import { userData } from '../data.js';

export default function Header({ activeSection }) {
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/80 shadow-xl border-b border-indigo-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-extrabold tracking-wider">
        <span className="text-indigo-400">S</span>
        <span className="text-white">M</span>
        </a>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition duration-300 flex items-center ${
                activeSection === item.id ? 'text-indigo-400 border-b-2 border-indigo-400 pb-1' : 'text-gray-300 hover:text-indigo-400'
              }`}
            >
              <item.icon className="w-4 h-4 mr-1" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
