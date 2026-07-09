import { useState } from 'react';
import { Phone, Mail, MapPin, Globe, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  TextReveal,
  CharReveal,
  ScaleReveal,
  MagneticButton,
  FloatingElement,
  ParallaxLayer,
} from './AnimationUtils';
import { ease } from './AnimationPresets';

const Contact = ({ isActive = false }) => {
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
      console.error("Submission failed:", error);
      setNote("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setShowNote(false), 5000);
    }
  };

  const contactLinks = [
    { href: 'tel:+9779826115361', icon: <Phone size={14} />, text: '+977 982 611 5361', isLink: true },
    { href: 'mailto:mijashsunar1@gmail.com', icon: <Mail size={14} />, text: 'mijashsunar1@gmail.com', isLink: true },
    { icon: <MapPin size={14} />, text: 'Pokhara, Nepal', isLink: false },
  ];

  const socials = [
    { href: 'https://github.com/mijashsunar10', icon: <Code2 size={16} />, title: 'GitHub' },
    { href: 'https://mijashsunar.com.np/', icon: <Globe size={16} />, title: 'Website' },
    { href: 'mailto:mijashsunar1@gmail.com', icon: <Mail size={16} />, title: 'Email' },
  ];

  const formFields = [
    { type: 'text', name: 'cf-name', placeholder: 'Your name', required: true },
    { type: 'email', name: 'cf-email', placeholder: 'Email', required: true },
  ];

  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>

      {/* Cinematic ambient */}
      <ParallaxLayer speed={0.2} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FloatingElement amplitude={16} duration={8} delay={0} style={{ position: 'absolute', top: '5%', left: '15%' }}>
          <div className="cinema-particle cinema-particle--accent" />
        </FloatingElement>
        <FloatingElement amplitude={10} duration={11} delay={3} style={{ position: 'absolute', bottom: '10%', right: '20%' }} rotate>
          <div className="cinema-geo cinema-geo--diamond" />
        </FloatingElement>
      </ParallaxLayer>

      {/* Heading with gradient reveal */}
      <CharReveal
        text="Let's build something great."
        isActive={isActive}
        delay={0.1}
        className="cta-heading"
        as="div"
        staggerDelay={0.02}
      />

      <TextReveal
        text="Available for website development, full-stack projects, digital marketing, SEO, and training programs."
        isActive={isActive}
        delay={0.5}
        className="cta-sub"
        staggerDelay={0.015}
      />

      {/* Contact links with stagger */}
      <div className="contact-links">
        {contactLinks.map((link, i) => (
          <motion.span key={i}>
            {link.isLink ? (
              <motion.a
                href={link.href}
                className="contact-link"
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={isActive ? { y: 0, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: ease.cinematic }}
                whileHover={{ y: -3, borderColor: 'rgba(31,217,160,0.5)', boxShadow: '0 8px 20px rgba(31,217,160,0.15)' }}
              >
                {link.icon} {link.text}
              </motion.a>
            ) : (
              <motion.span
                className="contact-link"
                initial={{ y: 20, opacity: 0, scale: 0.9 }}
                animate={isActive ? { y: 0, opacity: 1, scale: 1 } : { y: 20, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1, ease: ease.cinematic }}
              >
                {link.icon} {link.text}
              </motion.span>
            )}
          </motion.span>
        ))}
      </div>

      {/* Form with cinematic slide-up */}
      <ScaleReveal isActive={isActive} delay={1.0} fromScale={0.9} className="glass-form-wrap">
        <form className="glass-form" id="contact-form" onSubmit={handleSubmit}>
          {formFields.map((field, i) => (
            <motion.input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
              animate={isActive ? { x: 0, opacity: 1 } : { x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + i * 0.1, ease: ease.cinematic }}
              whileFocus={{ borderColor: 'var(--emerald)', boxShadow: '0 0 16px rgba(31,217,160,0.15)' }}
            />
          ))}

          <motion.select
            name="cf-type"
            defaultValue=""
            initial={{ x: -30, opacity: 0 }}
            animate={isActive ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.4, ease: ease.cinematic }}
          >
            <option value="">Project type</option>
            <option value="Website Development">Website Development</option>
            <option value="Full Stack Project">Full Stack Project</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO">SEO</option>
            <option value="Training">Training / Mentorship</option>
            <option value="Other">Other</option>
          </motion.select>

          <motion.textarea
            name="cf-message"
            placeholder="Tell me about your project"
            initial={{ y: 20, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5, ease: ease.cinematic }}
          />

          <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={isActive ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: ease.cinematic }}
          >
            <MagneticButton className="submit-btn" type="submit" strength={0.2}>
              Send It
            </MagneticButton>
          </motion.div>

          <div className={`form-note ${showNote ? 'show' : ''}`}>{note}</div>
        </form>
      </ScaleReveal>

      {/* Social icons with stagger pop */}
      <div className="social-row">
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            className="social-icon"
            target="_blank"
            rel="noopener noreferrer"
            title={s.title}
            initial={{ scale: 0, opacity: 0, rotate: -90 }}
            animate={isActive ? { scale: 1, opacity: 1, rotate: 0 } : { scale: 0, opacity: 0, rotate: -90 }}
            transition={{
              duration: 0.5,
              delay: 1.7 + i * 0.12,
              ease: ease.elastic,
            }}
            whileHover={{
              scale: 1.15,
              y: -4,
              borderColor: 'rgba(31,217,160,0.5)',
              boxShadow: '0 8px 24px rgba(31,217,160,0.25)',
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
