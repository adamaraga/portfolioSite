import Star from "../common/Star";
import { experience } from "../data/experience";

const ExperienceModal = () => {
  return (
    <div className="experienceModal">
      {experience.map((item, i) => {
        return (
          <div key={i} className="experienceModal__item">
            <span className="experienceModal__item__circle">
              <Star />
            </span>
            <div className="experienceModal__item__header">
              <div className="experienceModal__item__header__titleCon">
                <h4>{item.jobTitle}</h4>
                <h5>{item.name}</h5>
              </div>

              <p>{item.date}</p>
            </div>

            <ul className="experienceModal__item__disc">
              {item.disc.map((dis, j) => {
                return <li key={j}>{dis}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceModal;
