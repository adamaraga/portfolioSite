import React from "react";
import portfolioIcon from "../asset/images/portfolio.png";
import groupImg from "../asset/images/groupWork.png";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="work">
      <h2 className="work__title">Work/Portfolio</h2>

      <div className="work__main">
        <div className="work__main__left">
          <img className="work__main__left__img" src={groupImg} alt="" />
        </div>

        <div className="work__main__right">
          <img src={portfolioIcon} alt="" />
        </div>
      </div>
      <Link to="/work">
        <Button> More Details</Button>
      </Link>
    </section>
  );
};

export default Work;
