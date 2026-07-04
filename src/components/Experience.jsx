const experiences = [
  {
    date: 'Nov 2025 — Present',
    role: 'PHP Backend Developer',
    company: 'MoreTech Global · Remote',
    desc: [
      'Working as a Senior PHP Developer on a Sweden-based project, Splitgrid — a payment solution for transactions between retailers and suppliers.',
      'Contributing to the development of secure, scalable, and efficient financial workflows and the entire system.',
    ],
  },
  {
    date: 'Mar 2025 — Present',
    role: 'Full Stack Developer & Senior Instructor',
    company: 'Niti Academy · Nayabazar, Pokhara',
    desc: [
      'Developed the website for Fewa City Hospital with healthcare information, services, and appointment booking features.',
      'Built individual websites for multiple schools in Pokhara — Blooming Buds Academy, Rainbow Academic Homes, Kantipur Academy, Balkalyan High School, and more.',
      'Developed business websites for Monika Tyre Suppliers, Niti Academy, and GAMA Pokhara (Gandaki Automobile Association).',
      'Instructor for Digital Marketing, WordPress, SEO, PHP & Laravel, and MERN Stack Development.',
    ],
  },
  {
    date: 'Mar 2024 — Mar 2025',
    role: 'Freelance Full Stack Developer',
    company: 'Self Employed · Birauta, Pokhara',
    desc: [
      'Developed a responsive tourism website for Dawn in Nepal Adventures P. Ltd with admin-managed content and booking functionality.',
      'Built a dynamic bakery school website for School of Bakery and Pastry Technology with admin controls and email integration.',
      'Developed a fully functional resort website for Alfanzoo Resort in Lakeside Pokhara.',
      'Created a Mental Health & Rehabilitation platform with payments, real-time chat, Jitsi video therapy, and AI chatbot.',
      'Developed a Laravel-based collaborative story writing platform with co-authoring, Esewa payment, and user activity tracking.',
    ],
  },
];

const education = {
  degree: 'Bachelor of Science in Computer Science & IT',
  school: 'Soch College of IT',
  period: '2021 — Present',
  location: 'Pokhara, Nepal',
};

const achievements = [
  { title: 'Best Intern Award', desc: 'Received during 6-month internship at XDEZO Technologies, 2023.' },
  { title: '2nd Place in Code Camp', desc: 'Achieved 2nd place demonstrating strong competitive coding skills.' },
];

const Experience = () => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="showcase-head">
        <div className="section-label">Career Path</div>
        <h2 className="section-heading">Experience & Education</h2>
      </div>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-date">{exp.date}</div>
            <div className="timeline-role">{exp.role}</div>
            <div className="timeline-company">{exp.company}</div>
            <ul className="timeline-desc">
              {exp.desc.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Education */}
        <div className="timeline-item">
          <div className="timeline-date">{education.period}</div>
          <div className="timeline-role">{education.degree}</div>
          <div className="timeline-company">{education.school} · {education.location}</div>
        </div>

        {/* Achievements */}
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

export default Experience;
