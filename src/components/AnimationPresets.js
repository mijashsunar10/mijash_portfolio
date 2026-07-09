/* ============================================================
   ANIMATION PRESETS & EASING — Easing curves and motion variants
   ============================================================ */

export const ease = {
  smooth: [0.25, 0.1, 0.25, 1],
  cinematic: [0.76, 0, 0.24, 1],
  elastic: [0.175, 0.885, 0.32, 1.275],
  snap: [0.16, 1, 0.3, 1],
  glide: [0.22, 1, 0.36, 1],
  dramatic: [0.6, 0.01, 0.05, 0.95],
};

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
