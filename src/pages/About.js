import Title from '../components/Title';

const introduction = 
 'Je suis développeuse web, active professionnellement depuis plusieurs années, je travaille essentiellement'
+' sur des technologies front-end, bien que j\'élargisse régulièrement mes compétences en back-end et design web.';
const engineer = 'Étant également diplômée et expérimentée en ingénierie physique, je suis capable de mener'
+' à bien des projets qui nécessitent un niveau avancé en mathématiques, ou en sciences de manière plus générale.';
const daily = 'Au quotidien, je code, mais j\'apprécie aussi beaucoup le temps passé à lire et écouter de'
+' la vulgarisation scientifique, des podcasts, apprendre à naviguer, et randonner en pleine nature avec mon chien.';
const nowadays = 'Je suis actuellement en France, je travaille à distance, en équipe, en anglais ou en français.';
const contact = 'Pour entrer en contact.';


const About = () => {
  return (
    <div className='container about'>
      <div className="grid-y">
        <Title text="À propos" />
        <div className='align-middle align-center grid-x'>
          <div className="photo">
            {/* <img src="../assets/img/portrait_debout_cadre.png" alt="portrait" /> */}
          </div>
          <div className="cell shrink description about-description">
            <div className='text'>
              <span>Bonjour, Hi !</span>
            </div>
            <div className='text'>
              <img className="img-bracket" src="/assets/img/about/about-bracket.png" alt="icon" />
              <span>{introduction}</span>
            </div>
            <div className='text'>
              <img className="img-rocket" src="/assets/img/about/about-rocket.png" alt="icon" />
              <span>{engineer}</span>
            </div>
            <div className='text'>
              <img className="img-daily" src="/assets/img/about/about-daily.png" alt="icon" />
              <span>{daily}</span>
            </div>
            <div className='text'>
              <img className="img-pin" src="/assets/img/about/about-pin.png" alt="icon" />
              <span>{nowadays}</span>
            </div>
            <a className="text contact-page-link grid-x align-bottom align-center" href="/contact">
              <div className='cell shrink'>
                <img className="img-crystal" src="/assets/img/about/about-crystal.png" alt="icon" />
              </div>
              <div className='cell shrink contact-text'>
                <div>{contact}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default About;