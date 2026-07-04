import { Globe, Server, Wrench, Palette, Database, Layout } from 'lucide-react';

const skillData = [
  {
    name: 'Frontend',
    icon: <Layout size={16} />,
    skills: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Alpine JS', 'Livewire'],
  },
  {
    name: 'Backend',
    icon: <Server size={16} />,
    skills: ['Laravel', 'PHP', 'Node JS', 'Express JS', 'REST API', 'WordPress'],
  },
  {
    name: 'Database',
    icon: <Database size={16} />,
    skills: ['MySQL', 'MongoDB', 'Postgres SQL'],
  },
  {
    name: 'DevOps & Tools',
    icon: <Wrench size={16} />,
    skills: ['Git', 'VS Code Extensions', 'Filezilla', 'cPanel', 'Photoshop'],
  },
  {
    name: 'Digital Marketing',
    icon: <Globe size={16} />,
    skills: ['SEO', 'Content Strategy', 'Social Media', 'Paid Ads', 'Analytics'],
  },
  
  {
    name: 'Other',
    icon: <Palette size={16} />,
    skills: ['Web Design', 'Teaching', 'Technical Writing', 'Project Management'],
  },
];

const Skills = () => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="showcase-head">
        <div className="section-label">Tech Stack</div>
        <h2 className="section-heading">Skills & Technologies</h2>
      </div>
      <div className="skill-categories">
        {skillData.map((cat) => (
          <div className="skill-category" key={cat.name}>
            <div className="skill-cat-name">
               {cat.icon} {cat.name}
            </div>
            <div className="skill-pills">
              {cat.skills.map((s) => (
                <span className="skill-pill" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
