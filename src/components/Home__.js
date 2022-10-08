
// import Typewriter from "typewriter-effect";
import React, { useEffect, useContext } from 'react';
import { Context } from '../config/state.manager';

const Home = () => {
  const { dispatch } = useContext(Context);

  const name = "Chloé Barbier";
  const webdev = "Développeuse web";
  const frontend = "front-end";
  const engineer = "Ingénieure";
  const physics = "physique";

  useEffect(() => {
    dispatch({ type:'setHomeIsActive', homeIsActive: true });
    return () => dispatch({ type:'setHomeIsActive', homeIsActive: false });
  }, [dispatch]);

  const TitleName = () => (
    <div className="title-name" style={{marginBottom: '50px'}}>
      <div className="text">
        {name.split('').map((char, key) => {
          return (<span key={key}>{char}</span>);
        })}
      </div>
    </div>
  );

  const TitleHtml = () => {
    const DivEnd = ({tab}) => (
      <div className={`row ${tab}`}>
        <span className='grey'>{'</'}</span>
        <span className='blue'>div</span>
        <span className='grey'>{'>'}</span>
      </div>
    );
    const DivStart = ({tab, text}) => (
      <div className={`row ${tab}`}>
        <span className='grey'>{'<'}</span>
        <span className='blue'>div </span>
        <span className='lightblue'>class=</span>
        <span className='orange'>"{text}"</span>
        <span className='grey'>{'>'}</span>
      </div>
    );
    const Text = ({tab, text}) => (
      <div className={`row text-typing ${tab}`}>
        <p><span className='white'>{text}</span></p>
      </div>
    );

    return (
      <div className='title-html grid-y'>
        <DivStart tab="" text="present job" />
        <Text tab="one" text={webdev} />
        <DivStart tab="one" text="specialization" />
        <Text tab="two" text={frontend} />
        <DivEnd tab="one" />
        <DivEnd tab="" />
        <DivStart tab="" text="job" />
        <Text tab="one" text={engineer} />
        <DivStart tab="one" text="specialization" />
        <Text tab="two" text={physics} />
        <DivEnd tab="one" />
        <DivEnd tab="" />
      </div>

    );
  };

  return (
    <div className='container home'>
      <div className="container-title grid-y">
          <TitleName />
          <TitleHtml />
        </div>
    </div>
  );
}

// .deleteAll(0.001)
  
export default Home;