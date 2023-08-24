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
    fetch("Resume(Adam Araga A.).pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume(Adam Araga A.).pdf";
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
        width="600rem"
      >
        <CertificatesModal />
      </Modal>
      <Modal
        title="Skills"
        openModal={openModalSkills}
        setOpenModal={setopenModalSkills}
        width="600rem"
      >
        <SkillsModal />
      </Modal>

      <h2 className="about__title">About Me</h2>
      <p className="about__disc">
        Highly motivated and skilled senior Front-End Engineer with 3+ years of
        expertise in developing impactful web and mobile applications. I combine
        technical proficiency and creative thinking to deliver cutting-edge
        software solutions that captivate customers and drive business results.
        Proficient in using advanced technologies and design principles to
        create intuitive and user-friendly experiences.
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
