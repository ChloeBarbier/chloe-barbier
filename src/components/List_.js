import React, { useEffect } from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { BsGithub, BsYoutube } from 'react-icons/bs'

const repository = "Dépôt github";//"Github repository";
const presentationOf = "Présentation vidéo de";

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
            <div id={obj.id} key={obj.id} className='project list cell small-12 grid-x grid-margin-x'>
                <div className='project-text project-title small-12 cell'>
                    <div className='cell cell-1 title grid-x'>
                        <div className='name cell auto'>
                            {obj.name}
                        </div>
                        <div className='related cell small-7'>
                            <div onClick={() => onClickExperience(obj.relatedId)}>
                                @{obj.related}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-text project-image cell small-5 grid-y align-center">
                    <img className='cell image'src={`assets/img/photo/` + obj.photo} alt={obj.name} />

                    {obj?.videos && obj.videos.length && obj.videos.map((video, key) => 
                    <a key={key} href={video.link} target="_blank" rel="noreferrer" className="cell cell-1 website-list grid-x align-middle">
                        <BsYoutube />
                        <span>{video.title}</span>
                    </a>)}
                    {obj?.repo &&
                    <a href={obj.repo} target="_blank" rel="noreferrer" className="cell cell-1 website-list grid-x align-middle">
                        <BsGithub />
                        <span>{repository}</span>
                    </a>}
                    <a href={obj.to} target="_blank" rel="noreferrer" className="cell cell-1 website-list grid-x align-middle">
                        <TfiWorld />
                        <span>{obj.website}</span>
                    </a>
                </div>
                <div className="project-text cell small-7 grid-y align-center">
                    <div className="cell cell-1 description">
                        {obj.description.split("\n").map(text => (<div>{text}</div>))}
                    </div>
                    <div className="cell cell-1 role">
                        {obj.role.split("\n")?.map((text, key) => {
                            if (obj.role.split("\n")?.length === 1) return (
                            <span>
                                <img className="img-website icon" src="/assets/img/projects/icon_people.png" alt="icon" />
                                {obj.date} : {text}
                            </span>
                            )
                            if (key===0) return (
                                <div key={key}>
                                    <img className="img-website icon" src="/assets/img/projects/icon_people.png" alt="icon" />
                                    {obj.date} : {text}
                                </div>
                            )
                            else return <div key={key}>{text}</div>
                        })}
                    </div>
                </div>
                {obj.subprojects?.length && <div className='project-text cell small-12'>
                    <div className="cell cell-1 subprojects">
                        {obj.subprojects.split("\n")?.map((text, key) => {
                            return <div key={key}>{text}</div>
                        })}
                    </div>
                </div>}

                <div className="small-12 cell tools tags">
                        {obj.tools.map((tool, i) => {return (
                        <span key={`${key}-proj-tool-${i}`} className='tag tool'>
                        {tool.label}
                        </span>
                        );})}
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