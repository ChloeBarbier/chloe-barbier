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
        <div className="cell small-7 description">
          <div className="title">{item.name}</div>
          <div className="subtitle">23 décembre 2020</div>
          <div className="text">
            {item.description}
          </div>
        </div>
        <div className="cell small-5 photo">
          <img src={`../assets/img/thumbnail/` + item.photo} alt={item.name} />
        </div>
      </div>
    </div>
  );
}
  
export default Project;
  