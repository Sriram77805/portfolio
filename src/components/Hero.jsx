import React from 'react';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { userData } from '../data.js';
import { useTypewriter } from '../hooks.js';

export default function Hero() {
  const role = useTypewriter(userData.roles, 70, 2000);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* ambient orbs */}
      <div className="orb orb-1 top-[-100px] left-[-100px]" />
      <div className="orb orb-2 top-[5%] right-[-80px]" />
      <div className="orb orb-3 bottom-[-60px] left-[40%]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16">
        {/* eyebrow */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald animate-pulse" />
          <span className="font-mono text-xs text-muted tracking-widest uppercase">Open to opportunities</span>
        </div>

        {/* name */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.02] mb-4 tracking-tight">
          <span className="text-ink">Bhargava</span>
          <br />
          <span className="text-ink">Phani </span>
          <span style={{ WebkitTextStroke: '1.5px rgba(96,165,250,0.6)', color: 'transparent' }}>Sriram</span>
        </h1>

        {/* typewriter role */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-blue text-sm">$</span>
          <span className="font-display text-xl sm:text-2xl font-semibold text-blue">{role}</span>
          <span className="caret font-mono text-blue text-xl">|</span>
        </div>

        {/* stats row */}
        <div className="flex flex-wrap gap-6 mb-12">
          {userData.stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-display text-3xl font-extrabold text-ink">{s.value}</span>
              <span className="font-mono text-xs text-muted uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${userData.email}`}
            className="flex items-center gap-2.5 px-6 py-3 bg-blue text-bg font-semibold text-sm rounded-xl hover:bg-blue/80 transition-colors"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
          <a
            href="/resume.pdf"
            download="Sriram_Mudrageda_Resume.pdf"
            className="flex items-center gap-2.5 px-6 py-3 bg-panel border border-rim text-ink font-semibold text-sm rounded-xl hover:border-blue/40 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-blue" /> Download Resume
          </a>
          <div className="flex items-center gap-4 ml-2">
            <a href={`https://${userData.github}`} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-blue transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-faint hover:text-blue transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, var(--color-bg))' }} />
    </section>
  );
}
