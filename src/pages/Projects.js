import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import Title from '../components/Title';
import Grid from '../components/Grid';
import List from '../components/List';
import CollapseButton from '../components/CollapseButton';
import ExpandButton from '../components/ExpandButton';
import { useSearchParams } from 'react-router-dom';


const Projects = () => {
  const { t } = useTranslation();
  let [searchParams, setSearchParams] = useSearchParams({});

  const [isListed, setisListed] = useState(false);
  const [seletedProjectId, setseletedProjectId] = useState(null);

  const onClickList = () => {
    searchParams.set('view','list');
    searchParams.delete('projectId');
    setSearchParams(searchParams);
  }
  const onClickGrid = () => {
    searchParams.delete('view');
    searchParams.delete('projectId');
    setSearchParams(searchParams);
  }
  const onClickProject = (id) => {
    searchParams.set('view', 'list');
    searchParams.set('projectId', id);
    setSearchParams(searchParams);
  }
  const onClickButton = () => {
    searchParams.delete('projectId');
    setSearchParams(searchParams);
  }

  useEffect(() => {
    var view = searchParams.get("view");
    var projectId = searchParams.get("projectId");

    if (view === "list") {
      if (projectId) {
        // project clicked: go to list view and scroll to project
        setseletedProjectId(projectId);
        setisListed(true);
      }
      else {
        // list clicked: go to list view
        setisListed(true);
        setseletedProjectId(null);
      }
    }
    else {
      // grid or project nav clicked: go to grid view
      setisListed(false);
      setseletedProjectId(null);
    }
  }, [searchParams]);

  return (
    <div className='container projects'>
      <div className='grid-y'>
        <div className='top-page grid-x'>
          <div className='cell auto page-title'>
            <Title text={t('nav.projects')} />
          </div>
          <div className='cell auto buttons'>
            <div className='buttons-content'>
              {!isListed 
              ? <button className="button-list" onClick={onClickList}>
                <FaList />
              </button>
              : <>
                <ExpandButton onClickExpand={onClickButton} />
                <CollapseButton onClickCollapse={onClickButton} />
                <button className="button-grid" onClick={onClickGrid}>
                  <BsFillGrid3X3GapFill />
                </button>
              </>
              }
            </div>
          </div>
        </div>
        {isListed 
        ? <List onClickAccordion={onClickButton} seletedProjectId={seletedProjectId} /> 
        : <Grid onClickProject={onClickProject} />
        }
      </div>
    </div>
  );
}

export default Projects;
