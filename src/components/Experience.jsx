import { motion } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  ParallaxLayer,
  FloatingElement,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const experiences = [
  {
    date: 'Nov 2025 — Present',
    role: 'Software Engineer',
    company: 'MoreTech Global · Remote',
    desc: [
      'Currently working as a Software Engineer on Splitgrid, a Sweden-based fintech platform that automates revenue distribution and payment workflows between retailers and suppliers.',
      'Contributing to both frontend and backend development by building scalable features, integrating APIs, and enhancing the platform\'s performance, security, and reliability.',
    ],
  },
  {
    date: 'Mar 2025 — Present',
    role: 'Full Stack Developer & Senior Instructor',
    company: 'Niti Academy · Nayabazar, Pokhara',
    desc: [
      'Developed responsive websites for Fewacity Hospital and Noble Hospital with seamless appointment booking functionality.',
      'Built individual websites for multiple schools in Pokhara including Blooming Buds Academy, Rainbow Academic Homes, and more, focusing on academic info and admissions.',
      'Developed business websites for Monika Tyre Suppliers, Niti Academy, and GAMA Pokhara with modern design and service-focused structure.',
      'Served as Instructor for Digital Marketing, WordPress, SEO, AI Tools, MERN Stack Development, and PHP & Laravel.',
    ],
  },
  {
    date: 'Mar 2024 — Mar 2025',
    role: 'Freelancer',
    company: 'Self Employed · Birauta, Pokhara',
    desc: [
      'Developed responsive tourism and bakery school websites with admin-managed content, email integration, and booking functionality.',
      'Developed a fully functional and responsive resort website for Alfanzoo Resort in Lakeside Pokhara.',
      'Created a Mental Health & Rehabilitation platform integrating online payments, Cloudinary, real-time chat, Jitsi-based video therapy, and an AI chatbot.',
      'Built a Laravel-based collaborative story writing platform with real-time co-authoring, Esewa payment integration, chat, and games.',
    ],
  },
];

// Timeline items alternate sliding from left/right for visual variety
const getCardAnimation = (i) => {
  const isEven = i % 2 === 0;
  return {
    initial: {
      x: isEven ? -60 : 60,
      y: 20,
      opacity: 0,
      scale: 0.92,
      filter: 'blur(6px)',
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
    },
  };
};

const Experience = ({ isActive = false }) => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Parallax ambient elements */}
      <ParallaxLayer speed={0.15} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={8} duration={12} delay={0} style={{ position: 'absolute', top: '5%', right: '5%' }}>
          <div className="cinema-particle cinema-particle--accent" />
        </FloatingElement>
        <FloatingElement amplitude={14} duration={9} delay={3} style={{ position: 'absolute', bottom: '10%', left: '8%' }} rotate>
          <div className="cinema-particle cinema-particle--lg" />
        </FloatingElement>
      </ParallaxLayer>

      <div className="showcase-head" style={{ zIndex: 2 }}>
        <SlideIn isActive={isActive} direction="up" delay={0.05} distance={25}>
          <div className="section-label">Career Path</div>
        </SlideIn>
        <TextReveal
          text="Work Experience"
          isActive={isActive}
          delay={0.15}
          className="section-heading"
          as="h2"
          staggerDelay={0.05}
        />
      </div>

      <div className="timeline" style={{ zIndex: 2 }}>
        {/* Animated timeline line */}
        <motion.div
          className="timeline-line-animated"
          initial={{ scaleY: 0 }}
          animate={isActive ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: ease.cinematic }}
          style={{
            position: 'absolute',
            left: 12,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, var(--emerald), var(--purple), var(--glass-border))',
            transformOrigin: 'top',
          }}
        />

        {experiences.map((exp, i) => {
          const anim = getCardAnimation(i);
          return (
            <motion.div
              className="timeline-item"
              key={i}
              initial={anim.initial}
              animate={isActive ? anim.animate : anim.initial}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.2,
                ease: ease.cinematic,
              }}
              whileHover={{
                x: 8,
                borderColor: 'rgba(31,217,160,0.4)',
                boxShadow: '0 16px 40px -12px rgba(31,217,160,0.15)',
                transition: { duration: 0.3 },
              }}
            >
              {/* Animated timeline dot */}
              <motion.div
                className="timeline-dot-animated"
                initial={{ scale: 0, opacity: 0 }}
                animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + i * 0.2,
                  ease: ease.elastic,
                }}
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
              />

              <motion.div
                className="timeline-date"
                initial={{ opacity: 0, x: -10 }}
                animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.2, ease: ease.cinematic }}
              >
                {exp.date}
              </motion.div>

              <motion.div
                className="timeline-role"
                initial={{ opacity: 0, y: 8 }}
                animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.2, ease: ease.cinematic }}
              >
                {exp.role}
              </motion.div>

              <motion.div
                className="timeline-company"
                initial={{ opacity: 0 }}
                animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.2, ease: ease.cinematic }}
              >
                {exp.company}
              </motion.div>

              <ul className="timeline-desc">
                {exp.desc.map((d, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.85 + i * 0.2 + j * 0.06,
                      ease: ease.cinematic,
                    }}
                  >
                    {d}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
