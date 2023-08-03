import Star from "../common/Star";
import { skills } from "../data/skills";

const SkillsModal = () => {
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
