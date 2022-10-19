import React from 'react';

const Grid = ({onClickProject, projects}) => {

    return (
        <div className="projects-grid grid-x">
        {projects.map(obj => (
            <div key={obj.id} className='project cell small-4'>
            <div className="project-cell">
                <img className='image'src={`assets/img/thumbnail/` + obj.thumbnail} alt={obj.name} />
                <div className='title'>
                {obj.name}
                </div>
            </div>
            <button onClick={() => onClickProject(obj.id)}>
                <div className="project-overlay">
                <div className="text">
                    {obj.text}
                </div>
                </div>
            </button>
            </div>))}
        </div>
    );
};

Grid.defaultProps = {
    onClickProject: () => {},
    projects: [],
};

export default Grid;