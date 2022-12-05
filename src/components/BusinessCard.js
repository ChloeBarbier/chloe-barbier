import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaAddressCard } from 'react-icons/fa';
import { myNumber, myEmail, myLinkedin, myGithub, myContact } from '../data/contact';

const BusinessCard = ({setisMouseHover, isMouseHover}) => {
  const { t } = useTranslation();
  const [isCopied, setisCopied] = useState(false);

    const copytoClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setisCopied(true);
        setisMouseHover(false);
    }

    const class_a = isMouseHover ? 'fakeOnHover grid-x align-middle' : 'grid-x align-middle';

    return (
        <div className="cell grid-x align-center align-middle small-12 medium-12 large-6 description">
            <div className='cell small-10 medium-10 grid-y align-middle'>
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
                            <FaAddressCard className="cell shrink social-media-icons"/>
                            <span className="cell shrink">{t('contact.businessCard.businessCard')}</span>
                        </div>
                        <br />

                        <div className='link tel'>
                            <a className={class_a} href="tel:+33650966461" target="_blank" rel="noreferrer">
                                <BsTelephoneFill className="cell shrink social-media-icons"/>
                                <span className="cell shrink social-media-text">{myNumber}</span>
                            </a>
                        </div>

                        <div className='link mail'>
                            <a className={class_a} href={`mailto:${myEmail}`} target="_blank" rel="noreferrer">
                                <GrMail className="cell shrink social-media-icons"/>
                                <span className="cell shrink social-media-text">{myEmail}</span>
                            </a>
                        </div>

                        <div className='link linkedin'>
                            <a className={class_a} href={myLinkedin} target="_blank" rel="noreferrer">
                                <FaLinkedin className="cell shrink social-media-icons"/>
                                <span className="cell shrink social-media-text"> LinkedIn</span>
                            </a>
                        </div>

                        <div className='link github'>
                            <a className={class_a} href={myGithub} target="_blank" rel="noreferrer">
                                <BsGithub className="cell shrink social-media-icons"/>
                                <span className="cell shrink social-media-text"> GitHub</span>
                            </a>
                        </div>
                    </div>
                    <div className="location grid-x align-middle">
                        <img className="img-location icon" src="/assets/img/icon/location.png" alt="icon" />
                        France
                    </div>
                </div>
            </div>

            <div className={isMouseHover ? 'cell small-2 medium-2 photo fakeOnHover' : 'cell small-2 medium-2 photo'}>
                <img src="../assets/img/portrait.png" alt="portrait" />
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