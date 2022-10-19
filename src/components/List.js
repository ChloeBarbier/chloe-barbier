import React, { useEffect } from 'react';

const List = ({projects, seletedProjectId}) => {

    useEffect(() => {
        if (seletedProjectId) {
            const element = document.getElementById(seletedProjectId);
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [seletedProjectId]);

    const onClickExperience = (id) => {
        window.location.href = `/experience?experienceId=${id}`;
    }

    return (
        <div className="projects-list grid-x">
            {projects.map((obj, key) => (
            <div id={obj.id} key={obj.id} className='project list cell small-12 grid-x'>
                <div className="project-image cell small-6 grid-y align-center">
                    <img className='cell image'src={`assets/img/photo/` + obj.photo} alt={obj.name} />
                    
                    <div className="cell tools tags">
                        {obj.tools.map((tool, i) => {return (
                        <span key={`${key}-proj-tool-${i}`} className='tag tool'>
                        {tool.label}
                        </span>
                        );})}
                    </div>
                </div>
                <div className="project-text cell small-6 grid-y align-center">
                    <div className='cell cell-1 title grid-x'>
                        <div className='name cell auto'>{obj.name}</div>
                        <div className='related cell shrink'>
                            <div onClick={() => onClickExperience(obj.relatedId)}>@{obj.related}</div>
                        </div>
                    </div>
                    <div className="cell cell-1 description">
                        {obj.description}
                    </div>
                    <div className="cell cell-1 role">
                        <img className="img-website icon" src="/assets/img/projects/icon_people.png" alt="icon" />
                        {obj.date} : {obj.role}
                    </div>
                    <div className="cell cell-1 website">
                    <a href={obj.to} target="_blank" rel="noreferrer">
                        <img className="img-website icon" src="/assets/img/experience/website.png" alt="icon" />
                        {obj.website}
                    </a>
                    </div>
                    
                </div>
            </div>
            ))}
        </div>
    );
};

List.defaultProps = {
    seletedProjectId: null,
    projects: [],
};

export default List;