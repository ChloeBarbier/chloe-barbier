import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { projects }  from "../data/projects";
import { TfiWorld } from 'react-icons/tfi';
import { BsYoutube, BsGithub } from 'react-icons/bs';
import { MdOutlineCorporateFare, MdEmojiPeople } from 'react-icons/md';
import { getNewSearchParams } from '../tools';

const List = ({seletedProjectId, onClickAccordion}) => {
  const { t } = useTranslation();

  const openAccordion = (key) => {
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
  const onClick = (key) => {
    openAccordion(key);
    onClickAccordion();
  }

  useEffect(() => {
    if (seletedProjectId) {
      var element = document.getElementById(`button-${seletedProjectId}`);
      if (element) {
        openAccordion(seletedProjectId);
        element.scrollIntoView();
      }
    }
  }, [seletedProjectId]);

  return (
    <div className="projects-list grid-x">
      {projects.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <button className="accordion" id={`button-${item.id}`} onClick={() => onClick(item.id)}>
              <div className="grid-x align-middle">
                <div className='title small-8'>
                  <span className='name'>{item.name}</span>
                  <span className='company'> @{t(item.related)}</span>
                </div>
                <div className='date small-4'>
                  {item.date}
                  <span className='sign' id={`sign-${item.id}`}>+</span>
                </div>
              </div>
            </button>

            <div className="panel" id={`panel-${item.id}`}>

              <div className='grid-x grid-margin-x description'>

                <div className='cell small-12 details grid-x'>

                  {item.relatedId && 
                  <Link className='cell shrink grid-x related align-middle' to={`/experience${getNewSearchParams({'experienceId': item.relatedId})}`}>
                    <MdOutlineCorporateFare className="cell shrink svg-company icon"/>
                    <div className="cell shrink">{item.related}</div>
                  </Link>
                  }

                  <a className="cell shrink grid-x website align-middle" href={item.to} target="_blank" rel="noreferrer">
                    <TfiWorld className="cell shrink svg-website icon" />
                    <div className="cell shrink">{item.website}</div>
                  </a>

                  {item.videos && item.videos.length && item.videos.map((video, key) => 
                  <a className="cell shrink grid-x video align-middle" key={key} href={video.link} target="_blank" rel="noreferrer">
                    <BsYoutube className="cell shrink svg-video icon" />
                    <div className="cell shrink">{t(video.title)}</div>
                  </a>)}

                  {item.repo && <a className="cell shrink grid-x repository align-middle" href={item.repo} target="_blank" rel="noreferrer">
                    <BsGithub className="cell shrink svg-github icon" />
                    <span>{t("projects.repository")}</span>
                  </a>}

                </div>

                <div className="cell small-5 photo">
                  <img className="img-project" src={`./assets/img/projects/photo/` + item.photo} alt={item.photo} />
                </div>

                <div className="cell small-7 grid-y align-center description">

                  <div className="cell text">
                    {t(item.description, {returnObjects: true}).map((text, key) => (<div key={key} className='sub-text'>{text}</div>))}
                  </div>

                  <div className="cell text">
                    {t(item.role, {returnObjects: true}).map((text, key) =>
                    <div className="" key={key}>
                      {key===0 && <MdEmojiPeople className="svg-role icon" />}
                      {text}
                    </div>
                    )}
                  </div>

                </div>
                
                <div className='cell small-12 tags tools'>
                  {item.tools.map((tool, i) => {
                    return (
                      <span key={`${key}-tool-${i}`} className='tag tool col1'>{t(tool.label)}</span>
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

List.defaultProps = {
  seletedProjectId: '',
  onClickAccordion: ()=>{}
}
  
List.propTypes = {
  seletedProjectId: PropTypes.string,
  onClickAccordion: PropTypes.func
}

export default List;
