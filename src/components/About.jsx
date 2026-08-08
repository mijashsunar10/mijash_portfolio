import { Code2, Megaphone, GraduationCap, Search } from 'lucide-react';
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
  { icon: <Code2 size={22} />, title: 'MERN Stack & Next.js', desc: 'Building modern, scalable, and high-performance web applications.' },
  { icon: <Megaphone size={22} />, title: 'PHP & Laravel Developer', desc: 'Experienced in developing diverse web applications with PHP, Laravel, and WordPress.' },
  { icon: <Search size={22} />, title: 'Responsive Web Design', desc: 'Creating responsive, user-friendly interfaces with clean, maintainable code.' },
  { icon: <GraduationCap size={22} />, title: 'Technical Instructor', desc: 'Teaching MERN Stack, PHP, Laravel, WordPress, and Digital Marketing.' },
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
          text="Crafting Digital Experiences That Matter"
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
          text="I am Mijash Sunar, a passionate and goal-driven Full Stack Web Developer based in Pokhara, Nepal, with strong expertise in the MERN Stack (MongoDB, Express.js, React.js, and Node.js) and Next.js, specializing in building modern, scalable, and high-performance web applications."
          isActive={isActive}
          delay={0.7}
          className="about-text"
          as="p"
          staggerDelay={0.015}
        />

        <TextReveal
          text="I focus on creating responsive, user-friendly interfaces and writing clean, maintainable code to deliver efficient digital solutions. I also have experience with PHP, Laravel, and WordPress, enabling me to work across diverse web development projects while continuously adapting to the latest technologies and industry best practices."
          isActive={isActive}
          delay={1.0}
          className="about-text"
          as="p"
          staggerDelay={0.012}
        />

        <TextReveal
          text="Currently pursuing my BSc. CSIT at Soch College of IT, I also work as a Senior Instructor, teaching MERN Stack, PHP & Laravel, and Digital Marketing, mentoring the next generation of developers."
          isActive={isActive}
          delay={1.3}
          className="about-text"
          as="p"
          staggerDelay={0.01}
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
