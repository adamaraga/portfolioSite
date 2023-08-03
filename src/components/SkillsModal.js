import React, { useState } from "react";
import Star from "../common/Star";

const SkillsModal = () => {
  const [skills] = useState([
    "React",
    "JavaScript",
    "HTML",
    "TypeScript",
    "React Native",
    "Next.js",
    "CSS",
    "SCSS",
    "SASS",
    "Tailwind",
    "GIT",
    "Redux",
    "jQuery",
    "DOM",
    "MUI",
    "Cypress",
    "JSON",
    "Node",
    "Express",
    "Webpack",
    "Babel",
    "Firebase",
    "Heroku",
    "Netlify",
    "AWS",
    "UI/UX",
  ]);

  return (
    <div className="skillsModal">
      <Star />
      {skills.map((skill) => {
        return (
          <span key={skill} className="skillsModal__item">
            {skill}
          </span>
        );
      })}
    </div>
  );
};

export default SkillsModal;
