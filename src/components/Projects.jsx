import React, { useState } from 'react';
import { Github, Link as LinkIcon, Layers } from 'lucide-react';
import { projectsData, publicationData } from '../data.js';
import { useReveal } from '../hooks.js';

const TYPE_META = {
  fullstack: { label: 'Full-Stack', cardClass: 'gcard',         dot: 'bg-blue',    tag: 'text-blue  bg-blue/10  border-blue/25' },
  devops:    { label: 'DevOps',     cardClass: 'gcard gcard-emerald', dot: 'bg-emerald', tag: 'text-emerald bg-emerald/10 border-emerald/25' },
  systems:   { label: 'Systems',    cardClass: 'gcard',         dot: 'bg-amber',   tag: 'text-amber bg-amber/10 border-amber/25' },
  ai:        { label: 'AI / ML',    cardClass: 'gcard gcard-violet',  dot: 'bg-violet',  tag: 'text-violet bg-violet/10 border-violet/25' },
};

const FILTERS = ['All', 'Full-Stack', 'DevOps', 'Systems', 'AI / ML'];

function Tag({ children, className }) {
  return (
    <span className={`inline-block text-[11px] font-mono px-2.5 py-1 rounded-lg border mr-1.5 mb-1.5 ${className}`}>
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const meta = TYPE_META[project.type] || TYPE_META.fullstack;
  return (
    <div className={`${meta.cardClass} p-6 flex flex-col h-full`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${meta.dot}`} />
          <span className="font-mono text-[11px] text-muted uppercase tracking-wider">{meta.label}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-mono text-[11px] text-faint">{project.date}</span>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-blue transition-colors">
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
      <h4 className="font-display text-lg font-bold text-ink mb-3 leading-snug">{project.name}</h4>
      <p className="text-sm text-muted leading-relaxed flex-1 mb-4">{project.description}</p>
      <div className="flex flex-wrap pt-3 border-t" style={{ borderColor: 'var(--color-rim)' }}>
        {project.tools.map((t, i) => <Tag key={i} className={meta.tag}>{t}</Tag>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const ref = useReveal();

  const filtered = filter === 'All'
    ? projectsData
    : projectsData.filter(p => TYPE_META[p.type]?.label === filter);

  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="reveal" ref={ref}>
          <p className="font-mono text-xs text-blue tracking-widest uppercase mb-3">Projects</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink mb-10">What I've built</h2>

          {/* filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-200 ${
                  filter === f ? 'bg-blue text-bg border-blue' : 'border-rim text-muted hover:border-blue/40 hover:text-ink'
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {filtered.map((p, i) => <ProjectCard key={i} project={p} />)}
          </div>

          {/* publication */}
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-4 h-4 text-violet" />
            <p className="font-mono text-xs text-violet tracking-widest uppercase">IEEE Publication</p>
          </div>
          {publicationData.map((pub, i) => (
            <div key={i} className="gcard gcard-violet p-6">
              <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                <h4 className="font-display text-lg font-bold text-ink">{pub.name}</h4>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs bg-violet/10 text-violet border border-violet/30 px-2.5 py-1 rounded-lg">{pub.publisher}</span>
                  <span className="font-mono text-xs text-faint">{pub.date}</span>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-4">{pub.description}</p>
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-blue hover:text-blue/70 transition-colors mb-4">
                doi: {pub.doi} <LinkIcon className="w-3 h-3" />
              </a>
              <div className="flex flex-wrap pt-3 border-t" style={{ borderColor: 'var(--color-rim)' }}>
                {pub.tools.map((t, i) => <Tag key={i} className="text-violet bg-violet/10 border-violet/25">{t}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
