import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { TiBusinessCard } from 'react-icons/ti';
import { myNumber, myEmail, myLinkedin, myGithub, myContact } from '../data/contact';

const needInfo = "Besoin d'informations ?";
const shareProject = "Envie de partager un projet ?";
const contactMe = "Contactez-moi.";
const copy = 'copier';
const copied = "copiée!"
const businessCard = 'Carte de visite';

const BusinessCard = ({setisMouseHover, isMouseHover}) => {
    const [isCopied, setisCopied] = useState(false);

    const copytoClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setisCopied(true);
      }

    return (
        <div className="cell grid-y align-center align-self-stretch description">
            <div className='cell text'><span>{needInfo}</span></div>
            <div className='cell text'><span>{shareProject}</span></div>
            <div className='cell text'><span>{contactMe}</span></div>
            <div className='cell text'>
            <div id="links" className="links">

                <div
                onMouseLeave={() => {setisCopied(false); setisMouseHover(false);}}
                onMouseOver={() => setisMouseHover(true)}
                onClick={() => copytoClipboard(myContact)} 
                data-descr={isCopied ? copied : copy} 
                className={(isCopied ? 'isCopied' : '') + ' business-card grid-x align-middle'}>
                    <TiBusinessCard className="cell shrink social-media-icons"/>
                    <span className="cell auto">{businessCard}</span>
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
                <img className="img-location icon" src="/assets/img/experience/location.png" alt="icon" />
                France
            </div>

            </div>
        </div>
    )
}
export default BusinessCard;