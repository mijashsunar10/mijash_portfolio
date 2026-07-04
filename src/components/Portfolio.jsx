import { ExternalLink } from 'lucide-react';

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
  { tag: 'Healthcare · Laravel', name: 'Fewa City Hospital', url: '#', image: imgFewa },
  { tag: 'Education · IT Company', name: 'Niti Academy', url: '#', image: imgNiti },
  { tag: 'Tourism · Laravel', name: 'Nepalese Trekking', url: '#', image: imgTrekking },
  { tag: 'Association · WordPress', name: 'Gamma Pokhara', url: '#', image: imgGama },
  { tag: 'Education · School', name: 'Blooming Buds Academy', url: '#' },
  { tag: 'Education · School', name: 'Dhungesanghu Boarding School', url: '#' },
  { tag: 'Education · School', name: 'Balkalyan High School', url: '#', image: imgBalkalyan },
  { tag: 'Education · School', name: 'Kantipur Academy', url: '#', image: imgKantipur },
  { tag: 'Education · School', name: 'Rainbow Academic Homes', url: '#', image: imgRah },
  { tag: 'Business · E-commerce', name: 'Monika Tyre Suppliers', url: '#' },
  { tag: 'Education · School', name: 'Jyotikunj Secondary School', url: '#', image: imgJyotikunj },
  { tag: 'Education · Bakery', name: 'School of Bakery & Pastry', url: '#', image: imgBakery },
  { tag: 'Personal · Portfolio', name: 'Raghunath Wagle', url: '#' },
  { tag: 'Personal · Portfolio', name: 'Madhab Pokharel', url: '#' },
];

const Portfolio = () => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="showcase-head">
        <div className="section-label">Selected Work</div>
        <h2 className="section-heading">Projects & Websites</h2>
      </div>
      <div className="work-grid">
        {projects.map((p, i) => (
          <div className="work-card" key={i}>
            <div className="swatch"></div>
            {p.image && <img src={p.image} alt={p.name} className="work-card-bg-img" />}
            <div className="work-logo-wrap">
              {p.image ? (
                <img src={p.image} alt={p.name} className="work-logo-img" />
              ) : (
                <div className="work-logo-fallback">{p.name.charAt(0)}</div>
              )}
            </div>
            <div className="tag">{p.tag}</div>
            <div className="name">{p.name}</div>
            {p.url && p.url !== '#' && (
              <a
                className="visit-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit website"
              >
                <ExternalLink size={13} />
              </a>
            )}
            {(!p.url || p.url === '#') && (
              <div className="visit-link">
                <ExternalLink size={13} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
