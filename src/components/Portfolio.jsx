import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TextReveal,
  SlideIn,
  TiltCard,
  ParallaxLayer,
  FloatingElement,
  MagneticButton,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

import imgFewa from '../assets/Hospitalfewa.png';
import imgNiti from '../assets/nitiacademylogo.png';
import imgTrekking from '../assets/nepalsetrekking.png';
import imgGama from '../assets/gamalogo.jpg';
import imgBalkalyan from '../assets/Balkalyan.png';
import imgKantipur from '../assets/kantipur-academy.png';
import imgRah from '../assets/rah-logo.png';
import imgJyotikunj from '../assets/jyoitikunj.jpg';
import imgBakery from '../assets/schoolofbakery.png';

const projects = [
  {
    tag: 'Healthcare · Laravel',
    name: 'Fewa City Hospital',
    url: 'https://fch.com.np',
    image: imgFewa,
    desc: 'A comprehensive healthcare portal featuring online appointment scheduling, doctor profiles, and dynamic service listings.',
  },
  {
    tag: 'Education · IT Company',
    name: 'Niti Academy',
    url: 'https://nitiacademy.edu.np',
    image: imgNiti,
    desc: 'An educational platform providing professional IT course listings, digital marketing materials, and student enrollment systems.',
  },
  {
    tag: 'Tourism · Laravel',
    name: 'Nepalese Trekking',
    url: 'https://nepalesetrekking.com',
    image: imgTrekking,
    desc: 'A dynamic tourism portal designed to showcase mountain trekking itineraries, travel packages, and travel guides in Nepal.',
  },
  {
    tag: 'Association · WordPress',
    name: 'Gamma Pokhara',
    url: '',
    image: imgGama,
    desc: 'An association platform designed for the Gandaki Automobile Association featuring membership listings and news.',
  },
  {
    tag: 'Education · School',
    name: 'Blooming Buds Academy',
    url: '',
    desc: 'A school website featuring academic programs, news, event notices, and student portals for a premium educational institution.',
  },
  {
    tag: 'Education · School',
    name: 'Dhungesanghu Boarding School',
    url: '',
    desc: 'A school website featuring academic schedules, admissions information, and interactive gallery systems.',
  },
  {
    tag: 'Education · School',
    name: 'Balkalyan High School',
    url: '',
    image: imgBalkalyan,
    desc: 'A school website displaying dynamic notifications, events, staff directories, and academic resources.',
  },
  {
    tag: 'Education · School',
    name: 'Kantipur Academy',
    url: '',
    image: imgKantipur,
    desc: 'An educational landing page with student admission forms, curriculum highlights, and course databases.',
  },
  {
    tag: 'Education · School',
    name: 'Rainbow Academic Homes',
    url: '',
    image: imgRah,
    desc: 'A secondary school platform with information portals for parents, course structures, and event announcements.',
  },
  {
    tag: 'Business · E-commerce',
    name: 'Monika Tyre Suppliers',
    url: '',
    desc: 'A business catalogue and inventory page displaying product specifications and distributor contact channels.',
  },
  {
    tag: 'Education · School',
    name: 'Jyotikunj Secondary School',
    url: '',
    image: imgJyotikunj,
    desc: 'A portal showcasing curriculum details, dynamic event calendars, and school announcement boards.',
  },
  {
    tag: 'Education · Bakery',
    name: 'School of Bakery & Pastry',
    url: '',
    image: imgBakery,
    desc: 'A culinary training portal featuring course timetables, instructor bios, and interactive pastry workshop registrations.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Raghunath Wagle',
    url: '',
    desc: 'A personal portfolio site featuring research publications, consulting history, and contact forms.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Madhab Pokharel',
    url: '',
    desc: 'A personal developer portfolio showcasing web development projects, skills, and client testimonials.',
  },
];

// Unique card entrance patterns for each card position
const getCardEntrance = (i) => {
  const patterns = [
    { y: 60, x: -20, rotate: -4, scale: 0.85 },
    { y: -40, x: 10, rotate: 2, scale: 0.88 },
    { y: 50, x: 30, rotate: 3, scale: 0.82 },
    { y: -30, x: -15, rotate: -2, scale: 0.9 },
    { y: 45, x: 20, rotate: -3, scale: 0.86 },
  ];
  return patterns[i % patterns.length];
};

const Portfolio = ({ isActive = false }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [direction, setDirection] = useState(0); // -1 prev, 1 next
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      let size = 5;
      if (window.innerWidth < 768) {
        size = 1;
      } else if (window.innerWidth < 1024) {
        size = 3;
      }
      setPageSize(size);
      setCurrentPage(0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects dynamically
  const filteredProjects = projects.filter(p => {
    const matchesCategory = 
      selectedCategory === 'All' || 
      (selectedCategory === 'Laravel' && p.tag.toLowerCase().includes('laravel')) ||
      (selectedCategory === 'React' && (p.tag.toLowerCase().includes('react') || p.tag.toLowerCase().includes('mern') || p.tag.toLowerCase().includes('it company'))) ||
      (selectedCategory === 'WordPress' && p.tag.toLowerCase().includes('wordpress')) ||
      (selectedCategory === 'Education' && (p.tag.toLowerCase().includes('school') || p.tag.toLowerCase().includes('bakery') || p.tag.toLowerCase().includes('academy') || p.tag.toLowerCase().includes('education'))) ||
      (selectedCategory === 'Personal' && (p.tag.toLowerCase().includes('personal') || p.tag.toLowerCase().includes('portfolio')));
    
    const matchesSearch = 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const currentProjects = filteredProjects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  const goToPage = useCallback((idx) => {
    setDirection(idx > currentPage ? 1 : -1);
    setCurrentPage(idx);
  }, [currentPage]);

  // Page transition variants
  const pageVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Floating elements */}
      <ParallaxLayer speed={0.15} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={12} duration={10} delay={0} style={{ position: 'absolute', top: '5%', right: '15%' }}>
          <div className="cinema-particle cinema-particle--md" />
        </FloatingElement>
        <FloatingElement amplitude={8} duration={12} delay={5} style={{ position: 'absolute', bottom: '8%', left: '10%' }} rotate>
          <div className="cinema-geo cinema-geo--circle" />
        </FloatingElement>
      </ParallaxLayer>

      <div className="showcase-head" style={{ zIndex: 2 }}>
        <SlideIn isActive={isActive} direction="up" delay={0.05} distance={25}>
          <div className="section-label">Selected Work</div>
        </SlideIn>
        <TextReveal
          text="All Projects"
          isActive={isActive}
          delay={0.15}
          className="section-heading"
          as="h2"
          staggerDelay={0.06}
        />
      </div>

      {/* Search & Filters Bar */}
      <div className="portfolio-controls" style={{ zIndex: 3 }}>
        <div className="portfolio-filters">
          {[
            { id: 'All', label: 'All' },
            { id: 'Laravel', label: 'Laravel / PHP' },
            { id: 'React', label: 'React / MERN' },
            { id: 'WordPress', label: 'WordPress' },
            { id: 'Education', label: 'Education' },
            { id: 'Personal', label: 'Personal / Portfolios' }
          ].map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentPage(0);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="portfolio-search-wrap">
          <input
            type="text"
            className="portfolio-search-input"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(0);
            }}
          />
          <Search size={14} className="portfolio-search-icon" />
          {searchTerm && (
            <button 
              className="portfolio-search-clear" 
              onClick={() => {
                setSearchTerm('');
                setCurrentPage(0);
              }}
              title="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Cards with AnimatePresence for page transitions */}
      <AnimatePresence mode="wait" custom={direction}>
        {filteredProjects.length === 0 ? (
          <motion.div
            className="no-projects-found"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ 
              zIndex: 2, 
              color: 'var(--ink-dim)', 
              textAlign: 'center', 
              padding: '60px',
              fontFamily: 'var(--sans)',
              fontSize: '14.5px' 
            }}
          >
            No projects found matching the criteria. Try adjusting your filters or search term.
          </motion.div>
        ) : (
          <motion.div
            className="work-grid"
            key={currentPage}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: ease.cinematic }}
            style={{ zIndex: 2 }}
          >
            {currentProjects.map((p, i) => {
              const entrance = getCardEntrance(i, currentProjects.length);
              return (
                <motion.div
                  key={`${currentPage}-${i}`}
                  initial={{
                    y: entrance.y,
                    x: entrance.x,
                    rotate: entrance.rotate,
                    scale: entrance.scale,
                    opacity: 0,
                    filter: 'blur(8px)',
                  }}
                  animate={
                    isActive
                      ? { y: 0, x: 0, rotate: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }
                      : {
                          y: entrance.y,
                          x: entrance.x,
                          rotate: entrance.rotate,
                          scale: entrance.scale,
                          opacity: 0,
                          filter: 'blur(8px)',
                        }
                  }
                  transition={{
                    duration: 0.65,
                    delay: 0.15 + i * 0.1,
                    ease: ease.cinematic,
                  }}
                >
                  <TiltCard
                    className="work-card"
                    intensity={10}
                    glowColor="rgba(31,217,160,0.12)"
                    scale={1.04}
                  >
                    {/* Logo Container */}
                    <div className="portfolio-logo-wrap">
                      <motion.div
                        className="portfolio-logo-container"
                        initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                        animate={isActive ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0.5, opacity: 0, rotate: -15 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + i * 0.1,
                          ease: ease.elastic,
                        }}
                      >
                        {p.image ? (
                          <motion.img
                            src={p.image}
                            alt={`${p.name} website developed by Mijash Sunar`}
                            className="portfolio-logo-img"
                            loading="lazy"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          />
                        ) : (
                          <motion.div
                            className="portfolio-logo-fallback-wrap"
                            whileHover={{ scale: 1.15 }}
                          >
                            <div className="portfolio-logo-fallback">
                              {p.name.split(' ').map(w => w.charAt(0)).slice(0, 2).join('')}
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <div className="project-details">
                      <div className="project-header">
                        <span className="portfolio-card-tag">{p.tag}</span>
                        <h3 className="project-title">{p.name}</h3>
                      </div>
                      <p className="project-desc">{p.desc}</p>
                      <div className="portfolio-card-footer">
                        {p.url ? (
                          <motion.a
                            className="portfolio-visit-link"
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4, gap: '10px' }}
                            transition={{ duration: 0.25 }}
                          >
                            <span>Explore Project</span>
                            <ArrowRight size={14} className="arrow-icon" />
                          </motion.a>
                        ) : (
                          <span className="portfolio-internal-badge">
                            Internal System
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <SlideIn isActive={isActive} direction="up" delay={0.8} className="portfolio-pagination" style={{ zIndex: 2 }}>
          <MagneticButton
            className="pagination-btn"
            disabled={currentPage === 0}
            onClick={() => goToPage(currentPage - 1)}
            strength={0.2}
          >
            ← Prev
          </MagneticButton>
          <div className="pagination-dots">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <motion.button
                key={idx}
                className={`pagination-dot ${idx === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                animate={
                  idx === currentPage
                    ? { scale: [1, 1.2, 1], boxShadow: '0 0 16px var(--emerald-glow)' }
                    : { scale: 1, boxShadow: '0 0 0px transparent' }
                }
                transition={{ duration: 0.4 }}
              >
                {idx + 1}
              </motion.button>
            ))}
          </div>
          <MagneticButton
            className="pagination-btn"
            disabled={currentPage === totalPages - 1}
            onClick={() => goToPage(currentPage + 1)}
            strength={0.2}
          >
            Next →
          </MagneticButton>
        </SlideIn>
      )}
    </div>
  );
};

export default Portfolio;
