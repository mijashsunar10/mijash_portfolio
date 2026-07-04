import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Code2 } from 'lucide-react';

const Contact = () => {
  const [note, setNote] = useState('');
  const [showNote, setShowNote] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements['cf-name'].value.trim();
    const email = form.elements['cf-email'].value.trim();
    const type = form.elements['cf-type'].value;
    const rawMessage = form.elements['cf-message'].value.trim();

    setNote('Sending message...');
    setShowNote(true);

    const message = `Project Type: ${type || 'Not specified'}\n\nMessage:\n${rawMessage}`;

    const formData = new FormData();
    formData.append("access_key", "67452f4f-65d7-403b-88b3-d89a18666be3");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", `New Inquiry: ${type || 'General inquiry'} from ${name}`);
    formData.append("message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setNote("Success! Your message has been sent.");
        form.reset();
      } else {
        setNote("Error: " + (data.message || "Failed to send."));
      }
    } catch (error) {
      setNote("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setShowNote(false), 5000);
    }
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
