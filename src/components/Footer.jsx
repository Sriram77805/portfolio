import React from 'react';
import { userData } from '../data.js';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t" style={{ borderColor: 'var(--color-rim)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-bold text-ink mb-1">{userData.shortName}</p>
          <p className="font-mono text-xs text-faint">&copy; {new Date().getFullYear()} · Built with React & Tailwind CSS</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={`mailto:${userData.email}`} className="text-faint hover:text-blue transition-colors"><Mail className="w-5 h-5" /></a>
          <a href={`https://${userData.github}`} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-blue transition-colors"><Github className="w-5 h-5" /></a>
          <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-blue transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
