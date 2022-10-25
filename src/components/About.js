const introduction = 
 'Je suis développeuse web, et depuis plusieurs années maintenant je travaille essentiellement'
+' sur des technologies front-end. J\'élargie mes activités avec du design et de l\'intégration web.';
const engineer = 'Étant ingénieure en physique, j\'ai également une expertise sur des projets qui nécessitent une approche scientifique, mathématique.';
const nowadays = 'Je suis actuellement en France, à mon compte. Je travaille à distance, seule ou en équipe, en anglais et en français.';
const contact = '~ Entrer en contact ~';
// const daily = 'Au quotidien, je code, mais j\'apprécie aussi beaucoup le temps passé à lire et écouter de'
// +' la vulgarisation scientifique, des podcasts, apprendre à naviguer, et randonner en pleine nature avec mon chien.';


const About = ({setisMouseHover}) => {
    const onMouseOver = () => {
        setisMouseHover(true);
    }
    const onMouseLeave = () => {
        setisMouseHover(false);
    }
    return (
      <div className="cell auto description about-description grid-y align-center align-self-stretch ">
        <div className='cell text'>
          <span>Bonjour, Hi !</span>
        </div>
        <div className='cell text'>
          <img className="icon img-bracket" src="/assets/img/about/about-bracket.png" alt="icon" />
          <span>{introduction}</span>
        </div>
        <div className='cell text'>
          <img className="icon img-rocket" src="/assets/img/about/about-rocket.png" alt="icon" />
          <span>{engineer}</span>
        </div>
        <div className='cell text'>
          <img className="icon img-pin" src="/assets/img/about/about-pin.png" alt="icon" />
          <span>{nowadays}</span>
        </div>
        <div className='cell grid-x align-bottom align-center'>
          <div 
          className="grid-x align-bottom align-center text contact-page-link"
          onMouseOver={onMouseOver} 
          onMouseLeave={onMouseLeave}
          >
            <div className='cell shrink'>
              <img className="img-crystal" src="/assets/img/about/about-crystal.png" alt="icon" />
            </div>
            <div className='cell shrink contact-text'>
              <div>{contact}</div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;