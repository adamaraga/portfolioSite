import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Work from "../components/Work";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
