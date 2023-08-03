import React from "react";
import { Button } from "../common/Button";
import myImg from "../asset/images/adam.jpg";
import Star from "../common/Star";
// import myImg from "../asset/images/profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1>Hi, I’m Adam a Frontend Engineer</h1>
        <a href="#contact">
          <Button>Contact</Button>
        </a>
      </div>

      <div className="hero__right">
        <Star />
        <img src={myImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
