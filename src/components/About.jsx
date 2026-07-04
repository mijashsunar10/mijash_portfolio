import { Code2, Megaphone, GraduationCap, Search } from 'lucide-react';

const About = () => {
  return (
    <div className="scene-inner">
      <div className="depth-grid"></div>
      <div className="about-left">
        <div className="section-label">About Me</div>
        <h2 className="section-heading">Crafting Digital Experiences That Matter</h2>
        <p className="about-text">
          I am Mijash Sunar, a Web Developer, Digital Marketing Specialist, SEO Expert, 
          and Technical Instructor based in Pokhara, Nepal, with extensive hands-on experience 
          in building scalable web applications and developing effective digital strategies.
        </p>
        <p className="about-text">
          I specialize in modern web development technologies including Laravel, Livewire, MySQL, 
          Blade templating, JavaScript, Node.js, React, the MERN stack, and WordPress — enabling me 
          to design and develop high-performance and scalable digital solutions.
        </p>
        <p className="about-text">
          Alongside development, I work in digital marketing and SEO, helping businesses 
          improve their online visibility, reach the right audience, and achieve measurable growth. 
          I am also actively involved in technical training and mentoring, guiding students and 
          aspiring developers in modern web development and digital technologies.
        </p>
      </div>
      <div className="about-right">
        <div className="about-card">
          <div className="about-card-icon"><Code2 size={22} /></div>
          <div className="about-card-title">Full Stack Developer</div>
          <div className="about-card-desc">
            Laravel, React, MERN Stack, WordPress — building end-to-end scalable web applications.
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-icon"><Megaphone size={22} /></div>
          <div className="about-card-title">Digital Marketing Expert</div>
          <div className="about-card-desc">
            Strategy-driven campaigns that improve online visibility and deliver measurable growth.
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-icon"><Search size={22} /></div>
          <div className="about-card-title">SEO Expert</div>
          <div className="about-card-desc">
            Technical & on-page SEO to help businesses rank higher and reach the right audience.
          </div>
        </div>
        <div className="about-card">
          <div className="about-card-icon"><GraduationCap size={22} /></div>
          <div className="about-card-title">Senior Instructor</div>
          <div className="about-card-desc">
            Teaching PHP, Laravel, MERN Stack, and Digital Marketing to the next generation of developers.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
