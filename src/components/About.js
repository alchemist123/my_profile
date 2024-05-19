import React from 'react';
import a from '../assets/img/a.png';
import '../assets/css/styles.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={a} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am Amal V S</h2>
          <span className="about__profession">Software Engineer || DevOps Engineer</span>
          <p className="about__text">Experienced software engineer with 3.5+ years in Node.js backend development, DevOps, and project
leadership. Demonstrates expertise in developing robust backend solutions, optimizing deployment
workflows, and leading project teams to successful outcomes. Effective collaborator with a strong
focus on achieving business objectives through technological innovation</p>
          <div className="about__social">
            <a href="https://www.linkedin.com/in/amal-v-s-948079200/" className="about__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://gitlab.com/rjamaltdt123" className="about__social-icon"><i className='bx bxl-github'></i></a>
            <a href="https://www.instagram.com/_____alchemist______/" className="about__social-icon"><i className='bx bxl-instagram'></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
