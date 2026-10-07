import { motion } from 'framer-motion';
import { X, Printer, Mail, Phone, MapPin, Code2, Globe, Briefcase, GraduationCap, Award } from 'lucide-react';

const LinkedInIcon = ({ size = 13, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

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
              <h1>MIJASH SUNAR</h1>
              <p className="resume-subtitle">Software Engineer / Tech Lead | Full Stack Developer (MERN, Next.js) | Senior Instructor</p>
            </div>
            <div className="resume-header-right">
              <div className="resume-contact-item">
                <Phone size={13} />
                <a href="tel:+9779826115361">+977 982 611 5361</a>
              </div>
              <div className="resume-contact-item">
                <Mail size={13} />
                <a href="mailto:mijashsunar1@gmail.com">mijashsunar1@gmail.com</a>
              </div>
              <div className="resume-contact-item">
                <MapPin size={13} />
                <span>Pokhara, Nepal</span>
              </div>
              <div className="resume-contact-item">
                <LinkedInIcon size={13} />
                <a href="https://www.linkedin.com/in/mijash-sunar-566642362/" target="_blank" rel="noopener noreferrer">linkedin.com/in/mijash-sunar</a>
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
                  Full Stack Developer specializing in the Next.js and MERN Stack (MongoDB, Express.js, React.js, Node.js) with hands-on experience building scalable, production-grade web applications including a live Sweden-based fintech platform handling payment and inventory workflows. Skilled in translating complex requirements into responsive, user-friendly interfaces backed by clean, maintainable code. Also experienced in PHP, Laravel, and WordPress, enabling delivery of end-to-end solutions across diverse industries including fintech, healthcare, and education. Committed to continuously adapting to new technologies and best practices to build efficient, reliable digital products.
                </p>
              </section>

              {/* Work Experience */}
              <section className="resume-section">
                <h2 className="resume-section-title">
                  <Briefcase size={16} /> Experience
                </h2>
                <div className="resume-timeline">
                  {/* MoreTech Global */}
                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>Software Engineer / Tech Lead</h3>
                      <span className="resume-timeline-date">11/2025 — Present</span>
                    </div>
                    <div className="resume-timeline-company">MoreTech Global · Remote</div>
                    <ul className="resume-bullets">
                      <li>Lead the import/export systems for Splitgrid, a live Sweden-based fintech platform owning integrations across 8+ POS/e-commerce platforms (Shopify, Zettle, Sitoo, Fortnox) and building new ones from scratch.</li>
                      <li>Redesigned the legacy inventory import process into a transaction-safe pipeline with template-based mapping, preview-before-commit, and per-row error reporting.</li>
                      <li>Fixed settlement calculation bugs in the ZTL/Zignsec export module, resolving reconciliation errors on live retailer-supplier payments.</li>
                      <li>Built invoicing and voucher-export logic on Fortnox, and maintain export tooling across CSV, XLSX, PDF, and SIE formats for reports and settlements.</li>
                    </ul>
                  </div>

                  {/* Niti Academy */}
                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>Full Stack Web Developer / Senior Instructor</h3>
                      <span className="resume-timeline-date">03/2025 — Present</span>
                    </div>
                    <div className="resume-timeline-company">Niti Academy · On-Site, Pokhara</div>
                    <ul className="resume-bullets">
                      <li>Delivered a 15-day AI Tools crash course around 30 employees of Citizen Life Insurance across Gandaki Province, training staff at all levels including the MD and Branch Managers on practical AI tool adoption for daily operations.</li>
                      <li>Independently designed, built, and deployed 20+ live production websites for clients across healthcare, education, and business sectors, handling requirements gathering through deployment end-to-end.</li>
                      <li>Delivered business and organizational sites for GAMA Pokhara, PABSON Kaski, Monika Suppliers, Sadabahar UPVC, Niti Press, Lakecity Rental, Raghunath Wagle, and Baburam Baral, plus Niti Academy's own corporate website.</li>
                      <li>Developed responsive, user-friendly websites for Fewacity Hospital and Noble Hospital, providing healthcare information, service details, and better user experience.</li>
                      <li>Developed individual websites for schools and institutions including Kantipur Academy, Rainbow Academic, Baseline Academy, Balkalyan High School, Jyotikunj School, Dhungesanghu School, Bhasker Memorial, National Creation Academy, Manakamana Chhatrabas, and BBA College.</li>
                      <li>Conducted AI tools training sessions for students of Nepal Adarsha Awasiya Vidyalaya (NAAV), Lekhnath, introducing students to practical AI tools, effective prompting, and AI-assisted learning.</li>
                      <li>Taught Digital Marketing, Basic SEO, and Web Development to students at Niti Academy, providing practical, hands-on training in industry-relevant tools.</li>
                    </ul>
                  </div>

                  {/* Freelancer */}
                  <div className="resume-timeline-item">
                    <div className="resume-timeline-header">
                      <h3>Full Stack Web Developer</h3>
                      <span className="resume-timeline-date">03/2024 — 03/2025</span>
                    </div>
                    <div className="resume-timeline-company">Freelancer / Self Employed · Birauta, Pokhara</div>
                    <ul className="resume-bullets">
                      <li>Developed a responsive and fully dynamic tourism website for Dawn in Nepal Adventures P. Ltd, featuring admin-managed content and booking functionality.</li>
                      <li>Built a fully dynamic bakery school website for School of Bakery and Pastry Technology, including admin controls, email integration, and seamless cross-device experience.</li>
                      <li>Developed a modern Mental Health & Rehabilitation platform for my final year defence, integrating online payments, Cloudinary, real-time chat, Jitsi-based video therapy, and an AI-powered chatbot.</li>
                      <li>Developed a Laravel-based collaborative story writing platform with real-time co-authoring, interactive features, Esewa payment integration, chat, games, and user activity tracking for an engaging experience.</li>
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
                    <span>Next.js</span>
                    <span>React.js</span>
                    <span>TypeScript</span>
                    <span>JavaScript</span>
                    <span>Tailwind CSS</span>
                    <span>Alpine JS</span>
                    <span>Bootstrap</span>
                    <span>HTML / CSS</span>
                    <span>Web Design</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Backend & APIs</h4>
                  <div className="resume-skill-tags">
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>PHP</span>
                    <span>Laravel</span>
                    <span>Livewire</span>
                    <span>WordPress</span>
                    <span>REST API</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Databases</h4>
                  <div className="resume-skill-tags">
                    <span>MongoDB</span>
                    <span>PostgreSQL</span>
                    <span>MySQL</span>
                    <span>Cloudinary</span>
                  </div>
                </div>
                <div className="resume-skills-group">
                  <h4>Tools & DevOps</h4>
                  <div className="resume-skill-tags">
                    <span>Docker</span>
                    <span>Git / GitHub</span>
                    <span>Postman</span>
                    <span>cPanel</span>
                    <span>FileZilla</span>
                    <span>VSCode Extension</span>
                    <span>Basic SEO</span>
                    <span>Canva</span>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="resume-section">
                <h2 className="resume-section-title">
                  <GraduationCap size={16} /> Education
                </h2>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">BSc in CS & IT (BSc CSIT)</div>
                  <div className="resume-side-item-sub">Soch College of IT</div>
                  <div className="resume-side-item-date">2021 — 2026</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">+2 Science</div>
                  <div className="resume-side-item-sub">Chhorepatan Secondary School</div>
                  <div className="resume-side-item-date">2019 — 2021</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">SEE</div>
                  <div className="resume-side-item-sub">Balodaya Secondary School</div>
                  <div className="resume-side-item-date">2018</div>
                </div>
              </section>

              {/* Key Achievements */}
              <section className="resume-section">
                <h2 className="resume-section-title">Key Achievements</h2>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">🏆 Best Employee Award</div>
                  <div className="resume-side-item-sub">Niti Academy (2025–2026)</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">⚡ Enterprise AI Training</div>
                  <div className="resume-side-item-sub">Citizen Life Insurance (MD & Branch Managers) & NAAV</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">🌐 Scale of Delivery</div>
                  <div className="resume-side-item-sub">20+ Production Websites Deployed End-to-End</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">⭐ Best Intern Award</div>
                  <div className="resume-side-item-sub">XDEZO Technologies (2023)</div>
                </div>
                <div className="resume-side-item">
                  <div className="resume-side-item-title">🥈 2nd Place, Code Camp</div>
                  <div className="resume-side-item-sub">Competitive Hackathon & Coding Challenge</div>
                </div>
              </section>

              {/* Core Strengths */}
              <section className="resume-section">
                <h2 className="resume-section-title">Strengths</h2>
                <div className="resume-skill-tags">
                  <span>Full-Stack Development</span>
                  <span>Problem-Solving Under Constraints</span>
                  <span>Adaptability & Continuous Learning</span>
                  <span>Teaching & Mentoring</span>
                  <span>Team Collaboration & Leadership</span>
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
