import React, { useContext } from 'react';
import { Context } from '../config/state.manager';
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { initialState } from '../config/state.manager';

const Footer = () => {
    const { state } = useContext(Context);
    const { isActive } = state || initialState;

    return (
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
    )
}

export default Footer;