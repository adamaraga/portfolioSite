import React, { useState } from "react";
import { Button } from "../common/Button";
import expIcon from "../asset/images/svg/experience.svg";
import skillIcon from "../asset/images/svg/certificates.svg";
import certIcon from "../asset/images/svg/skills.svg";
import arrowIcon from "../asset/images/svg/arrowRight.svg";
import Modal from "./Modal";
import ExperienceModal from "./ExperienceModal";
import CertificatesModal from "./CertificatesModal";
import SkillsModal from "./SkillsModal";

const About = () => {
  const [openModal, setopenModal] = useState(false);
  const [openModalCert, setopenModalCert] = useState(false);
  const [openModalSkills, setopenModalSkills] = useState(false);

  const handleDownload = () => {
    // using Java Script method to get PDF file
    fetch("AdamAragaResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "AdamAragaResume.pdf";
        alink.click();
      });
    });
  };

  return (
    <section id="about" className="about">
      <Modal
        title="Experience"
        openModal={openModal}
        setOpenModal={setopenModal}
      >
        <ExperienceModal />
      </Modal>
      <Modal
        title="Certificates"
        openModal={openModalCert}
        setOpenModal={setopenModalCert}
        width="60rem"
      >
        <CertificatesModal />
      </Modal>
      <Modal
        title="Skills"
        openModal={openModalSkills}
        setOpenModal={setopenModalSkills}
        width="60rem"
      >
        <SkillsModal />
      </Modal>

      <h2 className="about__title">About Me</h2>
      <p className="about__disc">
        Dedicated Senior Front-End Software Engineer with over 5 years of
        hands-on expertise in crafting exceptional user interfaces and driving
        web application development. Proficient in a wide range of front-end
        technologies. Adept at translating complex design concepts into
        responsive, high-performance, and visually appealing user experiences.
        Proven track record of leading cross-functional teams, streamlining
        development processes, and consistently delivering projects on time and
        within scope.
      </p>

      <Button onClick={handleDownload}>Download CV</Button>

      <div className="about__list">
        <div className="about__list__item">
          <img src={expIcon} alt="" />
          <h3>Experience</h3>

          <span
            className="about__list__item__btn"
            onClick={() => setopenModal(true)}
          >
            view <img src={arrowIcon} alt="" />
          </span>
        </div>

        <div className="about__list__item">
          <img src={certIcon} alt="" />
          <h3>Certificates</h3>

          <span
            className="about__list__item__btn"
            onClick={() => setopenModalCert(true)}
          >
            view <img src={arrowIcon} alt="" />
          </span>
        </div>

        <div className="about__list__item">
          <img src={skillIcon} alt="" />
          <h3>Skills</h3>

          <span
            className="about__list__item__btn"
            onClick={() => setopenModalSkills(true)}
          >
            view{" "}
            <img
              // className="about__list__item__btn__img"
              src={arrowIcon}
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
