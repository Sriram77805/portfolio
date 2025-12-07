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

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > 400) setShowScroll(true);
    else if (showScroll && window.pageYOffset <= 400) setShowScroll(false);

    const sections = ['hero', 'about', 'skills', 'projects', 'education'];
    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveSection(sectionId);
        return;
      }
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
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
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg transition-opacity duration-500 ${
          showScroll ? 'opacity-100 visible' : 'opacity-0 invisible'
        } hover:bg-indigo-500 z-50`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
