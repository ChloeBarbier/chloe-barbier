import React from 'react';
import { useTranslation } from "react-i18next";
import { TfiWorld } from 'react-icons/tfi';
import { MdLocationOn } from 'react-icons/md';
import CollapseButton from '../components/CollapseButton';
import ExpandButton from '../components/ExpandButton';
import { education }  from "../data/education";
import Title from '../components/Title';

const Experience = () => {
  const { t } = useTranslation();

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

  return (
    <div className='container education'>
      <div className="grid-y">
        <div className='top-page grid-x'>
          <div className='cell auto page-title'>
            <Title text={t('nav.education')} />
          </div>
          <div className='cell auto buttons'>
            <div className='buttons-content'>
              <ExpandButton />
              <CollapseButton />
            </div>
          </div>
        </div>
        {education.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button className="accordion" id={`button-${key}`} onClick={() => onClick(key)}>
                <div className="grid-x align-middle">
                  <div className='title small-8'>
                    <span className='job-position'>{t(item.graduation)}</span>
                    <span style={{marginTop: '1rem'}} className='company'> @{t(item.school)}</span>
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
                        <MdLocationOn className="cell shrink svg-location icon" />
                        <div className="cell shrink">{t(item.location)}</div>
                      </div>
                      <div className="cell shrink grid-x website align-middle">
                        <TfiWorld className="cell shrink svg-website icon" />
                        <div className="cell shrink">
                          <a key={key} href={item.to} target="_blank" className="row grid-x" rel="noreferrer">{item.website}</a>
                        </div>
                      </div>
                     {item.prize &&
                     <div className="cell shrink grid-x prize align-middle">
                        <img className="cell shrink img-prize icon" src="/assets/img/icon/prize.png" alt="icon" />
                        <div className="cell shrink">{t(item.prize)}</div>
                      </div>}
                    </div>
                    <div className="cell text">
                      {t(item.text)}
                    </div>
                    <div className='cell tags tools'>
                      {item.tools.map((tool, i) => {
                        return (
                          <span key={`${key}-tool-${i}`} className='tag tool col1'>{t(tool.label)}</span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="cell small-3 photo">
                    <img className="img-school" src={`./assets/img/education/` + item.photo} alt={item.photo} />
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
