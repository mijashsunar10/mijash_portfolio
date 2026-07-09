import { Globe, Server, Wrench, Palette, Database, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  TiltCard,
  ParallaxLayer,
  FloatingElement,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const skillData = [
  {
    name: 'Frontend',
    icon: <Layout size={16} />,
    skills: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Alpine JS', 'Livewire'],
  },
  {
    name: 'Backend',
    icon: <Server size={16} />,
    skills: ['Laravel', 'PHP', 'Node JS', 'Express JS', 'REST API', 'WordPress'],
  },
  {
    name: 'Database',
    icon: <Database size={16} />,
    skills: ['MySQL', 'MongoDB', 'Postgres SQL'],
  },
  {
    name: 'DevOps & Tools',
    icon: <Wrench size={16} />,
    skills: ['Git', 'VS Code Extensions', 'Filezilla', 'cPanel', 'Photoshop'],
  },
  {
    name: 'Digital Marketing',
    icon: <Globe size={16} />,
    skills: ['SEO', 'Content Strategy', 'Social Media', 'Paid Ads', 'Analytics'],
  },
  {
    name: 'Other',
    icon: <Palette size={16} />,
    skills: ['Web Design', 'Teaching', 'Technical Writing', 'Project Management'],
  },
];

// Each card enters from a unique direction based on grid position
const cardDirections = [
  { x: -50, y: -30, rotate: -5 },
  { x: 0, y: -50, rotate: 0 },
  { x: 50, y: -30, rotate: 5 },
  { x: -50, y: 30, rotate: 5 },
  { x: 0, y: 50, rotate: 0 },
  { x: 50, y: 30, rotate: -5 },
];

const Skills = ({ isActive = false }) => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Floating geometric shapes */}
      <ParallaxLayer speed={0.25} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={14} duration={8} delay={0} style={{ position: 'absolute', top: '8%', left: '12%' }}>
          <div className="cinema-geo cinema-geo--triangle" />
        </FloatingElement>
        <FloatingElement amplitude={10} duration={10} delay={2} style={{ position: 'absolute', bottom: '12%', right: '10%' }} rotate>
          <div className="cinema-geo cinema-geo--circle" />
        </FloatingElement>
        <FloatingElement amplitude={16} duration={7} delay={4} style={{ position: 'absolute', top: '50%', left: '3%' }}>
          <div className="cinema-geo cinema-geo--square" />
        </FloatingElement>
      </ParallaxLayer>

      <div className="showcase-head" style={{ zIndex: 2 }}>
        <SlideIn isActive={isActive} direction="up" delay={0.05} distance={25}>
          <div className="section-label">Tech Stack</div>
        </SlideIn>
        <TextReveal
          text="Skills & Technologies"
          isActive={isActive}
          delay={0.15}
          className="section-heading"
          as="h2"
          staggerDelay={0.04}
        />
      </div>

      <div className="skill-categories" style={{ zIndex: 2 }}>
        {skillData.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{
              x: cardDirections[i].x,
              y: cardDirections[i].y,
              rotate: cardDirections[i].rotate,
              opacity: 0,
              scale: 0.85,
              filter: 'blur(8px)',
            }}
            animate={
              isActive
                ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1, filter: 'blur(0px)' }
                : {
                    x: cardDirections[i].x,
                    y: cardDirections[i].y,
                    rotate: cardDirections[i].rotate,
                    opacity: 0,
                    scale: 0.85,
                    filter: 'blur(8px)',
                  }
            }
            transition={{
              duration: 0.7,
              delay: 0.3 + i * 0.1,
              ease: ease.cinematic,
            }}
          >
            <TiltCard
              className="skill-category"
              intensity={10}
              glowColor="rgba(31,217,160,0.1)"
              scale={1.04}
            >
              <motion.div
                className="skill-cat-name"
                initial={{ x: -15, opacity: 0 }}
                animate={isActive ? { x: 0, opacity: 1 } : { x: -15, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: ease.cinematic }}
              >
                <motion.span
                  initial={{ rotate: -180, scale: 0 }}
                  animate={isActive ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: ease.elastic }}
                >
                  {cat.icon}
                </motion.span>
                {cat.name}
              </motion.div>
              <div className="skill-pills">
                {cat.skills.map((s, j) => (
                  <motion.span
                    className="skill-pill"
                    key={s}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.7 + i * 0.08 + j * 0.04,
                      ease: ease.elastic,
                    }}
                    whileHover={{
                      scale: 1.12,
                      y: -3,
                      boxShadow: '0 8px 20px rgba(31,217,160,0.2)',
                    }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
