import { FaLinkedin } from 'react-icons/fa';
import { BsTelephoneFill, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import Title from '../components/Title';

const needInfo = "Besoin d'informations ?";
const shareProject = "Envie de partager un projet ?";
const contactMe = "Contactez-moi.";


const Contact = () => {
  return (
    <div className='container contact'>
      <div className="grid-y">
        <Title text="Contact" />
        <div className='align-middle align-center grid-x'>
          <div className="photo">
            <img src="../assets/img/portrait_debout_cadre.png" alt="portrait" />
          </div>
          <div className="cell shrink description">
            <div className='text'><span>{needInfo}</span></div>
            <div className='text'><span>{shareProject}</span></div>
            <div className='text'><span>{contactMe}</span></div>
            <div className='text'>
              <div className="links">
                <div className='tel'>
                  <a href="tel:+33650966461" target="_blank" rel="noreferrer">
                    <BsTelephoneFill className="social-media-icons"/>
                    <span> +33 (0)6 50 96 64 61</span>
                  </a>
                </div>
                <div className='mail'>
                  <a href="mailto:chloe.barbier.insa@gmail.com" target="_blank" rel="noreferrer">
                    <GrMail className="social-media-icons"/>
                    <span> chloe.barbier.insa@gmail.com</span>
                  </a>
                </div>
                <div className='linkedin'>
                  <a href="https://www.linkedin.com/in/chloe-barbier/" target="_blank" rel="noreferrer">
                    <FaLinkedin className="social-media-icons"/>
                    <span> LinkedIn</span>
                  </a>
                </div>
                <div className='github'>
                  <a href="https://www.github.com/ChloeBarbier" target="_blank" rel="noreferrer">
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
         
        </div>
      </div>
    </div>
  );
}
  
export default Contact;