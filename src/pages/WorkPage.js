import { useEffect } from "react";
import project1 from "../asset/images/work1.png";
import project2 from "../asset/images/work2.png";
import project3 from "../asset/images/work3.png";
import project4 from "../asset/images/work4.png";
import project5 from "../asset/images/work5.png";
import project6 from "../asset/images/work6.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const WorkPage = () => {
  const workList = [
    {
      name: "LeadPayroll",
      img: project1,
      link: "https://leadpayroll.com/",
      disc: "The go-to automated HR and payroll solution, equiped with in demand modern features.",
      tags: ["Next.js", "MUI", "JavaScript", "CSS", "Redux"],
    },
    {
      name: "Ultainfinity Airdrop and Bounty",
      img: project2,
      link: "https://ultainfinityairdropandbounty.com/",
      tags: ["React.js", "TypeScript", "SCSS", "Styled Components", "Redux"],
    },

    {
      name: "Edusaf",
      img: project4,
      link: "https://edusaf.com",
      tags: ["HTML", "JavaScript", "SCSS"],
    },
    {
      name: "Hommesestates",
      img: project5,
      link: "https://hommesestates.com",
      tags: ["React.js", "JavaScript", "SCSS", "Redux"],
    },
    {
      name: "BIRS Payment Portal",
      img: project3,
      link: "https://benue.igrportal.com/login",
      disc: "Benue State Internal Revenue Service (BIRS) payment portal make tax collection and payments easy for both the the government and citizen of Benue State.",
      tags: ["React.js", "JavaScript", "SCSS"],
    },
    {
      name: "Agrobond",
      img: project6,
      link: "https://focused-curran-e5610c.netlify.app/",
      tags: ["React.js", "JavaScript", "SCSS"],
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="workPage">
      <div className="workPage__main">
        <h2 className="workPage__main__title">Latest Work</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 750: 1, 900: 2 }}>
          <Masonry gutter="2rem">
            {workList.map((item) => {
              return (
                <a href={item.link} target="_blank" rel="noreferrer">
                  <div key={item.name} className="workPage__item">
                    <img
                      className="workPage__item__img"
                      src={item.img}
                      alt=""
                    />
                    <h3 className="workPage__item__title">{item.name}</h3>
                    <div className="workPage__item__tags">
                      {item.tags.map((tag) => {
                        return (
                          <p>
                            <span>{tag}</span>
                          </p>
                        );
                      })}
                    </div>
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
