import { Mail, Phone, Download } from 'lucide-react';
import heroImg from '../assets/hero-dev.png';

const Hero = ({ onContact }) => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="hero-content">
        <div className="hero-greeting">Hi, I am</div>
        <h1 className="hero-name">
          Mijash <span className="glow">Sunar</span>
        </h1>
        <div className="hero-titles">
          <span className="hero-tag">Full Stack Developer</span>
          <span className="hero-tag">Digital Marketing Expert</span>
          <span className="hero-tag">SEO Expert</span>
          <span className="hero-tag">Senior Instructor</span>
        </div>
        <p className="hero-desc">
          Technology professional and digital strategist with extensive experience 
          in full-stack development, digital marketing, and technical training — 
          focused on building scalable web solutions and mentoring future IT professionals.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={onContact}>
            <Mail size={14} /> Contact Me
          </button>
          <a
            className="btn-ghost"
            href="tel:+9779826115361"
          >
            <Phone size={14} /> +977 982 611 5361
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-num">5+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div>
            <div className="hero-stat-num">14+</div>
            <div className="hero-stat-label">Projects Delivered</div>
          </div>
          <div>
            <div className="hero-stat-num">100+</div>
            <div className="hero-stat-label">Students Trained</div>
          </div>
        </div>
      </div>
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={heroImg}
          alt="Mijash Sunar — Full Stack Developer"
          width="380"
          height="380"
        />
      </div>
    </div>
  );
};

export default Hero;
