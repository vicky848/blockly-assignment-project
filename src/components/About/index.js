import './index.css';

const About = () => {
  return (
    <div className="about-main-container py-5">
      <div className="container">
        <h1 className="about-heading">
          This is it. <span className="span-about-direction"> ;)</span>
        </h1>

        <div className="about-content-container">
          {/* Hand Image */}
          <div className="hand-img-container">
            <img src="image/hand.png" alt="pointer" className="pointer-img" />
          </div>

          {/* About Text */}
          <div className="about-text">
            <p>
              I'm <strong>Vicky Kumar Chowrasia</strong>,
              a dedicated and enthusiastic <strong>Full Stack Web Developer</strong> with a strong foundation in both frontend and backend technologies.
              I’m passionate about crafting seamless, responsive, and user-focused web applications that deliver real value.
            </p>

            <p>
              I have completed a full stack development program where
              I gained hands-on experience with industry-standard tools
              and technologies:
            </p>

            <ul>
              <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap, React.js</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Database:</strong> SQL (MySQL, PostgreSQL)</li>
              <li><strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Netlify, Vercel</li>
            </ul>

            <p>
              I enjoy solving problems, building intuitive user interfaces,
              and learning continuously. My goal is to contribute to meaningful projects
              and grow as a developer while creating experiences that are both functional 
              and beautiful.
            </p>

            <p>
              When I’m not coding, I like exploring new design trends,
              learning about emerging tech, and connecting with like-minded 
              people in the developer community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
