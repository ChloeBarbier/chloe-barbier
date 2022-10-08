import { Link } from "react-router-dom";
import { projects }  from "../data/projects";

const Projects = () => {
  return (
    <div className='container projects'>
        <div className='grid-y'>
            <div className="row grid-x">
              {projects.map(obj => {
                return (
                  <div key={obj.id} className='row-item cell small-4'>
                    <Link to={`/projects/${obj.id}`} className="thumbnail">
                      <img src={`assets/img/thumbnail/` + obj.thumbnail} alt={obj.name} />
                      <div className='row-item-title'>{obj.name}</div>
                    </Link>
                  </div>
                )
              })}
            </div>
        </div>
    </div>
  );
}

export default Projects;
