import { Code2, Megaphone, GraduationCap, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  TiltCard,
  StaggerContainer,
  staggerItemFromRight,
  ParallaxLayer,
  FloatingElement,
  LineReveal,
  ease,
} from './AnimationUtils';

const aboutCards = [
  { icon: <Code2 size={22} />, title: 'Full Stack Developer', desc: 'Laravel, React, MERN Stack, WordPress — building end-to-end scalable web applications.' },
  { icon: <Megaphone size={22} />, title: 'Digital Marketing Expert', desc: 'Strategy-driven campaigns that improve online visibility and deliver measurable growth.' },
  { icon: <Search size={22} />, title: 'SEO Expert', desc: 'Technical & on-page SEO to help businesses rank higher and reach the right audience.' },
  { icon: <GraduationCap size={22} />, title: 'Senior Instructor', desc: 'Teaching PHP, Laravel, MERN Stack, and Digital Marketing to the next generation of developers.' },
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
          text="I am Mijash Sunar, a Web Developer, Digital Marketing Specialist, SEO Expert, and Technical Instructor based in Pokhara, Nepal, with extensive hands-on experience in building scalable web applications and developing effective digital strategies."
          isActive={isActive}
          delay={0.7}
          className="about-text"
          as="p"
          staggerDelay={0.015}
        />

        <TextReveal
          text="I specialize in modern web development technologies including Laravel, Livewire, MySQL, Blade templating, JavaScript, Node.js, React, the MERN stack, and WordPress — enabling me to design and develop high-performance and scalable digital solutions."
          isActive={isActive}
          delay={1.0}
          className="about-text"
          as="p"
          staggerDelay={0.012}
        />

        <TextReveal
          text="Alongside development, I work in digital marketing and SEO, helping businesses improve their online visibility, reach the right audience, and achieve measurable growth. I am also actively involved in technical training and mentoring, guiding students and aspiring developers in modern web development and digital technologies."
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
