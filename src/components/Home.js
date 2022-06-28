import { news }  from "../data/news";

const Home = () => {
  return (
    <div className='container home'>
      <div className="grid-y">
        {news.map(item => {
          return (
            <a href={item.to} target="_blank" className="row grid-x" rel="noreferrer">
              <div className="cell small-4 description">
                <div className="title">{item.title}</div>
                <div className="date">{item.subtitle}</div>
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec
                </div>
              </div>
              <div className="cell small-8 photo">
                <img src={`./assets/img/news/` + item.photo} alt={news.photo} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
