import { useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { projectList } from "../data/ProjectList";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="workPage">
      <div className="workPage__main">
        <h2 className="workPage__main__title">Latest Work</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
          <Masonry gutter="2rem">
            {projectList.map((item) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div key={item.name} className="workPage__item">
                    <img
                      className="workPage__item__img"
                      src={item.img}
                      alt=""
                    />
                    <h3 className="workPage__item__title">{item.name}</h3>
                  </div>
                </a>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default WorkPage;
