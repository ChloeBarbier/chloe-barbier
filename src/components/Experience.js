import React from 'react';
import { experience }  from "../data/experience";

const Experience = () => {
  return (
    <div className='container experience'>
      <div className="grid-y">
        {experience.map((item, key) => {
          return (
            <React.Fragment>
            <button className="accordion">Section {key}</button>
            <div className="panel"><p>coucoucoucou coucou coucou coucou coucou</p>
              {/* <p>
              <a key={key} href={item.to} target="_blank" className="row grid-x" rel="noreferrer">
                <div className="cell small-8 description">
                  <div className="title">{item.title}</div>
                  <div className="date">{item.subtitle}</div>
                  <div className="date">{item.subtitle1}</div>
                  <div className="date">{item.subtitle2}</div>
                  <div className="text">{item.description}</div>
                </div>
                <div className="cell small-4 photo">
                  <img src={`./assets/img/experience/` + item.photo} alt={item.photo} />
                </div>
              </a>
              </p> */}
            </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
