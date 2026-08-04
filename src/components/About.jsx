import React from 'react';
import { userData } from '../data.js';
import { useReveal } from '../hooks.js';

const HIGHLIGHTS = [
  { label: 'Full-Stack', value: 'React · Node · Express · MongoDB' },
  { label: 'DevOps', value: 'Docker · K8s · Helm · ArgoCD · GitHub Actions' },
  { label: 'AI / ML', value: 'U-Net · CNN · LSTM · RAG · TensorFlow' },
  { label: 'Languages', value: 'Java · JavaScript · Python · C' },
  { label: 'Monitoring', value: 'Prometheus · Grafana' },
  { label: 'Cloud', value: 'AWS Certified (2×)' },
];

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="reveal" ref={ref}>
          <p className="font-mono text-xs text-blue tracking-widest uppercase mb-3">About</p>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-ink mb-12 leading-tight">
            Building systems that<br className="hidden sm:block" /> <span className="text-blue">actually work</span>.
          </h2>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* bio */}
            <div className="lg:col-span-3 gcard p-8">
              <p className="text-muted leading-relaxed text-base mb-6">{userData.about}</p>
              <p className="text-muted leading-relaxed text-base">
                Currently finishing my B.Tech in CS (AI) at Amrita Vishwa Vidyapeetham with a 8.5 GPA,
                while shipping side projects and contributing to ML research published at IEEE.
              </p>
            </div>

            {/* highlights grid */}
            <div className="lg:col-span-2 grid grid-cols-1 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="gcard p-4 flex items-start gap-4">
                  <span className="w-1.5 shrink-0 h-full min-h-[20px] rounded-full bg-blue/40 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs text-blue tracking-wide uppercase mb-0.5">{h.label}</p>
                    <p className="text-sm text-muted leading-snug">{h.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
