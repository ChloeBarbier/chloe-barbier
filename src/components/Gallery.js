import { Link } from "react-router-dom";
import { gallery }  from "../data/gallery";

const Gallery = () => {
  return (
    <div className='container gallery'>
        <div className='grid-y'>
            <div className="row grid-x">
              {gallery.map(obj => {
                return (
                  <div key={obj.id} className='row-item cell small-4'>
                    <Link to={`/gallery/${obj.id}`} className="thumbnail">
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

export default Gallery;
