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
    date: '11/2025 — Present',
    role: 'Software Engineer / Tech Lead',
    company: 'MoreTech Global · Remote',
    desc: [
      'Lead the import/export systems for Splitgrid, a live Sweden-based fintech platform owning integrations across 8+ POS/e-commerce platforms (Shopify, Zettle, Sitoo, Fortnox) and building new ones from scratch.',
      'Redesigned the legacy inventory import process into a transaction-safe pipeline with template-based mapping, preview-before-commit, and per-row error reporting.',
      'Fixed settlement calculation bugs in the ZTL/Zignsec export module, resolving reconciliation errors on live retailer-supplier payments.',
      'Built invoicing and voucher-export logic on Fortnox, and maintain export tooling across CSV, XLSX, PDF, and SIE formats for reports and settlements.',
    ],
  },
  {
    date: '03/2025 — Present',
    role: 'Full Stack Web Developer / Senior Instructor',
    company: 'Niti Academy · On-Site, Pokhara',
    desc: [
      'Delivered a 15-day AI Tools crash course around 30 employees of Citizen Life Insurance across Gandaki Province, training staff at all levels including the MD and Branch Managers on practical AI tool adoption for daily operations.',
      'Independently designed, built, and deployed 20+ live production websites for clients across healthcare, education, and business sectors, handling requirements gathering through deployment end-to-end.',
      'Delivered business and organizational sites for GAMA Pokhara, PABSON Kaski, Monika Suppliers, Sadabahar UPVC, Niti Press, Lakecity Rental, Raghunath Wagle, and Baburam Baral, plus Niti Academy\'s own corporate website.',
      'Developed responsive, user-friendly websites for Fewacity Hospital and Noble Hospital, providing healthcare information, service details, and better user experience.',
      'Developed individual websites for schools and institutions including Kantipur Academy, Rainbow Academic, Baseline Academy, Balkalyan High School, Jyotikunj School, Dhungesanghu School, Bhasker Memorial, National Creation Academy, Manakamana Chhatrabas, and BBA College.',
      'Conducted AI tools training sessions for students of Nepal Adarsha Awasiya Vidyalaya (NAAV), Lekhnath, and taught Digital Marketing, Basic SEO, and Web Development to students at Niti Academy.',
    ],
  },
  {
    date: '03/2024 — 03/2025',
    role: 'Full Stack Web Developer',
    company: 'Freelancer / Self Employed · Birauta, Pokhara',
    desc: [
      'Developed a responsive and fully dynamic tourism website for Dawn in Nepal Adventures P. Ltd, featuring admin-managed content and booking functionality.',
      'Built a fully dynamic bakery school website for School of Bakery and Pastry Technology, including admin controls, email integration, and seamless cross-device experience.',
      'Developed a modern Mental Health & Rehabilitation platform for my final year defence, integrating online payments, Cloudinary, real-time chat, Jitsi-based video therapy, and an AI-powered chatbot.',
      'Developed a Laravel-based collaborative story writing platform with real-time co-authoring, interactive features, Esewa payment integration, chat, games, and user activity tracking for an engaging experience.',
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
