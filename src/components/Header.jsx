import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV = [
  { id: 'about',     label: 'About' },
  { id: 'skills',    label: 'Skills' },
  { id: 'projects',  label: 'Projects' },
  { id: 'education', label: 'Education' },
];

export default function Header({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300 ${scrolled ? 'pt-2' : ''}`}>
      {/* Desktop pill */}
      <div className="nav-pill hidden md:flex items-center gap-1 px-2 py-1.5">
        <a href="#hero" className="px-4 py-1.5 font-display text-sm font-bold tracking-tight text-blue mr-2">SM</a>
        {NAV.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              activeSection === id
                ? 'bg-blue/15 text-blue'
                : 'text-muted hover:text-ink'
            }`}
          >
            {label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          download="Sriram_Mudrageda_Resume.pdf"
          className="ml-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-blue text-bg hover:bg-blue/80 transition-colors"
        >
          Resume ↓
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full flex justify-between items-center nav-pill px-4 py-2.5">
        <a href="#hero" className="font-display font-bold text-blue text-sm">SM</a>
        <button onClick={() => setOpen(!open)} className="text-muted hover:text-ink p-1">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 nav-pill rounded-2xl py-3 flex flex-col">
          {NAV.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              className={`px-5 py-2.5 text-sm font-medium ${activeSection === id ? 'text-blue' : 'text-muted'}`}>
              {label}
            </a>
          ))}
          <a href="/resume.pdf" download className="mx-4 mt-2 py-2 text-center text-sm font-semibold bg-blue text-bg rounded-full">
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
