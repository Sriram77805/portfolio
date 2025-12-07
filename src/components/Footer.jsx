import React from 'react';
import { userData } from '../data.js';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-indigo-900/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        <p className="text-sm">&copy; {new Date().getFullYear()} {userData.name}. All rights reserved.</p>
        <p className="text-xs mt-1">Built with React for a modern developer aesthetic.</p>
      </div>
    </footer>
  );
}
