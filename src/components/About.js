import React from "react"
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const About = ({setisMouseHover}) => {
  
  const { t } = useTranslation();
  const onMouseOver = () => {
        setisMouseHover(true);
    }
    const onMouseLeave = () => {
        setisMouseHover(false);
    }
    return (
      <div className="cell small-12 medium-12 large-6 description about-description grid-y align-center">
        <div className='cell text'>
          <span>Bonjour, Hi !</span>
        </div>
        <div className='cell text'>
          <img className="icon img-bracket" src="/assets/img/icon/bracket.png" alt="icon" />
          <span>{t('contact.about.introduction')}</span>
        </div>
        <div className='cell text'>
          <img className="icon img-rocket" src="/assets/img/icon/rocket.png" alt="icon" />
          <span>{t('contact.about.engineer')}</span>
        </div>
        <div className='cell text'>
          <img className="icon img-pin" src="/assets/img/icon/pin.png" alt="icon" />
          <span>{t('contact.about.nowadays')}</span>
        </div>
        <div className='cell grid-x align-bottom align-center'>
          <div 
          className="grid-x align-bottom align-center text contact-page-link"
          onMouseOver={onMouseOver} 
          onMouseLeave={onMouseLeave}
          >
            <div className='cell shrink'>
              <img className="icon img-crystal" src="/assets/img/icon/crystal.png" alt="icon" />
            </div>
            <div className='cell shrink contact-text'>
              <div>{t('contact.about.contact')}</div>
            </div>
          </div>
        </div>
      </div>
    )
}

About.defaultProps = {
  setisMouseHover: () => {}
}
  
About.propTypes = {
  setisMouseHover: PropTypes.func.isRequired
}

export default About;