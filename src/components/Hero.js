import React from "react";
import { Button } from "../common/Button";
import Star from "../common/Star";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1>Hi, I’m Adam a Senior Frontend Engineer</h1>
        <a href="#contact">
          <Button>Contact</Button>
        </a>
      </div>

      <div className="hero__right">
        <Star />
        <img
          src="https://res.cloudinary.com/adamworkimages/image/upload/v1691066163/portfolio/adam_opjkvf.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
