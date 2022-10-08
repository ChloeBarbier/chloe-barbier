const About = () => {
  return (
    <div className='container about'>
      <div className="grid-x">
        <div className="cell small-6 photo">
          <img src="../assets/img/portrait.JPG" alt="portrait" />
        </div>
        <div className="cell small-6 description">
          <div className="title">Bonjour,</div>
          <div className="text">
            <div>⭐️ Je suis développeuse web, active professionnellement depuis plusieurs années, 
            je travaille essentiellement sur des technologies front-end, bien que j'apprécie
            de plus en plus élargir mon activité avec du back-end et du design web.</div>
            <br />
            <div>🚀 Diplômée dans un premier temps en ingénierie physique, je suis capable de mener des projets qui nécessitent un niveau avancé en mathématiques notamment.
            Cette formation et mon expérience en tant qu'ingénieure m'ont apportées la rigueur, la gestion de projet, ainsi que des méthodes de travail et d'apprentissage rapide.</div>
            <br />
            <div>🌤 Au quotidien, je code, mais j'apprécie aussi beaucoup le temps passé à lire et écouter de la vulgarisation scientifique, des podcasts, apprendre à naviguer, et randonner en pleine nature avec mon chien.</div>
            <br />
            <div>📍 Je suis actuellement basée en France, j'ai pour habitude de travailler à distance, en équipe, en anglais ou en français.</div>
            <br />
            <div>🔮 <a className="contact-page-link" href="/contact">Pour entrer en contact.</a></div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default About;