import { useState } from "react";
import Star from "../common/Star";

const ExperienceModal = () => {
  const [data, setData] = useState([
    {
      jobTitle: "Front-End Engineer (React)",
      name: "Ultainfinity | United Kingdom (Remote)",
      date: "Sep 2022 - present",
      disc: [
        " Integrated crypto payment gateway for various web applications with web3 Managed and executed multiple projects simultaneously to meet critical deadlines.",
        "Performed Code check-in, check-out, merging and branching into GIT and stayed up-to-date along with the team",
        "Seamlessly collaborated with the backend and design team to create leading-edge web applications that meet users' requirements.",
      ],
    },
    {
      jobTitle: "Front-End Engineer",
      name: "STETiS | Nigeria",
      date: "Aug 2020 - Sep 2022",
      disc: [
        "Spearheaded adaptation of Functional Components over Class Components, hence reducing operating costs and improving code readability. Achieved quick and noteworthy results.",
        "Developed thumbnail sliders for property images, Optimized and lazy-loaded property images to reduce page load significantly.",
        "Resolved bugs that caused massive memory leaks within web applications. Oversaw the entire software development lifecycle for various projects with 100% on-time delivery.",
        "Strictly followed SDLC best practices within an Agile environment to produce rapid iterations for clients.",
        "Researched emerging web technologies and trends for possible incorporation into web applications to improve user experience.",
        "Produced scalable web applications compatible with multiple browsers. Advocated for well-tested and documented high-quality code.",
        "Worked cooperatively with client services, sales and design teams in a deadline-driven environment.",
      ],
    },
    {
      jobTitle: "Web Developer",
      name: "Freelance | Nigeria(Remote)",
      date: "Oct 2018 - Aug 2020",
      disc: [
        "Meeting with prospective clients to review websites, and gather the client’s specifications for new or existing websites.",
        "Designing and implementing the frontend using HTML5, CSS3, SASS, jQuery, and React JS.",
        "Built Backend using Node.js and Firebase.",
        "Managed and executed multiple projects simultaneously to meet critical deadlines.",
        "Conducted testing of websites across all major browsers to ensure quality and consistency throughout.",
      ],
    },
    {
      jobTitle: "Front-End Developer Intern",
      name: "STETiS | Nigeria",
      date: "May 2018 - Oct 2018",
      disc: [
        "Part of the frontend development team that worked on an in-house Human Resource Management System and Document Management System Produced Responsive websites with HTML, CSS, React.js and Redux.",
        "Created reusable components using styled-component library.",
        "Created mockup design and prototype to improve user experience and improve site interaction.",
        "Worked with senior developers to manage large and complex web application projects.",
        "Edited existing code to improve browser compatibility and mobile responsiveness.",
      ],
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
