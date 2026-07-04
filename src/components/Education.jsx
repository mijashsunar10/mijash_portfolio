const education = [
  {
    degree: 'Bachelor of Science in Computer Science & IT',
    school: 'Soch College of IT',
    period: '2021 — Present',
    location: 'Pokhara, Nepal',
  }
];

const achievements = [
  { title: 'Best Intern Award', desc: 'Received during 6-month internship at XDEZO Technologies, 2023.' },
  { title: '2nd Place in Code Camp', desc: 'Achieved 2nd place demonstrating strong competitive coding skills.' },
];

const Education = () => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="showcase-head">
        <div className="section-label">Academic Path</div>
        <h2 className="section-heading">Education & Achievements</h2>
      </div>
      <div className="timeline">
        {education.map((edu, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-date">{edu.period}</div>
            <div className="timeline-role">{edu.degree}</div>
            <div className="timeline-company">{edu.school} · {edu.location}</div>
          </div>
        ))}

        {achievements.map((a, i) => (
          <div className="timeline-item" key={'ach-' + i}>
            <div className="timeline-date">Achievement</div>
            <div className="timeline-role">{a.title}</div>
            <div className="timeline-company">{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
