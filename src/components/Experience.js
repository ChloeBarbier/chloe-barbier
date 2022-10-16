import React from 'react';
import { experience }  from "../data/experience";
import Title from './Title';

const Experience = () => {

  const onClick = (key) => {
    var button = document.getElementById(`button-${key}`);
    var panel = document.getElementById(`panel-${key}`);
    var sign = document.getElementById(`sign-${key}`);

    button.classList.toggle('active');

    if (panel.style.display === "unset") {
      panel.style.display = "none";
      sign.textContent = "+";
    } else {
      panel.style.display = "unset";
      sign.textContent = "-";
    }
  }

  const onExpandAll = () => {
    var accordions = document.getElementsByClassName('accordion');
    var panels = document.getElementsByClassName('panel');
    var signs = document.getElementsByClassName('sign');
    for (var i = 0; i < accordions.length; i++) accordions.item(i).classList.add('active');
    for (var j = 0; j < panels.length; j++) panels.item(j).style.display = "unset";
    for (var k = 0; k < signs.length; k++) signs.item(k).textContent = "-";
  }
  const onCollapseAll = () => {
    var accordions = document.getElementsByClassName('accordion');
    var panels = document.getElementsByClassName('panel');
    var signs = document.getElementsByClassName('sign');
    for (var i = 0; i < accordions.length; i++) accordions.item(i).classList.remove('active');
    for (var j = 0; j < panels.length; j++) panels.item(j).style.display = "none";
    for (var k = 0; k < signs.length; k++) signs.item(k).textContent = "+";
  }

  return (
    <div className='container experience'>
      <div className="grid-y">
        <div className='top-page grid-x'>
          <div className='cell auto page-title'>
            <Title text="Expérience" />
            {/* <Title text="Expérience professionnelle" /> */}
          </div>
          <div className='cell auto buttons'>
            <div className='buttons-content'>
              <button className="button-expander" onClick={onExpandAll}>Développer</button>
              <button className="button-collapser" onClick={onCollapseAll}>Réduire</button>
            </div>
          </div>
        </div>
        {experience.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button className="accordion" id={`button-${key}`} onClick={() => onClick(key)}>
                <div className="grid-x align-middle">
                  <div className='title small-8'>
                    <span className='job-position'>{item.position}</span>
                    <span className='company'> @{item.company}</span>
                  </div>
                  <div className='date small-4'>
                    {item.date}
                    <span className='sign' id={`sign-${key}`}>+</span>
                  </div>
                </div>
              </button>
              <div className="panel" id={`panel-${key}`}>
                <div className='grid-x'>
                  <div className="cell small-9 grid-y description">
                    {/* <div className="cell shrink duration">{item.duration}</div> */}
                    
                    <div className='cell details grid-x'>
                      <div className="cell shrink grid-x location align-middle">
                        <img className="cell shrink img-location" src="/assets/img/experience/location.png" alt="icon" />
                        <div className="cell shrink">{item.location}</div>
                      </div>
                      <div className="cell shrink grid-x website align-middle">
                        <img className="cell shrink img-website" src="/assets/img/experience/website.png" alt="icon" />
                        <div className="cell shrink">
                          <a key={key} href={item.to} target="_blank" className="row grid-x" rel="noreferrer">{item.website}</a>
                        </div>
                      </div>
                    </div>

                    <div className="cell text">{item.text}</div>

                    <div className='cell tags tools'>
                      {item.tools.map((tool, i) => {
                        return (
                          <span key={`${key}-tool-${i}`} className='tag tool col1'>{tool.label}</span>
                        );
                      })}
                    </div>

                    <div className='cell tags projects'>
                      {item.projects.map((project, i) => {
                        return (
                          <span key={`${key}-project-${i}`} className='tag project'>{project.label}</span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="cell small-3 photo">
                    <img src={`./assets/img/experience/` + item.photo} alt={item.photo} />
                  </div>

                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;
