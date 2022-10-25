import React, { useState, useEffect, useContext } from 'react';
import { Context } from './config/state.manager';
import './App.scss';
import { initialState } from './config/state.manager';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Main from './Main';
import { useTranslation } from "react-i18next";
import Lang from "./components/Lang";

const App = () => {
  const { t } = useTranslation();
  const { state } = useContext(Context);
  const { homeIsActive } = state || initialState;
  const [isActive, setIsActive] = useState(homeIsActive);

  useEffect(() => {
    setIsActive(homeIsActive === true);
  }, [homeIsActive]);

  return (
    <Router>
      <div className={`App ${isActive ? 'HomeIsActive' : ''}`}>
        <header className={`App-header ${isActive ? 'HomeIsActive' : ''}`}>
          <div className='content-header'>
            <div className='container'>
              <div className={`title ${isActive ? 'HomeIsActive' : ''}`}>
                <Link className="main-title" to="/">
                  {/* <img src="/assets/img/favicon.png" alt="icon" /> */}
                  {/* <img src="/assets/img/bracket1.webp" alt="icon" /> */}
                  {/* <img src="/assets/img/bracket2.png" alt="icon" /> */}
                  <img className={`${isActive ? 'HomeIsActive' : ''}`} src="/assets/img/et2.png" alt="icon" />
                  {/* Chloé Barbier */}
                </Link>
              </div>
              <nav className={`menu ${isActive ? 'HomeIsActive' : ''}`}>
                {/* <Link className="menu-item" to="/">Accueil</Link> */}
                <Link className="menu-item" to="experience">{t('nav.experience')}</Link>
                <Link className="menu-item" to="education">{t('nav.education')}</Link>
                <Link className="menu-item" to="projects">{t('nav.projects')}</Link>
                {/* <Link className="menu-item" to="about">{t('nav.about')}</Link> */}
                <Link className="menu-item" to="contact">{t('nav.contact')}</Link>
                <Lang />
              </nav>
            </div>
          </div>
        </header>
        <Main />
        <footer className={`App-footer ${isActive ? 'HomeIsActive' : ''}`}>
          <div className='content-footer'>
            <div className='container'>
              <div className="author">© Chloé Barbier - 2022</div>
              <div className="social-media">
                <a className="social-media-link" href="tel:+33650966461" target="_blank" rel="noreferrer">
                  <BsTelephoneFill className="social-media-icons"/>
                </a>
                <a className="social-media-link" href="mailto:chloe.barbier.insa@gmail.com" target="_blank" rel="noreferrer">
                  <GrMail className="social-media-icons"/>
                </a>
                <a className="social-media-link" href="https://www.linkedin.com/in/chloe-barbier/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-media-icons"/>
                </a>
                <a className="social-media-link" href="https://www.github.com/ChloeBarbier" target="_blank" rel="noreferrer">
                  <BsGithub className="social-media-icons"/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
