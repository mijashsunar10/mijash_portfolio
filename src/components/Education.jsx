import { motion } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  ParallaxLayer,
  FloatingElement,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science & IT',
    school: 'Soch College of IT',
    period: '2021 — Present',
    location: 'Pokhara, Nepal',
  }
];

const achievements = [
  { title: 'Best Intern Award', desc: 'Received during 6-month internship at XDEZO Technologies, 2023.' },
  { title: '2nd Place in Code Camp', desc: 'Achieved 2nd place demonstrating strong competitive coding skills.' },
];

const Education = ({ isActive = false }) => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Floating ambient */}
      <ParallaxLayer speed={0.2} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={10} duration={10} delay={1} style={{ position: 'absolute', top: '15%', left: '8%' }}>
          <div className="cinema-geo cinema-geo--diamond" />
        </FloatingElement>
        <FloatingElement amplitude={14} duration={8} delay={3} style={{ position: 'absolute', bottom: '20%', right: '12%' }} rotate>
          <div className="cinema-particle cinema-particle--sm" />
        </FloatingElement>
      </ParallaxLayer>

      <div className="showcase-head" style={{ zIndex: 2 }}>
        <SlideIn isActive={isActive} direction="up" delay={0.05} distance={25}>
          <div className="section-label">Academic Path</div>
        </SlideIn>
        <TextReveal
          text="Education & Achievements"
          isActive={isActive}
          delay={0.15}
          className="section-heading"
          as="h2"
          staggerDelay={0.045}
        />
      </div>

      <div className="timeline" style={{ zIndex: 2 }}>
        {/* Animated line */}
        <motion.div
          style={{
            position: 'absolute',
            left: 12,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--emerald), var(--purple), var(--glass-border))',
            transformOrigin: 'top',
          }}
          initial={{ scaleY: 0 }}
          animate={isActive ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: ease.cinematic }}
        />

        {education.map((edu, i) => (
          <motion.div
            className="timeline-item edu-card"
            key={i}
            initial={{ x: -50, opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={isActive ? { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' } : { x: -50, opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            transition={{ duration: 0.7, delay: 0.4, ease: ease.cinematic }}
            whileHover={{
              x: 8,
              borderColor: 'rgba(31,217,160,0.4)',
              boxShadow: '0 16px 40px -12px rgba(31,217,160,0.15)',
              transition: { duration: 0.3 },
            }}
          >
            {/* Animated dot */}
            <motion.div
              style={{
                position: 'absolute',
                left: -30,
                top: 24,
                width: 10,
                height: 10,
                background: 'var(--emerald)',
                borderRadius: '50%',
                boxShadow: '0 0 12px var(--emerald)',
              }}
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.55, ease: ease.elastic }}
            />

            <motion.div
              className="timeline-date"
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.55, ease: ease.cinematic }}
            >
              {edu.period}
            </motion.div>
            <motion.div
              className="timeline-role"
              initial={{ opacity: 0, y: 8 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.65, ease: ease.cinematic }}
            >
              {edu.degree}
            </motion.div>
            <motion.div
              className="timeline-company"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.75, ease: ease.cinematic }}
            >
              {edu.school} · {edu.location}
            </motion.div>
          </motion.div>
        ))}

        {/* Achievements with unique trophy/medal animation */}
        {achievements.map((a, i) => (
          <motion.div
            className="timeline-item achievement-card"
            key={'ach-' + i}
            initial={{
              x: i % 2 === 0 ? 50 : -50,
              y: 20,
              opacity: 0,
              scale: 0.88,
              rotate: i % 2 === 0 ? 3 : -3,
              filter: 'blur(6px)',
            }}
            animate={
              isActive
                ? { x: 0, y: 0, opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }
                : {
                    x: i % 2 === 0 ? 50 : -50,
                    y: 20,
                    opacity: 0,
                    scale: 0.88,
                    rotate: i % 2 === 0 ? 3 : -3,
                    filter: 'blur(6px)',
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.7 + i * 0.2,
              ease: ease.cinematic,
            }}
            whileHover={{
              x: 8,
              borderColor: 'rgba(124,92,255,0.4)',
              boxShadow: '0 16px 40px -12px rgba(124,92,255,0.15)',
              transition: { duration: 0.3 },
            }}
          >
            <motion.div
              style={{
                position: 'absolute',
                left: -30,
                top: 24,
                width: 10,
                height: 10,
                background: 'var(--purple)',
                borderRadius: '50%',
                boxShadow: '0 0 12px var(--purple)',
              }}
              initial={{ scale: 0 }}
              animate={isActive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.4, delay: 0.85 + i * 0.2, ease: ease.elastic }}
            />

            <motion.div
              className="timeline-date"
              style={{ color: 'var(--purple)' }}
              initial={{ opacity: 0, x: -10 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: 0.85 + i * 0.2, ease: ease.cinematic }}
            >
              🏆 Achievement
            </motion.div>
            <motion.div
              className="timeline-role"
              initial={{ opacity: 0, y: 8 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4, delay: 0.95 + i * 0.2, ease: ease.cinematic }}
            >
              {a.title}
            </motion.div>
            <motion.div
              className="timeline-company"
              initial={{ opacity: 0 }}
              animate={isActive ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 1.05 + i * 0.2, ease: ease.cinematic }}
            >
              {a.desc}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
