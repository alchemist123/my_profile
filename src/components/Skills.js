import React from 'react';
import skillImg from '../assets/img/skill.jpg';
import '../assets/css/styles.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__box">
          <h3 className="skills__subtitle">Development</h3>
          <span className="skills__name">Node js</span>
          <span className="skills__name">Typescript</span>
          <span className="skills__name">Javascript</span>
          <span className="skills__name">Html</span>
          <span className="skills__name">React</span>
          <span className="skills__name">MongoDB</span>
          <span className="skills__name">python</span>
          <span className="skills__name">AWS</span>
          <span className="skills__name">Docker</span>
          <span className="skills__name">SQL</span>
          <span className="skills__name">Postgres</span>
          <span className="skills__name">Nest js</span>
          <span className="skills__name">Express js</span>
          <span className="skills__name">GitLab CI/CD</span>
          <span className="skills__name">Bash</span>
          <span className="skills__name">ML</span>
          <span className="skills__name">InflexDb</span>
          <span className="skills__name">tensorFlow</span>
          <span className="skills__name">Business Development</span>
          <span className="skills__name">system architecture</span>
          <span className="skills__name">Research</span>
          <h3 className="skills__subtitle">Design</h3>
          <span className="skills__name">Figma</span>
          <span className="skills__name">Adobe XD</span>
          <span className="skills__name">Photoshop</span>
        </div>
        <div className="skills__img">
          <img src={skillImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
