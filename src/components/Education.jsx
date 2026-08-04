import React from 'react';
import { educationData, certificationsData } from '../data.js';
import { useReveal } from '../hooks.js';
import { Award, ExternalLink } from 'lucide-react';

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" className="py-28 relative" style={{ background: 'linear-gradient(var(--color-bg) 0%, var(--color-panel) 30%, var(--color-panel) 70%, var(--color-bg) 100%)' }}>
      {/* ambient */}
      <div className="orb" style={{ width: 400, height: 400, background: 'rgba(167,139,250,0.07)', bottom: -80, right: '5%', position: 'absolute' }} />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="reveal" ref={ref}>
          <p className="font-mono text-xs text-blue tracking-widest uppercase mb-3">Education & Certs</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink mb-14">Academic journey</h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* timeline */}
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-6">Education</p>
              <div className="relative">
                <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-blue via-violet to-transparent" />
                <div className="space-y-10 pl-8">
                  {educationData.map((edu, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-blue border-2 border-bg" style={{ boxShadow: '0 0 10px rgba(96,165,250,0.6)' }} />
                      <p className="font-mono text-xs text-blue mb-1">{edu.period}</p>
                      <h4 className="font-display text-lg font-bold text-ink leading-snug mb-1">{edu.degree}</h4>
                      <p className="text-sm text-muted">{edu.institution}</p>
                      {edu.detail && <p className="font-mono text-xs text-faint mt-1">{edu.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* certifications */}
            <div>
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-6">Certifications</p>
              <div className="space-y-4">
                {certificationsData.map((c, i) => (
                  <div key={i} className="gcard p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber/10 border border-amber/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-amber" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-ink leading-snug">{c.name}</p>
                      <p className="font-mono text-xs text-faint mt-0.5">AWS · {c.date}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-faint flex-shrink-0" />
                  </div>
                ))}
                <div className="gcard p-5">
                  <p className="font-mono text-xs text-muted">// Certificate links available in the resume</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
