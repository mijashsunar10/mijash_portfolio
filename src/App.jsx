import { useState, useEffect, useRef, useCallback } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MSLogo from './components/MSLogo';

const LABELS = ['Home', 'About', 'Skills', 'Work', 'Experience', 'Education', 'Contact'];
const EASE_CINEMA = [0.76, 0, 0.24, 1];

function App() {
  const [current, setCurrent] = useState(0);
  const lock = useRef(false);
  const total = LABELS.length;
  const [mobileNav, setMobileNav] = useState(false);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // ===== CINEMATIC INTRO STATE =====
  const [introPhase, setIntroPhase] = useState('intro'); // 'intro' | 'ready' | 'done'
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const introTimer = useRef(null);
  const introReady = introPhase !== 'done';

  // Auto-advance, or user can skip instantly
  useEffect(() => {
    introTimer.current = setTimeout(() => {
      if (introPhase === 'intro') setIntroPhase('ready');
    }, 2100);
    return () => clearTimeout(introTimer.current);
  }, [introPhase]);

  // When ready phase, transition out
  useEffect(() => {
    if (introPhase === 'ready') {
      const t = setTimeout(() => setIntroPhase('done'), 800);
      return () => clearTimeout(t);
    }
  }, [introPhase]);

  // Mouse tracking for parallax on intro
  useEffect(() => {
    if (introPhase === 'done') return;
    const handler = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [introPhase]);

  // Allow click/scroll/key to skip intro
  const skipIntro = useCallback(() => {
    if (introPhase !== 'done') {
      clearTimeout(introTimer.current);
      setIntroPhase('done');
    }
  }, [introPhase]);

  useEffect(() => {
    if (introPhase === 'done') return;
    const handleClick = () => skipIntro();
    const handleWheel = () => skipIntro();
    const handleKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') skipIntro();
    };
    window.addEventListener('click', handleClick);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, [introPhase, skipIntro]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const goTo = useCallback((i) => {
    if (lock.current) return;
    i = Math.max(0, Math.min(total - 1, i));
    if (i === current) return;
    lock.current = true;
    setCurrent(i);
    setTimeout(() => { lock.current = false; }, 820);
  }, [current, total]);

  const style = (i) => {
    const off = i - current;
    const z = total - Math.min(Math.abs(off), total);
    if (off === 0) return { transform: 'scale(1) translateY(0)', opacity: 1, zIndex: z, pointerEvents: 'auto' };
    if (off > 0) return { transform: `scale(${1 - Math.min(off, 3) * 0.1}) translateY(${Math.min(off, 3) * 8}px)`, opacity: 0, zIndex: z, pointerEvents: 'none' };
    return { transform: `scale(${1 + Math.min(-off, 3) * 0.3}) translateY(${Math.max(-off * -8, -24)}px)`, opacity: 0, zIndex: z, pointerEvents: 'none' };
  };

  // Wheel handler
  useEffect(() => {
    if (introPhase !== 'done') return;
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
      setTimeout(() => { wl = false; }, 880);
    };
    window.addEventListener('wheel', h, { passive: true });
    return () => window.removeEventListener('wheel', h);
  }, [current, goTo, introPhase]);

  // Touch handler
  useEffect(() => {
    if (introPhase !== 'done') return;
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
  }, [current, goTo, introPhase]);

  // Keyboard handler
  useEffect(() => {
    if (introPhase !== 'done') return;
    const h = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') goTo(current - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [current, goTo, introPhase]);

  const isDone = introPhase === 'done';
  const scenes = [
    <Hero key="h" onContact={() => goTo(6)} isActive={isDone && current === 0} />,
    <About key="a" isActive={current === 1} />,
    <Skills key="s" isActive={current === 2} />,
    <Portfolio key="p" isActive={current === 3} />,
    <Experience key="e" isActive={current === 4} />,
    <Education key="edu" isActive={current === 5} />,
    <Contact key="c" isActive={current === 6} />,
  ];
  const cls = ['hero-scene', 'about-scene', 'skills-scene', 'work-scene', 'exp-scene', 'edu-scene', 'contact-scene'];

  // Parallax offset from mouse (for intro)
  const px = (mousePos.x - 0.5) * 30;
  const py = (mousePos.y - 0.5) * 30;

  return (
    <>
      {/* ===== CINEMATIC INTRO SCREEN ===== */}
      <AnimatePresence>
        {introReady && (
          <motion.div
            className="intro-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.08, filter: 'blur(12px)' }}
            transition={{ duration: 0.9, ease: EASE_CINEMA }}
          >
            {/* Mouse-reactive parallax background layers */}
            <motion.div
              className="intro-bg-layer intro-bg-1"
              animate={{ x: px * 0.8, y: py * 0.8 }}
              transition={{ type: 'spring', stiffness: 40, damping: 25 }}
            />
            <motion.div
              className="intro-bg-layer intro-bg-2"
              animate={{ x: -px * 1.2, y: -py * 1.2 }}
              transition={{ type: 'spring', stiffness: 35, damping: 20 }}
            />
            <motion.div
              className="intro-bg-layer intro-bg-3"
              animate={{ x: px * 0.5, y: -py * 0.6 }}
              transition={{ type: 'spring', stiffness: 30, damping: 30 }}
            />

            {/* Floating particles reacting to mouse */}
            <div className="intro-particles">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`intro-particle intro-particle-${i + 1}`}
                  animate={{
                    x: px * (0.3 + i * 0.15) * (i % 2 === 0 ? 1 : -1),
                    y: py * (0.3 + i * 0.15) * (i % 2 === 0 ? -1 : 1),
                  }}
                  transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="intro-content">
              {/* Animated MS Logo */}
              <motion.div
                initial={{ scale: 0.3, opacity: 0, filter: 'blur(20px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: EASE_CINEMA }}
              >
                <MSLogo size="lg" animate={true} />
              </motion.div>

              {/* Tagline */}
              <motion.div
                className="intro-tagline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: EASE_CINEMA }}
              >
                You're about to discover
              </motion.div>

              {/* Name reveal */}
              <motion.h1
                className="intro-name"
                initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: 0.8, ease: EASE_CINEMA }}
              >
                Mijash <span className="intro-name-accent">Sunar</span>
              </motion.h1>

              {/* Role */}
              <motion.div
                className="intro-role"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1, ease: EASE_CINEMA }}
              >
                Full Stack Developer & Digital Strategist
              </motion.div>

              {/* Progress bar */}
              <motion.div
                className="intro-progress-track"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.3 }}
              >
                <motion.div
                  className="intro-progress-bar"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>

              {/* Call to action */}
              <motion.div
                className="intro-cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.5, 1] }}
                transition={{ duration: 1.5, delay: 1.4, repeat: Infinity, repeatDelay: 0.8 }}
              >
                <ChevronDown size={18} />
                <span>Scroll or click to enter</span>
                <ChevronDown size={18} />
              </motion.div>
            </div>

            {/* Corner decorations */}
            <motion.div
              className="intro-corner intro-corner-tl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: EASE_CINEMA }}
            />
            <motion.div
              className="intro-corner intro-corner-br"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease: EASE_CINEMA }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="grain" />

      {/* ===== HEADER ===== */}
      <motion.header
        className="site-header"
        initial={{ y: -80, opacity: 0 }}
        animate={isDone ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE_CINEMA }}
      >
        <motion.div
          className="header-brand"
          onClick={() => goTo(0)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <MSLogo size="sm" />
          MIJASH SUNAR
        </motion.div>

        <nav className="header-nav">
          {LABELS.map((l, i) => (
            <motion.button
              key={i}
              className={`header-link ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
            >
              {l}
              {i === current && (
                <motion.div
                  className="nav-active-indicator"
                  layoutId="navIndicator"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        <div className="header-actions">
          <motion.button
            className="mobile-menu-toggle"
            onClick={() => setMobileNav(!mobileNav)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Menu"
          >
            {mobileNav ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            whileHover={{ rotate: 180, scale: 1.1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.4 }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>
          <motion.button
            className="header-cta"
            onClick={() => goTo(6)}
            whileHover={{ scale: 1.05, boxShadow: '0 0 32px rgba(31,217,160,0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </div>
      </motion.header>

      {/* ===== MOBILE NAV OVERLAY ===== */}
      <AnimatePresence>
        {mobileNav && (
          <motion.div
            className="mobile-nav-overlay"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4 }}
          >
            <nav className="mobile-nav-list">
              {LABELS.map((l, i) => (
                <motion.button
                  key={i}
                  className={`mobile-nav-item ${i === current ? 'active' : ''}`}
                  onClick={() => { goTo(i); setMobileNav(false); }}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_CINEMA }}
                  whileHover={{ x: 10 }}
                >
                  <span className="mobile-nav-num">0{i + 1}</span>
                  {l}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== NAV DOTS ===== */}
      <motion.div
        id="progress"
        initial={{ x: 30, opacity: 0 }}
        animate={isDone ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE_CINEMA }}
      >
        {LABELS.map((l, i) => (
          <motion.div
            className={`dot-wrap ${i === current ? 'active' : ''}`}
            key={i}
            onClick={() => goTo(i)}
            role="button"
            aria-label={`Go to ${l}`}
            whileHover={{ x: -4 }}
          >
            <motion.div
              className="dot"
              animate={i === current ? {
                scale: [1, 1.5, 1.3],
                boxShadow: ['0 0 0px var(--emerald)', '0 0 18px var(--emerald)', '0 0 14px var(--emerald)'],
              } : { scale: 1, boxShadow: '0 0 0px transparent' }}
              transition={{ duration: 0.5 }}
            />
            <span className="dot-label">{l}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== SCENE STAGE ===== */}
      <div id="stage">
        {scenes.map((comp, i) => (
          <div className={`scene ${cls[i]} ${i === current ? 'active' : ''}`} key={i} style={style(i)}>
            {comp}
          </div>
        ))}
      </div>

      {/* ===== SECTION COUNTER ===== */}
      <motion.div
        className="section-counter"
        initial={{ opacity: 0 }}
        animate={isDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            className="counter-current"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_CINEMA }}
          >
            0{current + 1}
          </motion.span>
        </AnimatePresence>
        <span className="counter-sep">/</span>
        <span className="counter-total">0{total}</span>
      </motion.div>
    </>
  );
}

export default App;
