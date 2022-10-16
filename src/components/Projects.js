// import { Link } from "react-router-dom";
import { projects }  from "../data/projects";
import Title from './Title';
// <Link className="image" to={`/projects/${obj.id}`}>...</Link>

// la
// const onExpandAll = () => {}
// const onCollapseAll = () => {}

const Projects = () => {
  return (
    <div className='container projects'>
      <div className='grid-y'>
        <Title text="Projects" />
        {/* <div className='cell auto buttons'>
            <div className='buttons-content'>
              <button className="button-expander" onClick={onExpandAll}>Développer</button>
              <button className="button-collapser" onClick={onCollapseAll}>Réduire</button>
            </div>
          </div> */}
        <div className="row grid-x">
          {projects.map(obj => {
            return (
              <div key={obj.id} className='project cell small-4'>
                <div className="project-cell">
                  <img className='image'src={`assets/img/thumbnail/` + obj.thumbnail} alt={obj.name} />
                  <div className='title'>{obj.name}</div>
                </div>
                <div className="project-overlay">
                  <div className="text">{obj.text}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
