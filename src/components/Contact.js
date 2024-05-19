import React from 'react';
import '../assets/css/styles.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container bd-grid">
        <div className="contact__info">
          <h3 className="contact__subtitle">EMAIL</h3>
          <span className="contact__text">rjamaltdt123@gmail.com</span>
          <h3 className="contact__subtitle">PHONE</h3>
          <span className="contact__text">+91 9995643204</span>
          <h3 className="contact__subtitle">ADDRESS</h3>
          <span className="contact__text">Kochi, India</span>
        </div>
        <form action="" className="contact__form">
          <div className="contact__inputs">
            <input type="text" placeholder="Name" className="contact__input" />
            <input type="mail" placeholder="Email" className="contact__input" />
          </div>
          <textarea name="" id="" cols="0" rows="10" className="contact__input"></textarea>
          <input type="submit" value="Send" className="contact__button" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
