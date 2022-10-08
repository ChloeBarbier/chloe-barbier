
import Typewriter from "typewriter-effect";

const Home = () => {
  const text1 = "Développeuse web";
  const text2 = "front-end";
  const text3 = "hello world !";

  return (
    <div className='container home'>
      <div className="grid-x">
        {/* <div className="cell small-4 container-image"> */}
        {/* <img className="image" src="../assets/img/test1.png" alt="laptop" /> */}
        {/* </div> */}
        <div className="cell small-12 container-title">
          <div className="title1">{text1}</div>
          <div className="title2">{text2}</div>
          <div className="title3">
            <div className="text">
              {text3.split('').map((char, key) => {
                return (<span key={key}>{char}</span>);
              })}
            </div>
          </div>
        </div>
        {/* <div className="cell small-6 container-laptop">
          <img className="image" src="../assets/img/laptop.webp" alt="laptop" />
          <div className="text">
            <Typewriter
              options={{
                // loop: true,
                delay: 40
              }}
              onInit={(typewriter)=> {
                typewriter
                .typeString("< h1 ><br />")
                .typeString("Envie de partager<br />")
                .typeString("une idée<br />")
                .typeString("un projet<br />")
                .typeString("< /h1 ><br />")
                .typeString("<br />")
                .typeString("< link ><br />")
                .typeString("<a href='/contact' class='button-contact'>  C'est ici. </a><br />")
                .typeString("< /link >")
                .pauseFor(5000)
                // .deleteAll(0.001)
                .start();
              }}
              />
          </div>
        </div> */}
      </div>
    </div>
  );
}

// .deleteAll(0.001)
  
export default Home;