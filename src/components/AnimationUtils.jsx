import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';

/* ============================================================
   EASING PRESETS — Premium cinematic easing curves
   ============================================================ */
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  cinematic: [0.76, 0, 0.24, 1],
  elastic: [0.175, 0.885, 0.32, 1.275],
  snap: [0.16, 1, 0.3, 1],
  glide: [0.22, 1, 0.36, 1],
  dramatic: [0.6, 0.01, 0.05, 0.95],
};

/* ============================================================
   STAGGERED CONTAINER — Orchestrates child animations
   ============================================================ */
export const StaggerContainer = ({
  children,
  isActive,
  staggerDelay = 0.08,
  startDelay = 0.2,
  className = '',
  style = {},
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: startDelay,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };

  return (
    <motion.div
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isActive ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   TEXT REVEAL — Word-by-word cinematic text reveal
   ============================================================ */
export const TextReveal = ({
  text,
  isActive,
  delay = 0,
  className = '',
  as: Tag = 'div',
  staggerDelay = 0.035,
  direction = 'up', // 'up', 'down', 'left', 'right'
}) => {
  const words = text.split(' ');

  const getInitial = () => {
    switch (direction) {
      case 'down': return { y: -40, opacity: 0, filter: 'blur(8px)' };
      case 'left': return { x: 40, opacity: 0, filter: 'blur(8px)' };
      case 'right': return { x: -40, opacity: 0, filter: 'blur(8px)' };
      default: return { y: 40, opacity: 0, filter: 'blur(8px)' };
    }
  };

  const wordVariant = {
    hidden: getInitial(),
    visible: (i) => ({
      y: 0,
      x: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        delay: delay + i * staggerDelay,
        ease: ease.cinematic,
      },
    }),
  };

  return (
    <Tag className={`text-reveal ${className}`} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariant}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          style={{ display: 'inline-block' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

/* ============================================================
   CHAR REVEAL — Letter-by-letter reveal for headings
   ============================================================ */
export const CharReveal = ({
  text,
  isActive,
  delay = 0,
  className = '',
  as: Tag = 'h1',
  staggerDelay = 0.025,
  children,
}) => {
  const chars = text.split('');

  const charVariant = {
    hidden: { y: 60, opacity: 0, rotateX: -60, filter: 'blur(4px)' },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        delay: delay + i * staggerDelay,
        ease: ease.cinematic,
      },
    }),
  };

  return (
    <Tag className={`char-reveal ${className}`} style={{ display: 'flex', flexWrap: 'wrap', perspective: '600px' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={charVariant}
          initial="hidden"
          animate={isActive ? 'visible' : 'hidden'}
          style={{ display: 'inline-block', transformOrigin: 'bottom center', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {children}
    </Tag>
  );
};

/* ============================================================
   SLIDE IN — Directional slide animation
   ============================================================ */
export const SlideIn = ({
  children,
  isActive,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 60,
  className = '',
  style = {},
  scale = 1,
  rotate = 0,
}) => {
  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  return (
    <motion.div
      className={className}
      style={style}
      initial={{
        ...directions[direction],
        opacity: 0,
        scale: scale === 1 ? 0.95 : scale,
        rotate: rotate,
        filter: 'blur(6px)',
      }}
      animate={
        isActive
          ? { y: 0, x: 0, opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }
          : { ...directions[direction], opacity: 0, scale: scale === 1 ? 0.95 : scale, rotate: rotate, filter: 'blur(6px)' }
      }
      transition={{
        duration,
        delay,
        ease: ease.cinematic,
      }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   SCALE REVEAL — Scale + fade animation
   ============================================================ */
export const ScaleReveal = ({
  children,
  isActive,
  delay = 0,
  duration = 0.6,
  className = '',
  style = {},
  fromScale = 0.8,
}) => (
  <motion.div
    className={className}
    style={style}
    initial={{ scale: fromScale, opacity: 0, filter: 'blur(10px)' }}
    animate={
      isActive
        ? { scale: 1, opacity: 1, filter: 'blur(0px)' }
        : { scale: fromScale, opacity: 0, filter: 'blur(10px)' }
    }
    transition={{ duration, delay, ease: ease.cinematic }}
  >
    {children}
  </motion.div>
);

/* ============================================================
   3D TILT CARD — Mouse-tracking 3D perspective card
   ============================================================ */
export const TiltCard = ({
  children,
  className = '',
  style = {},
  intensity = 12,
  glowColor = 'rgba(31,217,160,0.15)',
  perspective = 800,
  scale = 1.02,
}) => {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -intensity,
      y: (x - 0.5) * intensity,
    });
    setGlowPos({ x: x * 100, y: y * 100 });
  }, [intensity]);

  const handleLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...style,
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: isHovered ? scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
    >
      {/* Dynamic glow overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 'inherit',
          background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>
    </motion.div>
  );
};

/* ============================================================
   MAGNETIC BUTTON — Interactive magnetic hover effect
   ============================================================ */
export const MagneticButton = ({
  children,
  className = '',
  style = {},
  strength = 0.3,
  ...props
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouse = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  }, [strength]);

  return (
    <motion.button
      ref={ref}
      className={className}
      style={style}
      onMouseMove={handleMouse}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/* ============================================================
   FLOATING ELEMENT — Ambient floating animation
   ============================================================ */
export const FloatingElement = ({
  children,
  amplitude = 15,
  duration = 6,
  delay = 0,
  className = '',
  style = {},
  rotate = false,
}) => (
  <motion.div
    className={className}
    style={style}
    animate={{
      y: [0, -amplitude, 0, amplitude * 0.5, 0],
      x: [0, amplitude * 0.3, 0, -amplitude * 0.3, 0],
      rotate: rotate ? [0, 3, 0, -3, 0] : 0,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

/* ============================================================
   PARALLAX WRAPPER — Scroll-independent parallax layer
   ============================================================ */
export const ParallaxLayer = ({
  children,
  speed = 0.5,
  className = '',
  style = {},
}) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * speed * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * speed * 30;
      setOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      animate={{ x: offset.x || 0, y: offset.y || 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 30, mass: 1 }}
    >
      {children}
    </motion.div>
  );
};

/* ============================================================
   LINE REVEAL — Animated line/divider reveal
   ============================================================ */
export const LineReveal = ({
  isActive,
  delay = 0,
  color = 'var(--emerald)',
  height = '1px',
  className = '',
  direction = 'left', // 'left' or 'center'
}) => (
  <motion.div
    className={className}
    style={{
      height,
      background: `linear-gradient(90deg, ${color}, transparent)`,
      transformOrigin: direction === 'center' ? 'center' : 'left',
    }}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={isActive ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
    transition={{ duration: 0.8, delay, ease: ease.cinematic }}
  />
);

/* ============================================================
   COUNTER ANIMATION — Animated number counter
   ============================================================ */
export const AnimatedCounter = ({
  value,
  isActive,
  delay = 0,
  duration = 2,
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value);

  useEffect(() => {
    if (!isActive) {
      setCount(0);
      return;
    }
    
    const timeout = setTimeout(() => {
      let start = 0;
      const stepTime = (duration * 1000) / numericValue;
      const counter = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= numericValue) clearInterval(counter);
      }, stepTime);
      return () => clearInterval(counter);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [isActive, numericValue, delay, duration]);

  return (
    <motion.span
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5, delay, ease: ease.elastic }}
    >
      {count}{suffix}
    </motion.span>
  );
};

/* ============================================================
   STAGGER ITEM — Individual stagger child (for variants)
   ============================================================ */
export const staggerItemVariants = {
  hidden: { y: 30, opacity: 0, filter: 'blur(6px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: ease.cinematic,
    },
  },
};

export const staggerItemFromLeft = {
  hidden: { x: -40, opacity: 0, filter: 'blur(6px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: ease.cinematic,
    },
  },
};

export const staggerItemFromRight = {
  hidden: { x: 40, opacity: 0, filter: 'blur(6px)' },
  visible: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: ease.cinematic,
    },
  },
};

export const staggerItemScale = {
  hidden: { scale: 0.8, opacity: 0, filter: 'blur(8px)' },
  visible: {
    scale: 1,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: ease.elastic,
    },
  },
};
