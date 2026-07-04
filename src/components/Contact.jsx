import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Code2 } from 'lucide-react';

const Contact = () => {
  const [note, setNote] = useState('');
  const [showNote, setShowNote] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['cf-name'].value.trim();
    const email = form.elements['cf-email'].value.trim();
    const type = form.elements['cf-type'].value;
    const message = form.elements['cf-message'].value.trim();

    const subject = encodeURIComponent(`New Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject Type: ${type || 'Not specified'}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:mijashsunar1@gmail.com?subject=${subject}&body=${body}`;

    setNote('Opening your email app to send this…');
    setShowNote(true);
    setTimeout(() => setShowNote(false), 4000);
  };

  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="cta-heading">Let's build something great.</div>
      <div className="cta-sub">
        Available for website development, full-stack projects, digital marketing, SEO, and training programs.
      </div>

      <div className="contact-links">
        <a href="tel:+9779826115361" className="contact-link">
          <Phone size={14} /> +977 982 611 5361
        </a>
        <a href="mailto:mijashsunar1@gmail.com" className="contact-link">
          <Mail size={14} /> mijashsunar1@gmail.com
        </a>
        <span className="contact-link">
          <MapPin size={14} /> Pokhara, Nepal
        </span>
      </div>

      <form className="glass-form" id="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="cf-name" placeholder="Your name" required />
        <input type="email" name="cf-email" placeholder="Email" required />
        <select name="cf-type" defaultValue="">
          <option value="">Project type</option>
          <option value="Website Development">Website Development</option>
          <option value="Full Stack Project">Full Stack Project</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="SEO">SEO</option>
          <option value="Training">Training / Mentorship</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="cf-message" placeholder="Tell me about your project"></textarea>
        <button className="submit-btn" type="submit">Send It</button>
        <div className={`form-note ${showNote ? 'show' : ''}`}>{note}</div>
      </form>

      <div className="social-row">
        <a
          href="https://github.com/mijashsunar10"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <Code2 size={16} />
        </a>
        <a
          href="https://mijashsunar.com.np/"
          className="social-icon"
          target="_blank"
          rel="noopener noreferrer"
          title="Website"
        >
          <Globe size={16} />
        </a>
        <a
          href="mailto:mijashsunar1@gmail.com"
          className="social-icon"
          title="Email"
        >
          <Mail size={16} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
