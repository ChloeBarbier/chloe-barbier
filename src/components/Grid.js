import React from 'react';
import PropTypes from 'prop-types';
import { projects }  from "../data/projects";
import { useTranslation } from "react-i18next";

const Grid = ({onClickProject}) => {

    const { t } = useTranslation();
    
    return (
        <div className="projects-grid grid-x">
            {projects.map(obj => (
            <div key={obj.id} className='project cell small-4'>
                <div className="project-cell">
                    <img className='image'src={`assets/img/projects/thumbnail/` + obj.thumbnail} alt={obj.name} />
                    <div className='title'>
                        {obj.name}
                    </div>
                </div>
                <button className="project-button" onClick={() => onClickProject(obj.id)}>
                    <div className="project-overlay">
                        <div className="text">
                            {t(obj.text)}
                        </div>
                    </div>
                </button>
            </div>))}
        </div>
    );
}

Grid.defaultProps = {
    onClickProject: () => {},
}

Grid.propTypes = {
    onClickProject: PropTypes.func
}

export default Grid;