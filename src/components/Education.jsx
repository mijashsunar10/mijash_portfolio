import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  ParallaxLayer,
  FloatingElement,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const education = [
  {
    degree: 'Bachelor of Science in Computer Science & IT (BSc CSIT)',
    school: 'Soch College of IT',
    period: '2021 — 2026',
    location: 'Pokhara, Nepal',
    desc: 'Tribhuvan University affiliated program focusing on software engineering, database architectures, and distributed systems. Final year defense project: Mental Health & Rehabilitation Telehealth Platform with AI chatbot.',
  },
  {
    degree: '+2 Science',
    school: 'Chhorepatan Secondary School',
    period: '2019 — 2021',
    location: 'Pokhara, Nepal',
    desc: 'Majored in Physical Sciences and Mathematics, developing core analytical reasoning and quantitative foundations.',
  },
  {
    degree: 'Secondary Education Examination (SEE)',
    school: 'Balodaya Secondary School',
    period: '2018',
    location: 'Pokhara, Nepal',
    desc: 'Graduated with distinction, demonstrating consistent academic performance in science, computing, and mathematics.',
  },
];

const achievements = [
  {
    title: 'Best Employee Award',
    org: 'Niti Academy · 2025–2026',
    badge: '🏆 Best Employee Award',
    desc: 'Recognized as Best Employee at Niti Academy in 2025–2026 for outstanding contributions across full-stack development delivery and instructor responsibilities.',
  },
  {
    title: 'Enterprise AI Training Delivery',
    org: 'Citizen Life Insurance & NAAV · Gandaki Province',
    badge: '⚡ Enterprise AI Delivery',
    desc: 'Delivered an intensive 15-day AI Tools crash course around 30 employees of Citizen Life Insurance across Gandaki Province, training staff at all levels including the MD and Branch Managers on practical AI adoption, plus sessions for NAAV students.',
  },
  {
    title: 'Scale of Independent Delivery (20+ Sites)',
    org: 'Healthcare, Education & Business Sectors',
    badge: '🌐 Independent Production Delivery',
    desc: 'Independently designed, built, and deployed 20+ live production websites for clients across healthcare (Fewacity Hospital, Noble Hospital), education (PABSON Kaski, Kantipur Academy, etc.), and diverse businesses.',
  },
  {
    title: 'Best Intern Award',
    org: 'XDEZO Technologies · 2023',
    badge: '⭐ Best Intern Award',
    desc: 'Received the Best Intern Award during a 3-month internship at XDEZO Technologies for rapid technical learning, dedication, and impactful project contributions.',
  },
  {
    title: '2nd Position in Code Camp',
    org: 'Competitive Hackathon & Coding Challenge',
    badge: '🥈 2nd Position in Code Camp',
    desc: 'Achieved 2nd place in an intensive competitive Code Camp, demonstrating strong algorithmic problem-solving and rapid coding execution under tight deadlines.',
  },
];

const Education = ({ isActive = false }) => {
  const [filter, setFilter] = useState('all'); // 'all' | 'education' | 'achievements'

  const showEducation = filter === 'all' || filter === 'education';
  const showAchievements = filter === 'all' || filter === 'achievements';

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
          <div className="section-label">Academic Path & Recognition</div>
        </SlideIn>
        <TextReveal
          text="Education & Key Achievements"
          isActive={isActive}
          delay={0.15}
          className="section-heading"
          as="h2"
          staggerDelay={0.045}
        />

        {/* Tab Filters */}
        <div className="portfolio-filters" style={{ justifyContent: 'center', marginTop: '10px' }}>
          {[
            { id: 'all', label: `All Records (${education.length + achievements.length})` },
            { id: 'education', label: `Education (${education.length})` },
            { id: 'achievements', label: `Key Achievements (${achievements.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`filter-btn ${filter === tab.id ? 'active' : ''}`}
              onClick={() => setFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
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

        <AnimatePresence mode="popLayout">
          {/* Education items */}
          {showEducation &&
            education.map((edu, i) => (
              <motion.div
                className="timeline-item edu-card"
                key={`edu-${i}`}
                initial={{ x: -50, opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                animate={isActive ? { x: 0, opacity: 1, scale: 1, filter: 'blur(0px)' } : { x: -50, opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: ease.cinematic }}
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
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.12, ease: ease.elastic }}
                />

                <motion.div
                  className="timeline-date"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.12, ease: ease.cinematic }}
                >
                  🎓 {edu.period}
                </motion.div>
                <motion.div
                  className="timeline-role"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.12, ease: ease.cinematic }}
                >
                  {edu.degree}
                </motion.div>
                <motion.div
                  className="timeline-company"
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.12, ease: ease.cinematic }}
                >
                  {edu.school} · {edu.location}
                </motion.div>
                {edu.desc && (
                  <p className="timeline-desc" style={{ marginTop: '8px', color: 'var(--ink-dim)', fontSize: '13.5px', lineHeight: '1.6' }}>
                    {edu.desc}
                  </p>
                )}
              </motion.div>
            ))}

          {/* Achievements items */}
          {showAchievements &&
            achievements.map((a, i) => (
              <motion.div
                className="timeline-item achievement-card"
                key={`ach-${i}`}
                initial={{
                  x: i % 2 === 0 ? 50 : -50,
                  y: 20,
                  opacity: 0,
                  scale: 0.9,
                  filter: 'blur(6px)',
                }}
                animate={
                  isActive
                    ? { x: 0, y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }
                    : {
                        x: i % 2 === 0 ? 50 : -50,
                        y: 20,
                        opacity: 0,
                        scale: 0.9,
                        filter: 'blur(6px)',
                      }
                }
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
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
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease: ease.elastic }}
                />

                <motion.div
                  className="timeline-date"
                  style={{ color: 'var(--purple)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.35 + i * 0.1, ease: ease.cinematic }}
                >
                  {a.badge}
                </motion.div>
                <motion.div
                  className="timeline-role"
                  initial={{ opacity: 0, y: 8 }}
                  animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: 0.45 + i * 0.1, ease: ease.cinematic }}
                >
                  {a.title}
                </motion.div>
                <motion.div
                  className="timeline-company"
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1, ease: ease.cinematic }}
                >
                  {a.org}
                </motion.div>
                <p className="timeline-desc" style={{ marginTop: '8px', color: 'var(--ink-dim)', fontSize: '13.5px', lineHeight: '1.6' }}>
                  {a.desc}
                </p>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Education;
