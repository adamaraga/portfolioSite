import React, { useState } from "react";
import Star from "../common/Star";

const CertificatesModal = () => {
  const [data] = useState([
    {
      name: "JavaScript Algorithms and Data Structure",
      source: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/Adam-Abdullahi-Araga/javascript-algorithms-and-data-structures",
    },
    {
      name: "Responsive Web Design",
      source: "FreeCodeCamp",
      link: "https://www.freecodecamp.org/certification/Adam-Abdullahi-Araga/responsive-web-design",
    },
  ]);

  return (
    <div className="experienceModal">
      {data.map((item, i) => {
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
