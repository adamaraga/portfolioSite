import React from "react";
import { Button } from "../common/Button";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section className="work">
      <h2 className="work__title">Work/Portfolio</h2>

      <div className="work__main">
        <div className="work__main__left">
          <img
            className="work__main__left__img"
            src="https://res.cloudinary.com/adamworkimages/image/upload/f_auto,q_auto/v1/portfolio/new%20portfolio/p7mxcbueyrefirts5kjm"
            alt=""
          />
        </div>

        <div className="work__main__right">
          <img
            src="https://res.cloudinary.com/adamworkimages/image/upload/v1691066162/portfolio/portfolio_otu60m.png"
            alt=""
          />
        </div>
      </div>
      <Link to="/work">
        <Button> More Details</Button>
      </Link>
    </section>
  );
};

export default Work;
