import { Code2, Server, Globe, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  TiltCard,
  StaggerContainer,
  ParallaxLayer,
  FloatingElement,
  LineReveal,
} from './AnimationUtils';
import { ease, staggerItemFromRight } from './AnimationPresets';

const aboutCards = [
  { icon: <Code2 size={22} />, title: 'MERN & Next.js Systems', desc: 'Engineering scalable, production-grade applications with clean code, TypeScript, and modern state architectures.' },
  { icon: <Server size={22} />, title: 'Fintech & Tech Leadership', desc: 'Leading import/export pipelines, Fortnox integrations, and payment settlement workflows on live Swedish fintech platform Splitgrid.' },
  { icon: <Globe size={22} />, title: 'Independent Delivery (20+ Sites)', desc: 'End-to-end design, development, and deployment across healthcare, educational institutions, and businesses.' },
  { icon: <GraduationCap size={22} />, title: 'Senior Instructor & AI Trainer', desc: 'Best Employee awardee delivering 15-day AI Tools training for Citizen Life Insurance leaders, plus MERN/Laravel courses.' },
];

const About = ({ isActive = false }) => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Parallax decorative elements */}
      <ParallaxLayer speed={0.2} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={12} duration={9} delay={0} style={{ position: 'absolute', top: '10%', right: '8%' }}>
          <div className="cinema-particle cinema-particle--accent" />
        </FloatingElement>
        <FloatingElement amplitude={10} duration={11} delay={3} style={{ position: 'absolute', bottom: '15%', left: '5%' }} rotate>
          <div className="cinema-particle cinema-particle--md" />
        </FloatingElement>
      </ParallaxLayer>

      <div className="about-left" style={{ zIndex: 2 }}>
        {/* Section label with slide */}
        <SlideIn isActive={isActive} direction="left" delay={0.1} distance={30}>
          <div className="section-label">About Me</div>
        </SlideIn>

        {/* Heading with dramatic word reveal */}
        <TextReveal
          text="Engineering Scalable Systems & Mentoring Talent"
          isActive={isActive}
          delay={0.2}
          className="section-heading"
          as="h2"
          staggerDelay={0.05}
          direction="up"
        />

        <LineReveal isActive={isActive} delay={0.6} className="about-line-reveal" />

        {/* Paragraphs with sequential text reveals */}
        <TextReveal
          text="I am Mijash Sunar, a Software Engineer, Tech Lead, and Senior Instructor based in Pokhara, Nepal. I specialize in Next.js and the MERN Stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience building scalable, production-grade web applications—including leading core integrations for Splitgrid, a live Sweden-based fintech platform handling payment and inventory workflows."
          isActive={isActive}
          delay={0.7}
          className="about-text"
          as="p"
          staggerDelay={0.012}
        />

        <TextReveal
          text="Equipped with expertise across TypeScript, PHP, Laravel, and WordPress, I have independently designed, built, and deployed 20+ live production websites for healthcare institutions (Fewacity Hospital, Noble Hospital), academic schools (Kantipur Academy, Rainbow Academic, Balkalyan, and 7+ others), and commercial enterprises (GAMA Pokhara, PABSON Kaski, Monika Suppliers, and more)."
          isActive={isActive}
          delay={1.0}
          className="about-text"
          as="p"
          staggerDelay={0.01}
        />

        <TextReveal
          text="Recognized as Best Employee at Niti Academy (2025–2026), I delivered an intensive 15-day AI Tools crash course to 30 employees of Citizen Life Insurance across Gandaki Province—training staff at all levels including the MD and Branch Managers on practical AI adoption. Currently completing my BSc. CSIT at Soch College of IT, my journey is driven by solving real-world challenges under production constraints."
          isActive={isActive}
          delay={1.3}
          className="about-text"
          as="p"
          staggerDelay={0.009}
        />
      </div>

      {/* About cards with stagger + 3D tilt */}
      <StaggerContainer
        isActive={isActive}
        staggerDelay={0.12}
        startDelay={0.4}
        className="about-right"
        style={{ zIndex: 2 }}
      >
        {aboutCards.map((card, i) => (
          <motion.div key={i} variants={staggerItemFromRight}>
            <TiltCard
              className="about-card"
              intensity={8}
              glowColor="rgba(31,217,160,0.12)"
              scale={1.03}
            >
              <motion.div
                className="about-card-icon"
                initial={{ rotate: -20, scale: 0 }}
                animate={isActive ? { rotate: 0, scale: 1 } : { rotate: -20, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: ease.elastic }}
              >
                {card.icon}
              </motion.div>
              <div className="about-card-title">{card.title}</div>
              <div className="about-card-desc">{card.desc}</div>
            </TiltCard>
          </motion.div>
        ))}
      </StaggerContainer>
    </div>
  );
};

export default About;
