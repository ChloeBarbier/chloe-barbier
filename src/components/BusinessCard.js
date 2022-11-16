import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { TiBusinessCard } from 'react-icons/ti';
import { myNumber, myEmail, myLinkedin, myGithub, myContact } from '../data/contact';

const BusinessCard = ({setisMouseHover, isMouseHover}) => {
  const { t } = useTranslation();
  const [isCopied, setisCopied] = useState(false);

    const copytoClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setisCopied(true);
      }

    return (
        <div className="cell grid-y align-center align-self-stretch description">
            <div className='cell text'><span>{t('contact.businessCard.needInfo')}</span></div>
            <div className='cell text'><span>{t('contact.businessCard.shareProject')}</span></div>
            <div className='cell text'><span>{t('contact.businessCard.contactMe')}</span></div>
            <div className='cell text'>
            <div id="links" className="links">

                <div
                onMouseLeave={() => {setisCopied(false); setisMouseHover(false);}}
                onMouseOver={() => setisMouseHover(true)}
                onClick={() => copytoClipboard(myContact)} 
                data-descr={isCopied ? t('contact.businessCard.copied') : t('contact.businessCard.copy')} 
                className={(isCopied ? 'isCopied' : '') + ' business-card grid-x align-middle'}>
                    <TiBusinessCard className="cell shrink social-media-icons"/>
                    <span className="cell auto">{t('contact.businessCard.businessCard')}</span>
                </div>
                <br />

                <div className='tel'>
                <a className={isMouseHover ? 'fakeOnHover' : ''} href="tel:+33650966461" target="_blank" rel="noreferrer">
                    <BsTelephoneFill className="social-media-icons"/>
                    <span> {myNumber}</span>
                </a>
                </div>

                <div className='mail'>
                <a className={isMouseHover ? 'fakeOnHover' : ''} href={`mailto:${myEmail}`} target="_blank" rel="noreferrer">
                    <GrMail className="social-media-icons"/>
                    <span> {myEmail}</span>
                </a>
                </div>

                <div className='linkedin'>
                <a className={isMouseHover ? 'fakeOnHover' : ''} href={myLinkedin} target="_blank" rel="noreferrer">
                    <FaLinkedin className="social-media-icons"/>
                    <span> LinkedIn</span>
                </a>
                </div>

                <div className='github'>
                <a className={isMouseHover ? 'fakeOnHover' : ''} href={myGithub} target="_blank" rel="noreferrer">
                    <BsGithub className="social-media-icons"/>
                    <span> GitHub</span>
                </a>
                </div>
            </div>

            <div className="location">
                <img className="img-location icon" src="/assets/img/icon/location.png" alt="icon" />
                France
            </div>

            </div>
        </div>
    )
}

BusinessCard.defaultProps = {
    setisMouseHover: () => {},
    isMouseHover: false
}
    
BusinessCard.propTypes = {
    setisMouseHover: PropTypes.func.isRequired,
    isMouseHover: PropTypes.bool.isRequired
}

export default BusinessCard;