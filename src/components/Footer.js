import React from 'react';
import '../assets/css/styles.css';

const Footer = () => {
  return (
    <footer className="footer section fade-in">
      <div className="footer__container bd-grid">
        <div className="footer__data">
          <h2 className="footer__title">AMAL V S</h2>
          <p className="footer__text">I'm AMAL V S, Come let's build Future</p>
        </div>
        <div className="footer__data">
          <h2 className="footer__title">EXPLORE</h2>
          <ul>
            <li><a href="#home" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#skills" className="footer__link">Skills</a></li>
            <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </div>
        <div className="footer__data">
          <h2 className="footer__title">FOLLOW</h2>
          <a href="https://www.facebook.com/amal.gjm/" className="footer__social"><i className='bx bxl-facebook'></i></a>
          <a href="https://www.instagram.com/_____alchemist______/" className="footer__social"><i className='bx bxl-instagram'></i></a>
          <a href="https://twitter.com/" className="footer__social"><i className='bx bxl-twitter'></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
