import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import logo from './assets/logo.jpg';

const LABELS = ['Home', 'About', 'Skills', 'Work', 'Experience', 'Education', 'Contact'];

function App() {
  const [current, setCurrent] = useState(0);
  const lock = useRef(false);
  const total = LABELS.length;

  const goTo = useCallback((i) => {
    if (lock.current) return;
    i = Math.max(0, Math.min(total - 1, i));
    if (i === current) return;
    lock.current = true;
    setCurrent(i);
    setTimeout(() => { lock.current = false; }, 620);
  }, [current, total]);

  const style = (i) => {
    const off = i - current;
    const z = total - Math.min(Math.abs(off), total);
    if (off === 0) return { transform: 'scale(1)', opacity: 1, zIndex: z, pointerEvents: 'auto' };
    if (off > 0) return { transform: `scale(${1 - Math.min(off, 3) * 0.14})`, opacity: 0, zIndex: z, pointerEvents: 'none' };
    return { transform: `scale(${1 + Math.min(-off, 3) * 0.5})`, opacity: 0, zIndex: z, pointerEvents: 'none' };
  };

  useEffect(() => {
    let wl = false;
    const h = (e) => {
      if (wl || Math.abs(e.deltaY) < 5) return;
      const s = e.target?.closest?.('.work-grid,.timeline,.skill-categories');
      if (s) {
        if (e.deltaY > 0 && s.scrollTop + s.clientHeight < s.scrollHeight - 4) return;
        if (e.deltaY < 0 && s.scrollTop > 2) return;
      }
      wl = true;
      goTo(current + (e.deltaY > 0 ? 1 : -1));
      setTimeout(() => { wl = false; }, 680);
    };
    window.addEventListener('wheel', h, { passive: true });
    return () => window.removeEventListener('wheel', h);
  }, [current, goTo]);

  useEffect(() => {
    let sy = null, st = null;
    const ts = (e) => { sy = e.touches[0].clientY; st = e.target; };
    const te = (e) => {
      if (sy === null) return;
      const d = sy - e.changedTouches[0].clientY;
      const s = st?.closest?.('.work-grid,.timeline,.skill-categories');
      if (s) {
        if (d > 40 && s.scrollTop + s.clientHeight < s.scrollHeight - 4) { sy = null; return; }
        if (d < -40 && s.scrollTop > 2) { sy = null; return; }
      }
      if (Math.abs(d) > 40) goTo(current + (d > 0 ? 1 : -1));
      sy = null; st = null;
    };
    window.addEventListener('touchstart', ts, { passive: true });
    window.addEventListener('touchend', te, { passive: true });
    return () => { window.removeEventListener('touchstart', ts); window.removeEventListener('touchend', te); };
  }, [current, goTo]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [current, goTo]);

  const scenes = [
    <Hero key="h" onContact={() => goTo(6)} />,
    <About key="a" />,
    <Skills key="s" />,
    <Portfolio key="p" />,
    <Experience key="e" />,
    <Education key="edu" />,
    <Contact key="c" />,
  ];
  const cls = ['hero-scene', 'about-scene', 'skills-scene', 'work-scene', 'exp-scene', 'edu-scene', 'contact-scene'];

  return (
    <>
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grain" />

      {/* Header */}
      <header className="site-header">
        <div className="header-brand" onClick={() => goTo(0)}>
          <img src={logo} alt="Mijash" className="header-logo" /> MIJASH SUNAR
        </div>
        <nav className="header-nav">
          {LABELS.map((l, i) => (
            <button key={i} className={`header-link ${i === current ? 'active' : ''}`} onClick={() => goTo(i)}>
              {l}
            </button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => goTo(5)}>Hire Me</button>
      </header>

      {/* Nav dots */}
      <div id="progress">
        {LABELS.map((l, i) => (
          <div className={`dot-wrap ${i === current ? 'active' : ''}`} key={i} onClick={() => goTo(i)} role="button" aria-label={`Go to ${l}`}>
            <div className="dot" />
            <span className="dot-label">{l}</span>
          </div>
        ))}
      </div>

      {/* Scenes */}
      <div id="stage">
        {scenes.map((comp, i) => (
          <div className={`scene ${cls[i]} ${i === current ? 'active' : ''}`} key={i} style={style(i)}>
            {comp}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
