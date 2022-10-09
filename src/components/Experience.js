import React from 'react';
import { experience }  from "../data/experience";

const Experience = () => {

  const onClick = (key) => {
    var button = document.getElementById(`button-${key}`);
    var panel = document.getElementById(`panel-${key}`);
    var sign = document.getElementById(`sign-${key}`);

    console.log(button, button.classList)

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
          <div className='small-6 page-title'>Mon expérience professionnelle</div>
          <div className='small-6 buttons'>
            <button className="small-6 button-expander" onClick={onExpandAll}>Développer</button>
            <button className="small-6 button-collapser" onClick={onCollapseAll}>Réduire</button>
          </div>
        </div>
        {experience.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button className="accordion" id={`button-${key}`} onClick={() => onClick(key)}>
                <div className="grid-x align-middle">
                  <div className='title small-8'>
                    <span className='job-position'>{item.title}</span>
                    <span className='company'> @{item.subtitle}</span>
                  </div>
                  <div className='date small-4'>
                    {item.subtitle1}
                    <span className='sign' id={`sign-${key}`}>+</span>
                  </div>
                </div>
              </button>
              <div className="grid-x panel" id={`panel-${key}`}>
                <div className='grid-x'>
                  <div className="cell small-8 description">
                    {/* <div className="title">{item.title}</div> */}
                    {/* <div className="date">{item.subtitle}</div> */}
                    <div className="date">{item.subtitle1}</div>
                    <div className="date">{item.subtitle2}</div>
                    <div className="text">{item.description}</div>
                    <a key={key} href={item.to} target="_blank" className="row grid-x" rel="noreferrer">@site</a>
                  </div>
                  <div className="cell small-4 photo">
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
