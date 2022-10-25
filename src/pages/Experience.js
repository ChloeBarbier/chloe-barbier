import React, { useEffect } from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { MdLocationOn } from 'react-icons/md';
import { experience }  from "../data/experience";
import CollapseButton from '../components/CollapseButton';
import ExpandButton from '../components/ExpandButton';
import Title from '../components/Title';

const Experience = () => {

  const onClickExperience = (experienceId) => {
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

  const onClickProject = (id) => {
    window.location.href = `/projects?view=list&projectId=${id}`;
  }

  useEffect(() => {
    var url = new URL(window.location.href);
    var experienceId = url.searchParams.get("experienceId");

    if (experienceId?.length > 0) {
      onClickExperience(experienceId);
      var element = document.getElementById(`button-${experienceId}`);
      element?.scrollIntoView();
    }
  }, [])

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
              <ExpandButton />
              <CollapseButton />
            </div>
          </div>
        </div>
        {experience.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <button className="accordion" id={`button-${item.id}`} onClick={() => onClickExperience(item.id)}>
                <div className="grid-x align-middle">
                  <div className='title small-8'>
                    <span className='job-position'>{item.position}</span>
                    <span className='company'> @{item.company}</span>
                  </div>
                  <div className='date small-4'>
                    {item.date}
                    <span className='sign' id={`sign-${item.id}`}>+</span>
                  </div>
                </div>
              </button>
              <div className="panel" id={`panel-${item.id}`}>
                <div className='grid-x'>
                  <div className="cell small-9 grid-y description">
                    {/* <div className="cell shrink duration">{item.duration}</div> */}
                    
                    <div className='cell details grid-x'>
                      <div className="cell shrink grid-x location align-middle">
                        <MdLocationOn className="cell shrink svg-location icon" />
                        <div className="cell shrink">{item.location}</div>
                      </div>
                      <div className="cell shrink grid-x website align-middle">
                        <TfiWorld className="cell shrink svg-website icon" />
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
                          <span 
                            key={`${key}-project-${project.id}`} 
                            className='tag project' 
                            onClick={() => onClickProject(project.idRef)}
                          >
                            {project.label}
                            </span>
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
