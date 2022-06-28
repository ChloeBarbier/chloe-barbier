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
          </div>
        </div>
        <div className="cell small-6 carte">
          <img src="../assets/img/carte-sete.png" alt="carte" />
          {/* <img src="../assets/img/carte.webp" alt="carte" /> */}
        </div>
      </div>
    </div>
  );
}
  
export default Contact;