import { FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className='container contact'>
      <div className="grid-x">
        <div className="cell small-6 info">
          <div className="title">
            <div>Besoin d'informations ?</div>
            <div>Envie de partager un projet ?</div>
            <div>Contactez-moi.</div>
          </div>
          <div className="text">
            <div className="email">chloe.barbier.insa@gmail.com</div>
            <div className="phone">+33 (0)6 50 96 64 61</div>
            <div className="location">34200 Sète, France</div>
            <div className="links">
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
          </div>
        </div>
        <div className="cell small-6 carte">
          <img src="../assets/img/carte-sete.png" alt="carte" />
        </div>
      </div>
    </div>
  );
}
  
export default Contact;