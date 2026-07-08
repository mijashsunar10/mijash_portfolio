import { motion } from 'framer-motion';

/**
 * Custom animated "MS" monogram logo — premium SVG-based.
 * Sizes: 'sm' (header), 'md' (intro), 'lg' (loading)
 */
const sizeMap = {
  sm: 32,
  md: 64,
  lg: 90,
};

const MSLogo = ({ size = 'sm', animate = false, className = '' }) => {
  const px = sizeMap[size] || sizeMap.sm;

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        opacity: { duration: 0.4 },
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={`ms-logo ${className}`}
      style={{
        width: px,
        height: px,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      whileHover={size === 'sm' ? { scale: 1.1, rotate: 5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <svg
        viewBox="0 0 100 100"
        width={px}
        height={px}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="msGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--emerald)" />
            <stop offset="100%" stopColor="var(--purple)" />
          </linearGradient>
          <linearGradient id="msGradReverse" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--emerald)" />
            <stop offset="50%" stopColor="var(--purple)" />
            <stop offset="100%" stopColor="var(--blue)" />
          </linearGradient>
          <filter id="msGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#msGradReverse)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          variants={animate ? pathVariants : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          style={{ opacity: animate ? undefined : 1 }}
        />

        {/* Inner subtle ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="url(#msGrad)"
          strokeWidth="0.5"
          strokeDasharray="4 6"
          fill="none"
          variants={animate ? {
            hidden: { opacity: 0 },
            visible: { opacity: 0.4, transition: { duration: 0.3, delay: 0.4 } },
          } : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          style={{ opacity: animate ? undefined : 0.4 }}
        />

        {/* M letter */}
        <motion.path
          d="M 25 70 L 25 35 L 38 55 L 50 35 L 50 70"
          stroke="url(#msGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#msGlow)"
          variants={animate ? {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 0.6, delay: 0.1, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.2, delay: 0.1 },
              },
            },
          } : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          style={{ opacity: animate ? undefined : 1 }}
        />

        {/* S letter */}
        <motion.path
          d="M 72 38 C 72 32, 58 30, 58 38 C 58 46, 75 44, 75 55 C 75 66, 56 66, 56 58"
          stroke="url(#msGradReverse)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#msGlow)"
          variants={animate ? {
            hidden: { pathLength: 0, opacity: 0 },
            visible: {
              pathLength: 1,
              opacity: 1,
              transition: {
                pathLength: { duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] },
                opacity: { duration: 0.2, delay: 0.3 },
              },
            },
          } : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          style={{ opacity: animate ? undefined : 1 }}
        />

        {/* Accent dot */}
        <motion.circle
          cx="50"
          cy="80"
          r="2"
          fill="var(--emerald)"
          variants={animate ? glowVariants : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          style={{ opacity: animate ? undefined : 1 }}
        />
      </svg>
    </motion.div>
  );
};

export default MSLogo;
