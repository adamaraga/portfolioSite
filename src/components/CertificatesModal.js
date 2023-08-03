import Star from "../common/Star";
import { certificates } from "../data/Certificates";

const CertificatesModal = () => {
  return (
    <div className="experienceModal">
      {certificates.map((item, i) => {
        return (
          <div key={i} className="experienceModal__item">
            <span className="experienceModal__item__circle">
              <Star />
            </span>

            <div className="experienceModal__item__header">
              <div className="experienceModal__item__header__titleCon">
                <a target="_blank" rel="noreferrer" href={item.link}>
                  <h4>{item.name}</h4>
                </a>
                <h5>{item.source}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CertificatesModal;
