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
import imgSplitgrid from '../assets/splitgrid-logo.png';

const projects = [
  {
    tag: 'Fintech · Integrations',
    name: 'Splitgrid Fintech Platform',
    url: 'https://splitgrid.com/en/home/',
    image: imgSplitgrid,
    category: 'Fintech',
    desc: 'Sweden-based fintech automating revenue distribution. Lead 8+ POS integrations (Shopify, Zettle, Fortnox), transaction-safe inventory pipelines, and ZTL/Zignsec settlements.',
  },
  {
    tag: 'Enterprise AI · Training',
    name: 'Citizen Life AI Tools Training',
    url: '',
    category: 'AI & Training',
    desc: '15-day AI Tools crash course for 30 Citizen Life Insurance employees across Gandaki Province, training staff including MD and Branch Managers on practical AI workflows.',
  },
  {
    tag: 'Healthcare · Telehealth · AI',
    name: 'Mental Health & Rehab Platform',
    url: '',
    category: 'Healthcare',
    desc: 'Full-stack defence platform integrating online payments, Cloudinary storage, real-time chat, Jitsi video therapy, and an AI conversational chatbot.',
  },
  {
    tag: 'Healthcare · Production',
    name: 'Fewacity Hospital',
    url: 'https://fch.com.np',
    image: imgFewa,
    category: 'Healthcare',
    desc: 'Comprehensive hospital web portal featuring online doctor appointment scheduling, departmental listings, emergency info, and responsive clinical UI.',
  },
  {
    tag: 'Healthcare · Production',
    name: 'Noble Hospital',
    url: 'https://noblehospital.com.np/',
    category: 'Healthcare',
    desc: 'Modern healthcare portal providing detailed clinical services, medical specialist profiles, patient guidance, and responsive hospital experience.',
  },
  {
    tag: 'Laravel · Real-Time Web',
    name: 'Collaborative Story Writing',
    url: '',
    category: 'Fintech',
    desc: 'Laravel-based platform featuring real-time co-authoring, Esewa payments integration, live chat, interactive mini-games, and user activity tracking.',
  },
  {
    tag: 'Education & IT · Production',
    name: 'Niti Academy Corporate Portal',
    url: 'https://nitiacademy.edu.np',
    image: imgNiti,
    category: 'Education',
    desc: 'Corporate and education platform providing professional IT course listings, digital marketing materials, and student enrollment systems.',
  },
  {
    tag: 'Tourism · Dynamic Booking',
    name: 'Dawn in Nepal Adventures',
    url: 'https://nepalesetrekking.com',
    image: imgTrekking,
    category: 'Business',
    desc: 'Dynamic tourism website for Dawn in Nepal Adventures P. Ltd, featuring admin-managed itineraries, adventure packages, and direct booking.',
  },
  {
    tag: 'Education · Culinary',
    name: 'School of Bakery & Pastry',
    url: 'https://schoolofbakingandpastry.com.np/',
    image: imgBakery,
    category: 'Education',
    desc: 'Culinary training portal featuring interactive course timetables, instructor bios, admin controls, and automated email registration systems.',
  },
  {
    tag: 'Association · Automobile',
    name: 'GAMA Pokhara',
    url: 'https://gamapokhara.org.np/',
    image: imgGama,
    category: 'Business',
    desc: 'Official platform for Gandaki Automobile Association featuring automotive industry news, member directory, and association announcements.',
  },
  {
    tag: 'Education Association · Portal',
    name: 'PABSON Kaski',
    url: 'https://pabsonkaski.org.np/',
    category: 'Education',
    desc: 'Central association platform for Private and Boarding Schools\' Organization Nepal (Kaski), delivering exam notices, circulars, and school rosters.',
  },
  {
    tag: 'Business · Distribution',
    name: 'Monika Suppliers',
    url: 'https://monikasuppliers.com.np/',
    category: 'Business',
    desc: 'Commercial tyre and automotive distribution catalog with product specifications, wholesale distributor pricing channels, and contact points.',
  },
  {
    tag: 'Manufacturing · UPVC',
    name: 'Sadabahar UPVC',
    url: 'https://www.sadabaharupvc.com/',
    category: 'Business',
    desc: 'Industrial product catalogue and portfolio for modern UPVC profiles, architectural windows, doors, and building fabrication materials.',
  },
  {
    tag: 'Media · Printing Press',
    name: 'Niti Press',
    url: 'https://nitipress.com/',
    category: 'Business',
    desc: 'Commercial printing press portal showcasing print service categories, publishing portfolios, order quotation workflows, and print galleries.',
  },
  {
    tag: 'Commercial · Rental',
    name: 'Lakecity Rental',
    url: 'https://lakecityrental.com.np/',
    category: 'Business',
    desc: 'Vehicle and equipment rental service portal facilitating fleet browsing, tariff calculation, direct booking inquiries, and customer concierge support.',
  },
  {
    tag: 'Education · School',
    name: 'Balkalyan High School',
    url: 'https://balkalyanhighschool.edu.np/',
    image: imgBalkalyan,
    category: 'Education',
    desc: 'Secondary school website featuring academic curricula, dynamic notice boards, faculty directories, and admissions information.',
  },
  {
    tag: 'Education · School',
    name: 'Kantipur Academy',
    url: 'https://kantipuracademypokhara.edu.np/',
    image: imgKantipur,
    category: 'Education',
    desc: 'Educational institution platform featuring student admission forms, academic calendar, curriculum highlights, and photo gallery.',
  },
  {
    tag: 'Education · School',
    name: 'Rainbow Academic Homes',
    url: 'https://rainbowacademic.edu.np/',
    image: imgRah,
    category: 'Education',
    desc: 'Secondary school portal with information portals for parents, course structures, event announcements, and student achievement showcases.',
  },
  {
    tag: 'Education · School',
    name: 'Jyotikunj Secondary School',
    url: 'https://jyotikunjschool.edu.np/',
    image: imgJyotikunj,
    category: 'Education',
    desc: 'School portal showcasing curriculum details, academic timetables, administrative announcements, and extracurricular event calendars.',
  },
  {
    tag: 'Education · School',
    name: 'Baseline Academy',
    url: 'https://baselineacademyschool.edu.np/',
    category: 'Education',
    desc: 'Responsive educational website featuring academic programs, admission guidance, notices, and modern educational resources.',
  },
  {
    tag: 'Education · School',
    name: 'Dhungesanghu School',
    url: 'https://dhungesanghuschool.edu.np/',
    category: 'Education',
    desc: 'School website featuring academic schedules, examination timetables, admission details, and interactive school notice systems.',
  },
  {
    tag: 'Education · School',
    name: 'Bhasker Memorial School',
    url: 'https://bhasker.edu.np/',
    category: 'Education',
    desc: 'School platform with news announcements, event highlights, curriculum guides, and parent-school communication channels.',
  },
  {
    tag: 'Education · School',
    name: 'National Creation Academy',
    url: 'https://nationalcreationacademy.edu.np/',
    category: 'Education',
    desc: 'Academic portal showcasing educational programs, dynamic notice circulars, admissions forms, and student activities.',
  },
  {
    tag: 'Education · Hostel',
    name: 'Manakamana Chhatrabas',
    url: 'https://manakamanachhatrabas.edu.np/',
    category: 'Education',
    desc: 'Student residential hostel platform detailing accommodation amenities, admissions guidelines, safety standards, and warden contacts.',
  },
  {
    tag: 'Higher Ed · College',
    name: 'BBA College Portal',
    url: 'https://bba.edu.np/',
    category: 'Education',
    desc: 'Higher education management portal highlighting Bachelor of Business Administration syllabus, faculty credentials, and semester schedules.',
  },
  {
    tag: 'AI Workshop · NAAV',
    name: 'NAAV Student AI Workshop',
    url: '',
    category: 'AI & Training',
    desc: 'Hands-on AI tools training for students of Nepal Adarsha Awasiya Vidyalaya in Lekhnath, teaching effective prompting, research, and productivity.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Raghunath Wagle',
    url: 'https://www.raghunathwagle.com.np/',
    category: 'Personal',
    desc: 'Personal professional portal featuring academic publications, consulting history, career credentials, and direct contact forms.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Baburam Baral',
    url: 'https://baburambaral.com.np/',
    category: 'Personal',
    desc: 'Custom personal portfolio presenting professional achievements, community leadership, consulting offerings, and client testimonials.',
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
      (selectedCategory === 'Fintech' && (p.category === 'Fintech' || p.tag.toLowerCase().includes('fintech') || p.tag.toLowerCase().includes('laravel'))) ||
      (selectedCategory === 'Healthcare' && (p.category === 'Healthcare' || p.tag.toLowerCase().includes('health'))) ||
      (selectedCategory === 'AI & Training' && (p.category === 'AI & Training' || p.tag.toLowerCase().includes('ai') || p.tag.toLowerCase().includes('training'))) ||
      (selectedCategory === 'Education' && (p.category === 'Education' || p.tag.toLowerCase().includes('school') || p.tag.toLowerCase().includes('academy') || p.tag.toLowerCase().includes('hostel') || p.tag.toLowerCase().includes('college') || p.tag.toLowerCase().includes('bakery'))) ||
      (selectedCategory === 'Business' && (p.category === 'Business' || p.tag.toLowerCase().includes('business') || p.tag.toLowerCase().includes('tourism') || p.tag.toLowerCase().includes('rental') || p.tag.toLowerCase().includes('manufacturing') || p.tag.toLowerCase().includes('automobile') || p.tag.toLowerCase().includes('press'))) ||
      (selectedCategory === 'Personal' && (p.category === 'Personal' || p.tag.toLowerCase().includes('personal') || p.tag.toLowerCase().includes('portfolio')));
    
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
          <div className="section-label">Selected Work & Deployments</div>
        </SlideIn>
        <TextReveal
          text="Featured Projects & Delivery"
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
            { id: 'All', label: `All (${projects.length})` },
            { id: 'Fintech', label: 'Fintech & Systems' },
            { id: 'Healthcare', label: 'Healthcare' },
            { id: 'AI & Training', label: 'AI & Training' },
            { id: 'Education', label: 'Education & Schools' },
            { id: 'Business', label: 'Business & Orgs' },
            { id: 'Personal', label: 'Portfolios' }
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
