import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getProject }  from "../data/projects";

const Project = () => {
  const { id } = useParams();
  const [item, setItem] = useState(id || {});

  useEffect(() => {
    console.log(id, getProject(id))
    setItem(getProject(id));
  }, [id]);
  
  return (
    <div className='container projects'>
      <div className="grid-x">
        <div className="cell small-4 description">
          <div className="title">{item.name}</div>
          <div className="subtitle">23 décembre 2020</div>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
          </div>
        </div>
        <div className="cell small-8 photo">
          <img src={`../assets/img/thumbnail/` + item.photo} alt={item.name} />
        </div>
      </div>
    </div>
  );
}
  
export default Project;
  