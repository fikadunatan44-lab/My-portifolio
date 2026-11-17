
import './App.css';

function App() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Python',
    'Django',
    'C++',
    'Cybersecurity',
    'Artificial Intelligence',
    'Git & GitHub'
  ];

  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          NF<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="welcome">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            I'm <span>Nathenael Fikadu</span>
          </h1>

          <h2>Computer Engineering Student</h2>

          <p className="hero-description">
            I am passionate about software development,
            cybersecurity, and artificial intelligence.
            I enjoy learning new technologies and building
            practical solutions to real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Explore My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>

        </div>

        <div className="profile">
          <div className="profile-image">
            <img
              src="/profile.jpg"
              alt="Nathenael Fikadu"
            />
          </div>

          <p>Learning. Building. Growing.</p>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="section">

        <p className="welcome">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <div className="about-content">

          <h3>Who I Am</h3>

          <p>
            My name is Nathenael Fikadu. I am a fourth-year
            Electrical and Computer Engineering student at
            Dire Dawa University, Ethiopia.
          </p>

          <p>
            I am interested in software development, web
            technologies, cybersecurity, and artificial
            intelligence. I continuously improve my
            technical knowledge through learning and
            practical projects.
          </p>

          <p>
            My goal is to become a skilled engineer and
            contribute to solving real-world problems
            through technology.
          </p>

          <div className="education">

            <div>
              <h4>Education</h4>
              <p>Computer Engineering</p>
            </div>

            <div>
              <h4>University</h4>
              <p>Dire Dawa University</p>
            </div>

            <div>
              <h4>Location</h4>
              <p>Ethiopia</p>
            </div>

          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">

        <p className="welcome">MY TECHNICAL KNOWLEDGE</p>

        <h2>My Skills</h2>

        <p>
          Technologies I have studied and continue to develop.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span>
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3>{skill}</h3>
            </div>
          ))}

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">

        <p className="welcome">WHAT I HAVE BEEN WORKING ON</p>

        <h2>My Projects</h2>

        <div className="projects-grid">

          <div className="project-card">

            <p>WEB DEVELOPMENT ↗</p>

            <h3>Student Skill Exchange Platform</h3>

            <p>
              A web-based platform designed to help
              Dire Dawa University students share skills,
              find learning partners, and exchange knowledge.
            </p>

            <span>React • Django • PostgreSQL</span>

            <h4>In Progress</h4>

          </div>

          <div className="project-card">

            <p>FRONTEND DEVELOPMENT ↗</p>

            <h3>Personal Portfolio Website</h3>

            <p>
              A personal website showcasing my background,
              technical skills, projects, and professional goals.
            </p>

            <span>React • CSS • JavaScript</span>

            <h4>In Progress</h4>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">

        <p className="welcome">LET'S CONNECT</p>

        <h2>Contact Me</h2>

        <h3>Have a project or an idea?</h3>

        <p>
          I would be happy to connect, share ideas,
          and explore opportunities to learn and collaborate.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn"
        >
          Send Me an Email
        </a>

      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Nathenael Fikadu. All Rights Reserved.</p>

        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  );
}

export default App;
