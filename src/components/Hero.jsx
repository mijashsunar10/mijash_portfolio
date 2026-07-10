import { Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/mijash.jpeg';
import {
  TextReveal,
  CharReveal,
  SlideIn,
  FloatingElement,
  ParallaxLayer,
  MagneticButton,
  AnimatedCounter,
  LineReveal,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const Hero = ({ onContact, isActive = false }) => (
  <div className="scene-inner">
    <div className="depth-grid" />
    
    {/* Cinematic floating particles */}
    <ParallaxLayer speed={0.3} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      <FloatingElement amplitude={20} duration={8} delay={0} style={{ position: 'absolute', top: '15%', left: '10%' }}>
        <div className="cinema-particle cinema-particle--lg" />
      </FloatingElement>
      <FloatingElement amplitude={15} duration={10} delay={2} style={{ position: 'absolute', top: '60%', left: '25%' }}>
        <div className="cinema-particle cinema-particle--sm" />
      </FloatingElement>
      <FloatingElement amplitude={12} duration={7} delay={4} style={{ position: 'absolute', top: '30%', right: '15%' }}>
        <div className="cinema-particle cinema-particle--md" />
      </FloatingElement>
      <FloatingElement amplitude={18} duration={9} delay={1} style={{ position: 'absolute', bottom: '20%', right: '30%' }} rotate>
        <div className="cinema-particle cinema-particle--xs" />
      </FloatingElement>
    </ParallaxLayer>

    <div className="hero-content" style={{ zIndex: 2 }}>
      {/* Greeting with slide-in line */}
      <SlideIn isActive={isActive} direction="left" delay={0.1} distance={40}>
        <div className="hero-greeting">Hi, I am</div>
      </SlideIn>

      {/* Name with character-by-character reveal */}
      <CharReveal
        text="Mijash "
        isActive={isActive}
        delay={0.3}
        className="hero-name"
        staggerDelay={0.04}
      >
        <motion.span
          className="glow"
          initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
          animate={isActive ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 50, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, delay: 0.65, ease: ease.cinematic }}
        >
          Sunar
        </motion.span>
      </CharReveal>

      {/* Tags with staggered scale animation */}
      <div className="hero-titles">
        {['Full Stack Developer', 'Digital Marketing Instructor', 'SEO Expert', 'Senior Instructor'].map((tag, i) => (
          <motion.span
            className="hero-tag"
            key={tag}
            initial={{ scale: 0.6, opacity: 0, y: 20 }}
            animate={isActive ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.6, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: ease.elastic }}
            whileHover={{ scale: 1.08, y: -2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      {/* Description with word reveal */}
      <TextReveal
        text="Technology professional, digital strategist, and web developer in Pokhara with 5+ years building scalable web solutions, driving digital growth, and mentoring future IT professionals."
        isActive={isActive}
        delay={1.1}
        className="hero-desc"
        staggerDelay={0.02}
      />

      {/* Action buttons with magnetic effect */}
      <SlideIn isActive={isActive} direction="up" delay={1.5} className="hero-actions">
        <MagneticButton className="btn-primary" onClick={onContact} strength={0.25}>
          <Mail size={14} /> Contact Me
        </MagneticButton>
        <motion.a
          className="btn-ghost"
          href="tel:+9779826115361"
          whileHover={{ scale: 1.03, borderColor: 'rgba(31,217,160,0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone size={14} /> +977 982 611 5361
        </motion.a>
      </SlideIn>

      {/* Stats with animated counters and line reveal */}
      <SlideIn isActive={isActive} direction="up" delay={1.7}>
        <LineReveal isActive={isActive} delay={1.9} className="hero-stat-line" />
        <div className="hero-stats">
          {[
            { num: 5, suffix: '+', label: 'Years Experience' },
            { num: 14, suffix: '+', label: 'Projects Delivered' },
            { num: 100, suffix: '+', label: 'Students Trained' },
          ].map((stat, i) => (
            <motion.div
              className="hero-stat"
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.5, delay: 2 + i * 0.15, ease: ease.cinematic }}
            >
              <div className="hero-stat-num">
                <AnimatedCounter
                  value={stat.num}
                  isActive={isActive}
                  delay={2 + i * 0.15}
                  duration={1.5}
                  suffix={stat.suffix}
                />
              </div>
              <div className="hero-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </SlideIn>
    </div>

    {/* Hero image with cinematic zoom + float */}
    <SlideIn isActive={isActive} direction="right" delay={0.5} distance={80} className="hero-image-wrap" style={{ zIndex: 2 }}>
      <FloatingElement amplitude={10} duration={6} delay={1}>
        <motion.img
          className="hero-image"
          src={profileImg}
          alt="Mijash Sunar - Web Developer in Pokhara"
          fetchPriority="high"
          width="380"
          height="380"
          style={{ objectFit: 'cover' }}
          initial={{ scale: 1.15, filter: 'blur(10px) saturate(0)' }}
          animate={isActive ? { scale: 1, filter: 'blur(0px) saturate(1)' } : { scale: 1.15, filter: 'blur(10px) saturate(0)' }}
          transition={{ duration: 1.2, delay: 0.6, ease: ease.cinematic }}
          whileHover={{ scale: 1.04 }}
        />
      </FloatingElement>
    </SlideIn>
  </div>
);

export default Hero;
