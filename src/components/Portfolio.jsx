import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

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
    url: '#',
    image: imgFewa,
    desc: 'A comprehensive healthcare portal featuring online appointment scheduling, doctor profiles, and dynamic service listings.',
  },
  {
    tag: 'Education · IT Company',
    name: 'Niti Academy',
    url: '#',
    image: imgNiti,
    desc: 'An educational platform providing professional IT course listings, digital marketing materials, and student enrollment systems.',
  },
  {
    tag: 'Tourism · Laravel',
    name: 'Nepalese Trekking',
    url: '#',
    image: imgTrekking,
    desc: 'A dynamic tourism portal designed to showcase mountain trekking itineraries, travel packages, and travel guides in Nepal.',
  },
  {
    tag: 'Association · WordPress',
    name: 'Gamma Pokhara',
    url: '#',
    image: imgGama,
    desc: 'An association platform designed for the Gandaki Automobile Association featuring membership listings and news.',
  },
  {
    tag: 'Education · School',
    name: 'Blooming Buds Academy',
    url: '#',
    desc: 'A school website featuring academic programs, news, event notices, and student portals for a premium educational institution.',
  },
  {
    tag: 'Education · School',
    name: 'Dhungesanghu Boarding School',
    url: '#',
    desc: 'A school website featuring academic schedules, admissions information, and interactive gallery systems.',
  },
  {
    tag: 'Education · School',
    name: 'Balkalyan High School',
    url: '#',
    image: imgBalkalyan,
    desc: 'A school website displaying dynamic notifications, events, staff directories, and academic resources.',
  },
  {
    tag: 'Education · School',
    name: 'Kantipur Academy',
    url: '#',
    image: imgKantipur,
    desc: 'An educational landing page with student admission forms, curriculum highlights, and course databases.',
  },
  {
    tag: 'Education · School',
    name: 'Rainbow Academic Homes',
    url: '#',
    image: imgRah,
    desc: 'A secondary school platform with information portals for parents, course structures, and event announcements.',
  },
  {
    tag: 'Business · E-commerce',
    name: 'Monika Tyre Suppliers',
    url: '#',
    desc: 'A business catalogue and inventory page displaying product specifications and distributor contact channels.',
  },
  {
    tag: 'Education · School',
    name: 'Jyotikunj Secondary School',
    url: '#',
    image: imgJyotikunj,
    desc: 'A portal showcasing curriculum details, dynamic event calendars, and school announcement boards.',
  },
  {
    tag: 'Education · Bakery',
    name: 'School of Bakery & Pastry',
    url: '#',
    image: imgBakery,
    desc: 'A culinary training portal featuring course timetables, instructor bios, and interactive pastry workshop registrations.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Raghunath Wagle',
    url: '#',
    desc: 'A personal portfolio site featuring research publications, consulting history, and contact forms.',
  },
  {
    tag: 'Personal · Portfolio',
    name: 'Madhab Pokharel',
    url: '#',
    desc: 'A personal developer portfolio showcasing web development projects, skills, and client testimonials.',
  },
];

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPageSize(1);
      } else if (window.innerWidth < 1024) {
        setPageSize(3);
      } else {
        setPageSize(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [pageSize]);

  const totalPages = Math.ceil(projects.length / pageSize);
  const currentProjects = projects.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="showcase-head">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading">All Projects</h2>
      </div>

      <div className="work-grid">
        {currentProjects.map((p, i) => (
          <div className="work-card" key={i}>
            <div className="work-card-glow"></div>
            
            {/* Logo Container */}
            <div className="portfolio-logo-wrap">
              <div className="portfolio-logo-container">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="portfolio-logo-img" />
                ) : (
                  <div className="portfolio-logo-fallback">{p.name.charAt(0)}</div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="project-header">
                <span className="portfolio-card-tag">{p.tag}</span>
                <h3 className="project-title">{p.name}</h3>
              </div>
              
              <p className="project-desc">{p.desc}</p>
              
              <div className="portfolio-card-footer">
                <a
                  className="portfolio-visit-link"
                  href={p.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Explore Project</span>
                  <ArrowRight size={14} className="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="portfolio-pagination">
          <button
            className="pagination-btn"
            disabled={currentPage === 0}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            &larr; Prev
          </button>
          <div className="pagination-dots">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`pagination-dot ${idx === currentPage ? 'active' : ''}`}
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            className="pagination-btn"
            disabled={currentPage === totalPages - 1}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
