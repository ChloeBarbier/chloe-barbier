import React from 'react';
import { projects }  from "../data/projects";
import { TfiWorld } from 'react-icons/tfi';
import { BsYoutube } from 'react-icons/bs';
import { MdOutlineCorporateFare } from 'react-icons/md';


const Experience = () => {

  const onClickAccordion = (key) => {
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
  const onClickExperience = (id) => {
    window.location.href = `/experience?experienceId=${id}`;
}

  return (
    <div className="projects-list grid-x">
      {projects.map((item, key) => {
        return (
          <React.Fragment id={item.id} key={item.id} >
            <button className="accordion" id={`button-${key}`} onClick={() => onClickAccordion(key)}>
              <div className="grid-x align-middle">
                <div className='title small-8'>
                  <span className='job-position'>{item.name}</span>
                  <span style={{marginTop: '1rem'}} className='company'> @{item.related}</span>
                </div>
                <div className='date small-4'>
                  {item.date}
                  <span className='sign' id={`sign-${key}`}>+</span>
                </div>
              </div>
            </button>

            <div className="panel" id={`panel-${key}`}>

              <div className='grid-x grid-margin-x description'>

                <div className='cell small-12 details grid-x'>

                  {item.relatedId && <div className='cell shrink grid-x related align-middle' onClick={() => onClickExperience(item.relatedId)}>
                    <MdOutlineCorporateFare className="cell shrink svg-company icon"/>
                    <div className="cell shrink">{item.related}</div>
                  </div>}

                  <a className="cell shrink grid-x website align-middle" href={item.to} target="_blank" rel="noreferrer">
                    <TfiWorld className="cell shrink svg-website icon" />
                    <div className="cell shrink">{item.website}</div>
                  </a>

                  {item?.videos && item.videos.length && item.videos.map((video, key) => 
                  <a className="cell shrink grid-x video align-middle" key={key} href={video.link} target="_blank" rel="noreferrer">
                    <BsYoutube className="cell shrink svg-video icon" />
                    <div className="cell shrink">{video.title}</div>
                  </a>)}

                </div>

                <div className="cell small-5 photo">
                  <img className="img-project" src={`./assets/img/photo/` + item.photo} alt={item.photo} />
                </div>

                <div className="cell small-7 grid-y align-center description">

                  <div className="cell text">
                    {/* {item.description} */}
                    {item.description.split("\n").map(text => (<div className='sub-text'>{text}</div>))}
                  </div>

                  <div className="cell text">
                    {item.role.split("\n")?.map((text, key) =>
                    <div key={key}>
                        {key===0 && <img className="img-website icon" src="/assets/img/projects/icon_people.png" alt="icon" />}
                        {text}
                    </div>
                    )}
                  </div>

                  {item.subprojects?.length && <div className='cell'>
                      <div className="cell cell-1 subprojects">
                          {item.subprojects.split("\n")?.map((text, key) => {
                              return <div key={key}>{text}</div>
                          })}
                      </div>
                  </div>}

                </div>
                
                <div className='cell small-12 tags tools'>
                  {item.tools?.map((tool, i) => {
                    return (
                      <span key={`${key}-tool-${i}`} className='tag tool col1'>{tool.label}</span>
                    );
                  })}
                </div>

              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Experience;
