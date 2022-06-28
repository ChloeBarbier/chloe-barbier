import './App.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Main from './Main';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className='content-header'>
            <div className='container'>
              <div className="title">
                <Link className="main-title" to="/">
                  <img src="/assets/img/favicon.png" alt="icon" />
                  Chloé Barbier
                </Link>
                {/* <div className="sub-title">Photographie</div> */}
              </div>
              <nav className="menu">
                <Link className="menu-item" to="/">Accueil</Link>
                <Link className="menu-item" to="gallery">Galerie</Link>
                <Link className="menu-item" to="about">À propos</Link>
                <Link className="menu-item" to="contact">Contact</Link>
              </nav>
            </div>
          </div>
        </header>
        <Main />
        <footer className="App-footer">
          <div className='content-footer'>
            <div className='container'>
              <div className="author">© Chloé Barbier - Mise à jour 28 juin 2022</div>
              <div className="social-media">
                <a className="social-media-link" href="tel:+33650966461" target="_blank" rel="noreferrer">
                  <BsTelephoneFill className="social-media-icons"/>
                </a>
                <a className="social-media-link" href="https://www.linkedin.com/in/chloe-barbier/" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-media-icons"/>
                </a>
                <a className="social-media-link" href="mailto:chloe.barbier.insa@gmail.com" target="_blank" rel="noreferrer">
                  <GrMail className="social-media-icons"/>
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
