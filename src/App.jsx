import { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const SCENE_LABELS = ['Home', 'About', 'Skills', 'Experience', 'Work', 'Contact'];

function App() {
  const [current, setCurrent] = useState(0);
  const animatingRef = useRef(false);
  const total = 6;

  // Navigate to a scene
  const goTo = useCallback((index) => {
    if (animatingRef.current) return;
    index = Math.max(0, Math.min(total - 1, index));
    if (index === current) return;
    animatingRef.current = true;
    setCurrent(index);
    setTimeout(() => { animatingRef.current = false; }, 620);
  }, [current]);

  // Calculate scene transform & opacity
  const getSceneStyle = (i) => {
    const offset = i - current;
    const zIndex = total - Math.min(Math.abs(offset), total);
    if (offset === 0) {
      return { transform: 'scale(1)', opacity: 1, zIndex, pointerEvents: 'auto' };
    } else if (offset > 0) {
      const depth = Math.min(offset, 3);
      return { transform: `scale(${1 - depth * 0.14})`, opacity: 0, zIndex, pointerEvents: 'none' };
    } else {
      const depth = Math.min(-offset, 3);
      return { transform: `scale(${1 + depth * 0.5})`, opacity: 0, zIndex, pointerEvents: 'none' };
    }
  };

  // Wheel navigation
  useEffect(() => {
    let wheelLock = false;
    const handleWheel = (e) => {
      if (wheelLock) return;
      if (Math.abs(e.deltaY) < 5) return;

      // Allow internal scrolling in scrollable containers
      const scrollEl = e.target?.closest?.('.work-grid, .timeline, .skill-categories');
      if (scrollEl) {
        const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 4;
        const atTop = scrollEl.scrollTop <= 2;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }

      wheelLock = true;
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
      setTimeout(() => { wheelLock = false; }, 680);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [current, goTo]);

  // Touch navigation
  useEffect(() => {
    let touchStartY = null;
    let touchStartTarget = null;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartTarget = e.target;
    };

    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;
      const diff = touchStartY - e.changedTouches[0].clientY;

      const scrollEl = touchStartTarget?.closest?.('.work-grid, .timeline, .skill-categories');
      if (scrollEl) {
        const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 4;
        const atTop = scrollEl.scrollTop <= 2;
        if (diff > 40 && !atBottom) { touchStartY = null; touchStartTarget = null; return; }
        if (diff < -40 && !atTop) { touchStartY = null; touchStartTarget = null; return; }
      }

      if (Math.abs(diff) > 40) {
        if (diff > 0) goTo(current + 1);
        else goTo(current - 1);
      }
      touchStartY = null;
      touchStartTarget = null;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, goTo]);

  const sceneComponents = [
    <Hero key="hero" onContact={() => goTo(5)} />,
    <About key="about" />,
    <Skills key="skills" />,
    <Experience key="experience" />,
    <Portfolio key="portfolio" />,
    <Contact key="contact" />,
  ];

  const sceneClasses = [
    'hero-scene',
    'about-scene',
    'skills-scene',
    'exp-scene',
    'work-scene',
    'contact-scene',
  ];

  return (
    <>
      {/* Grain overlay */}
      <div className="grain"></div>

      {/* Brandmark */}
      <div id="brandmark" className={current >= 1 ? 'show' : ''}>
        <span className="mark"></span>MIJASH SUNAR
      </div>

      {/* Nav dots */}
      <div id="progress" className={current >= 0 ? 'show' : ''}>
        {SCENE_LABELS.map((label, i) => (
          <div className="dot-wrap" key={i}>
            <div
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              role="button"
              aria-label={`Go to ${label}`}
            />
            <span className="dot-label">{label}</span>
          </div>
        ))}
      </div>

      {/* Stage with scenes */}
      <div id="stage">
        {sceneComponents.map((comp, i) => (
          <div
            className={`scene ${sceneClasses[i]} ${i === current ? 'active' : ''}`}
            key={i}
            style={getSceneStyle(i)}
          >
            {comp}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
