import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import { ArrowUp } from 'lucide-react';

export default function AppRoot() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScroll, setShowScroll] = useState(false);

  const onScroll = useCallback(() => {
    setShowScroll(window.scrollY > 500);
    const ids = ['hero', 'about', 'skills', 'projects', 'education'];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const r = el.getBoundingClientRect();
      if (r.top <= window.innerHeight * 0.5 && r.bottom >= window.innerHeight * 0.5) {
        setActiveSection(id); return;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-xl border text-blue transition-all duration-300 ${
          showScroll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        style={{ background: 'var(--color-panel)', borderColor: 'rgba(96,165,250,0.3)' }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
