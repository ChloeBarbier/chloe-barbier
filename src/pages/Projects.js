import React, { useEffect, useState } from 'react';
// import { TabItem } from 'react-foundation';
import { projects }  from "../data/projects";
import Title from '../components/Title';
import Grid from '../components/Grid';
import List from '../components/List';

const list = "Liste";
const grid = "Grille";
const project = "Projets";

const Projects = () => {
  const [isListed, setisListed] = useState(false);
  const [seletedProjectId, setseletedProjectId] = useState(null);

  const onClickList = () => {
    setseletedProjectId(null);
    setisListed(true);
  }
  const onClickGrid = () => {
    setisListed(false);
  }
  const goToProject = (id) => {
    setisListed(true);
    setseletedProjectId(id);
  }

  useEffect(() => {
    var url = new URL(window.location.href);
    var view = url.searchParams.get("view");
    var projectId = url.searchParams.get("projectId");

    if (view === "list" && projectId?.length > 0) {
      goToProject(projectId);
    }
  }, [])

  return (
    <div className='container projects'>
      <div className='grid-y'>
        <div className='top-page grid-x'>
          <div className='cell auto page-title'>
            <Title text={project} />
          </div>
          <div className='cell auto buttons'>
            <div className='buttons-content'>
              {!isListed 
              ? <button className="button-expander" onClick={onClickList}>
                <img className="icon" src="/assets/img/projects/icon_grid_list.png" alt="icon" />
                {list}
              </button>
              : <button className="button-collapser" onClick={onClickGrid}>
                <img className="icon" src="/assets/img/projects/icon_grid.png" alt="icon" />
                {grid}
              </button>
              }
            </div>
          </div>
        </div>
        {isListed 
        ? <List projects={projects} seletedProjectId={seletedProjectId} /> 
        : <Grid projects={projects} onClickProject={goToProject} />
        }
      </div>
    </div>
  );
}

export default Projects;
