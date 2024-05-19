import React from 'react';
import perfil from '../assets/img/perfil.png';
import '../assets/css/styles.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container bd-grid fade-in">
        <h1 className="home__title"><span>HE</span><br />LLO.</h1>
        <div className="home__scroll scroll-animation">
          <a href="#about" className="home__scroll-link"><i className='bx bx-up-arrow-alt'></i>Scroll down</a>
        </div>
        <img src={perfil} alt="Profile" className="home__img move-from-right" />
      </div>
    </section>
  );
};

export default Home;
