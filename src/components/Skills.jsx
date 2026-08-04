import React, { useState } from 'react';
import { skillsData } from '../data.js';
import { useReveal } from '../hooks.js';

const CATEGORIES = ['All', 'Language', 'Frontend', 'Backend', 'Database', 'DevOps', 'Cloud', 'Monitoring', 'AI/ML', 'Tools'];
const UNIQUE_SKILLS = skillsData.filter((s, idx, arr) => arr.findIndex(x => x.name === s.name) === idx);

const CAT_COLOR = {
  Language:   'text-amber  border-amber/30  bg-amber/8',
  Frontend:   'text-blue   border-blue/30   bg-blue/8',
  Backend:    'text-emerald border-emerald/30 bg-emerald/8',
  Database:   'text-violet border-violet/30 bg-violet/8',
  DevOps:     'text-emerald border-emerald/30 bg-emerald/8',
  Cloud:      'text-blue   border-blue/30   bg-blue/8',
  Monitoring: 'text-rose   border-rose/30   bg-rose/8',
  'AI/ML':    'text-violet border-violet/30 bg-violet/8',
  Tools:      'text-muted  border-rim       bg-panel2',
};

export default function Skills() {
  const [active, setActive] = useState('All');
  const ref = useReveal();

  const visible = active === 'All' ? UNIQUE_SKILLS : UNIQUE_SKILLS.filter(s => s.category === active);
  const marqueeSkills = [...UNIQUE_SKILLS, ...UNIQUE_SKILLS];

  return (
    <section id="skills" className="py-28 relative" style={{ background: 'linear-gradient(var(--color-bg) 0%, var(--color-panel) 30%, var(--color-panel) 70%, var(--color-bg) 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="reveal" ref={ref}>
          <p className="font-mono text-xs text-blue tracking-widest uppercase mb-3">Skills</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink mb-10">Tech stack</h2>

          {/* filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 ${
                  active === cat
                    ? 'bg-blue text-bg border-blue'
                    : 'border-rim text-muted hover:border-blue/40 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* skill pills */}
          <div className="flex flex-wrap gap-3 min-h-[80px] mb-14">
            {visible.map((s) => (
              <div key={s.name}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${CAT_COLOR[s.category] || 'text-muted border-rim bg-panel2'}`}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.devicon}/${s.devicon}-original.svg`}
                  alt={s.name}
                  className="w-4 h-4"
                  onError={(e) => { e.target.style.display='none'; }}
                />
                {s.name}
              </div>
            ))}
          </div>
        </div>

        {/* marquee strip */}
        <div className="relative overflow-hidden marquee-wrap py-2 border-y" style={{ borderColor: 'var(--color-rim)' }}>
          <div className="flex gap-3 w-fit marquee-track">
            {marqueeSkills.map((s, i) => (
              <div key={i} className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rim bg-panel text-sm text-muted">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.devicon}/${s.devicon}-original.svg`}
                  alt={s.name} className="w-4 h-4"
                  onError={(e) => { e.target.style.display='none'; }}
                />
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
