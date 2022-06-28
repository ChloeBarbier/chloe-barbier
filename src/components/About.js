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
            de plus en plus élargir mes compétences sur du back-end et du design web.</div>
            <br />
            <div>🚀 Diplômée en 2013 en ingénierie physique, je suis capable de mener des projets qui nécessitent un niveau avancé en mathématiques par exemple.
            Cette formation et mon expérience en tant qu'ingénieure m'ont apportées, d'autre part, une certaine rigueure, des capacités en gestion de projet, des méthodes de travail et d'apprentissage rapide.</div>
            <br />
            <div>😻 Dans ma sphère personnelle, j'apprécie beaucoup la vulgarisation scientifique, et je marche de longues heures dans la nature avec mon chien.</div>
            <br />
            <div>📍 Je suis actuellement basée en France, j'ai pour habitude de travailler à distance, en équipe, en anglais ou en français.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default About;