import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from 'react-router-dom';
import { TfiWorld } from 'react-icons/tfi';
import { MdLocationOn } from 'react-icons/md';
import { experience }  from "../data/experience";
import CollapseButton from '../components/CollapseButton';
import ExpandButton from '../components/ExpandButton';
import Title from '../components/Title';
import { getNewSearchParams } from '../tools';
import { LIMIT_WIDTH_MOBILE } from '../enums/Style';

const Experience = () => {
  const { t } = useTranslation();
  const isMobile = window.screen.width <= LIMIT_WIDTH_MOBILE;
  let [searchParams] = useSearchParams({});

  const onClickAccordion = (experienceId) => {
    var button = document.getElementById(`button-${experienceId}`);
    var panel = document.getElementById(`panel-${experienceId}`);
    var sign = document.getElementById(`sign-${experienceId}`);

    button.classList.toggle('active');

    if (panel.style.display === "unset") {
      panel.style.display = "none";
      sign.textContent = "+";
    } else {
      panel.style.display = "unset";
      sign.textContent = "-";
    }
  }

  useEffect(() => {
    // if experienceId exists then open section and scroll to it
    const experienceId = searchParams.get('experienceId');
    if (experienceId) {
      var element = document.getElementById(`button-${experienceId}`);
      if (element) {
        onClickAccordion(experienceId);
        element.scrollIntoView();
      }
    }
  }, [searchParams])

  return (
    <div className='container experience'>
      <div className="grid-y">
        <div className='top-page grid-x'>
          <div className='cell auto page-title'>
            <Title text={t('nav.experience')} />
          </div>
          <div className='cell auto buttons'>
            <div className='buttons-content'>
              <ExpandButton />
              <CollapseButton />
            </div>
          </div>
        </div>
        {experience.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button className="accordion" id={`button-${item.id}`} onClick={() => onClickAccordion(item.id)}>
                <div className="grid-x align-middle">
                  <div className='title small-8 medium-8'>
                    <span className='job-position'>{t(item.position)}</span>
                    <span className='company'> @{t(item.company)}</span>
                  </div>
                  <div className='date small-4 medium-4 grid-x align-middle'>
                    {!isMobile ? (
                    <span className='cell auto float-right'>
                      {item.date.length === 2 
                        ? item.date[0] + " . " + t(item.date[1])
                        : item.date[0]
                      }
                    </span>
                    ) : (
                    <span className='cell auto float-right'>
                      {item.date.length === 2 
                        ? <span className="grid-y">
                            <span className="cell">{item.date[0]}</span>
                            <span className="cell">
                              {t(item.date[1]) === 'maintenant'
                                ? t(item.date[1]).slice(0, 5)+'.'
                                : t(item.date[1])}
                            </span>
                          </span>
                        : item.date[0]
                      }
                    </span>)}
                    <span className='cell shrink sign float-right' id={`sign-${item.id}`}>+</span>
                  </div>
                </div>
              </button>
              <div className="panel" id={`panel-${item.id}`}>
                <div className='grid-x'>
                  <div className="cell small-12 medium-9 grid-y description">
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
                    <div className='cell tags projects'>
                      {item.projects.map((project) => {
                        return (
                          <Link 
                            key={`${key}-project-${project.id}`} 
                            className='tag project'
                            to={`/projects${getNewSearchParams({
                              view: 'list',
                              projectId: project.idRef,
                            })}`}
                          >
                            {project.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  <div className="cell small-12 medium-3 photo">
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
