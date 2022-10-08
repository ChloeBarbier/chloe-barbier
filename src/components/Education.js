import { education }  from "../data/education";

const Education = () => {
  return (
    <div className='container education'>
      <div className="grid-y">
        {education.map((item, key) => {
          return (
            <a key={key} href={item.to} target="_blank" className="row grid-x" rel="noreferrer">
              <div className="cell small-8 description">
                <div className="title">{item.title}</div>
                <div className="date">{item.subtitle}</div>
                <div className="date">{item.subtitle1}</div>
                <div className="text">{item.description}</div>
              </div>
              <div className="cell small-4 photo">
                <img src={`./assets/img/education/` + item.photo} alt={item.photo} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
