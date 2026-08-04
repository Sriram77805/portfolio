import { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('type');

  useEffect(() => {
    const word = words[wordIdx % words.length];
    if (phase === 'type') {
      if (display.length < word.length) {
        const t = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase('erase'), pause);
      return () => clearTimeout(t);
    } else {
      if (display.length > 0) {
        const t = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2);
        return () => clearTimeout(t);
      }
      setWordIdx((i) => i + 1);
      setPhase('type');
    }
  }, [display, phase, wordIdx, words, speed, pause]);

  return display;
}
