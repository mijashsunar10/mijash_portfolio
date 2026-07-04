import { ExternalLink } from 'lucide-react';

const projects = [
  { tag: 'Healthcare · Laravel', name: 'Fewa City Hospital', url: '#' },
  { tag: 'Education · IT Company', name: 'Niti Academy', url: '#' },
  { tag: 'Tourism · Laravel', name: 'Nepalese Trekking', url: '#' },
  { tag: 'Association · WordPress', name: 'Gamma Pokhara', url: '#' },
  { tag: 'Education · School', name: 'Blooming Buds Academy', url: '#' },
  { tag: 'Education · School', name: 'Dhungesanghu Boarding School', url: '#' },
  { tag: 'Education · School', name: 'Balkalyan High School', url: '#' },
  { tag: 'Education · School', name: 'Kantipur Academy', url: '#' },
  { tag: 'Education · School', name: 'Rainbow Academic Homes', url: '#' },
  { tag: 'Business · E-commerce', name: 'Monika Tyre Suppliers', url: '#' },
  { tag: 'Education · School', name: 'Jyotikunj Secondary School', url: '#' },
  { tag: 'Education · Bakery', name: 'School of Bakery & Pastry', url: '#' },
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
