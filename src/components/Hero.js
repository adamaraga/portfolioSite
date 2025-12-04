import React from "react";
import { Button } from "../common/Button";
import Star from "../common/Star";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__left">
        <h1>Hi, I’m Adam a Senior Full-Stack Developer</h1>
        <a href="#contact">
          <Button>Contact</Button>
        </a>
      </div>

      <div className="hero__right">
        <Star />
        <img
          src="https://res.cloudinary.com/adamworkimages/image/upload/v1722283040/portfolio/new%20portfolio/e3xmeoxtwn6uzlsupb1j.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
