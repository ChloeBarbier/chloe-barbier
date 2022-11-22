import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { TbMoon } from 'react-icons/tb';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const onClick = () => {
      if (document.documentElement.getAttribute('data-theme') !== 'light') {
        setIsDarkMode(false);
        document.documentElement.setAttribute('data-theme', 'light');
      }
      else {
        setIsDarkMode(true);
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    }
    useEffect(() => {
      return () => {
        setIsDarkMode(true);
        document.documentElement.removeAttribute('data-theme');
      };
    }, []);

    return (
        <footer className={`App-footer`}>
          <div className='content-footer'>
            <div className='container'>

              <div className="author">
                © Chloé Barbier - 2022
              </div>

              <div className="switch">
                <input onClick={onClick} checked={isDarkMode} className="switch-input" id="exampleRadioSwitch1" type="radio" name="testGroup" />
                <label className="switch-paddle" htmlFor="exampleRadioSwitch1">
                  <span className="show-for-sr"></span>
                  <span className="switch-active" aria-hidden="true">
                    <HiSun />
                  </span>
                  <span className="switch-inactive" aria-hidden="true">
                    <TbMoon />
                  </span>
                </label>
              </div>

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

Footer.defaultProps = {
  setIsActive: ()=>{}
}
  
Footer.propTypes = {
  setIsActive: PropTypes.func
}
export default Footer;