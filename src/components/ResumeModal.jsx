import { motion } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin, Code2, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumeModal = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      className="resume-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="resume-modal-container"
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ duration: 0.4, cubicBezier: [0.16, 1, 0.3, 1] }}
      >
        {/* Modal Controls */}
        <div className="resume-modal-header-actions">
          <button className="resume-action-btn print-btn" onClick={handlePrint} title="Print Resume">
            <Printer size={16} />
            <span>Print / Save PDF</span>
          </button>
          <button className="resume-action-btn close-btn" onClick={onClose} title="Close Modal">
            <X size={18} />
          </button>
        </div>

        {/* Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <header className="resume-sheet-header">
            <div className="resume-header-left">
              <h1>Mijash Sunar</h1>
              <p className="resume-subtitle">Full Stack Developer & Digital Strategist</p>
            </div>
            <div className="resume-header-right">
              <div className="resume-contact-item">
                <Mail size={13} />
                <a href="mailto:mijashsunar1@gmail.com">mijashsunar1@gmail.com</a>
              </div>
              <div className="resume-contact-item">
                <Phone size={13} />
                <a href="tel:+9779826115361">+977 982 611 5361</a>
              </div>
              <div className="resume-contact-item">
                <MapPin size={13} />
                <span>Pokhara, Nepal</span>
              </div>
              <div className="resume-contact-item">
                <Code2 size={13} />
                <a href="https://github.com/mijashsunar10" target="_blank" rel="noopener noreferrer">github.com/mijashsunar10</a>
              </div>
              <div className="resume-contact-item">
                <Globe size={13} />
                <a href="https://mijashsunar.com.np/" target="_blank" rel="noopener noreferrer">mijashsunar.com.np</a>
              </div>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* Grid Layout */}
          <div className="resume-grid">
            {/* Main Column */}
            <main className="resume-main-col">
              {/* Profile Summary */}
              <section className="resume-section">
                <h2 className="resume-section-title">
                  <Award size={16} /> Professional Summary
                </h2>
                <p className="resume-text">
                  Dynamic and result-oriented Full Stack Developer and SEO Expert with over 3 years of hands-on experience designing, developing, and deploying high-performance web applications. Demonstrated capability in leading technical mentorship programs, training developers, and formulating visibility strategies that drive measurable business growth.
                </p>
              </section>

              {/* Work Experience */}
              <section className="resume-section">
                <h2 className="resume-section-title">
                  <Briefcase size={16} /> Experience
                </h2>
                <div className="resume-timeline">
                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>PHP Backend Developer</h3>
                      <span className="resume-timeline-date">Nov 2025 — Present</span>
                    </div>
                    <div className="resume-timeline-company">MoreTech Global · Remote</div>
                    <ul className="resume-bullets">
                      <li>Lead backend development on Swedish payment solution Splitgrid, automating financial distribution between retail stores and product suppliers.</li>
                      <li>Architect secure transactional workflows, optimize SQL database performance, and ensure scalable API designs.</li>
                    </ul>
                  </div>

                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>Full Stack Developer & Senior Instructor</h3>
                      <span className="resume-timeline-date">Mar 2025 — Present</span>
                    </div>
                    <div className="resume-timeline-company">Niti Academy · Pokhara, Nepal</div>
                    <ul className="resume-bullets">
                      <li>Designed and implemented the core clinic portal for Fewa City Hospital featuring automated appointments.</li>
                      <li>Created tailored educational school websites (Blooming Buds, Rainbow, Kantipur Academy, Balkalyan).</li>
                      <li>Serve as Head Instructor teaching Advanced PHP/Laravel, MERN stack, Search Engine Optimization (SEO), and Digital Marketing strategies to over 100 students.</li>
                    </ul>
                  </div>

                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>Freelance Full Stack Developer</h3>
                      <span className="resume-timeline-date">Mar 2024 — Mar 2025</span>
                    </div>
                    <div className="resume-timeline-company">Birauta, Pokhara</div>
                    <ul className="resume-bullets">
                      <li>Developed high-performing resort platforms (Alfanzoo Resort) and specialized training sites (School of Bakery).</li>
                      <li>Built a telehealth system supporting real-time messaging, AI chatbot support, and Jitsi video calling.</li>
                      <li>Designed a Laravel-driven collaborative writing application featuring payment gateways (eSewa) and version control.</li>
                    </ul>
                  </div>
                </div>
              </section>
            </main>

            {/* Sidebar Column */}
            <aside className="resume-side-col">
              {/* Technical Skills */}
              <section className="resume-section">
                <h2 className="resume-section-title">Skills</h2>
                <div className="resume-skills-group">
                  <h4>Frontend</h4>
                  <div className="resume-skill-tags">
                    <span>React JS</span>
                    <span>JavaScript</span>
                    <span>HTML/CSS</span>
                    <span>Tailwind CSS</span>
                    <span>Alpine JS</span>
                    <span>Livewire</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Backend</h4>
                  <div className="resume-skill-tags">
                    <span>Laravel</span>
                    <span>PHP</span>
                    <span>Node JS</span>
                    <span>Express JS</span>
                    <span>REST APIs</span>
                    <span>WordPress</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Database & Tools</h4>
                  <div className="resume-skill-tags">
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>PostgreSQL</span>
                    <span>Git / GitHub</span>
                    <span>cPanel</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Digital Marketing</h4>
                  <div className="resume-skill-tags">
                    <span>Technical SEO</span>
                    <span>On-Page SEO</span>
                    <span>Google Analytics</span>
                    <span>Content Strategy</span>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="resume-section">
                <h2 className="resume-section-title">
                  <GraduationCap size={16} /> Education
                </h2>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">BSc in CS & IT</div>
                  <div className="resume-side-item-sub">Soch College of IT</div>
                  <div className="resume-side-item-date">2021 — Present</div>
                </div>
              </section>

              {/* Achievements */}
              <section className="resume-section">
                <h2 className="resume-section-title">Achievements</h2>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">Best Intern Award</div>
                  <div className="resume-side-item-sub">XDEZO Technologies (2023)</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">2nd Place, Code Camp</div>
                  <div className="resume-side-item-sub">Competitive Hackathon</div>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResumeModal;
