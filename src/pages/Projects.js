import React, { useEffect, useState } from 'react';
// import { TabItem } from 'react-foundation';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { projects }  from "../data/projects";
import Title from '../components/Title';
import Grid from '../components/Grid';
import List from '../components/List';
import CollapseButton from '../components/CollapseButton';
import ExpandButton from '../components/ExpandButton';

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
              ? <button className="button-list" onClick={onClickList}>
                <FaList />
              </button>
              : <>
                <ExpandButton />
                <CollapseButton />
                <button className="button-grid" onClick={onClickGrid}>
                  <BsFillGrid3X3GapFill />
                </button>
              </>
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
