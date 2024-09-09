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
    fetch("AdamAbdullahiAResume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "AdamAbdullahiAResume.pdf";
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
        Highly skilled Full Stack Developer with over 4 years of professional
        experience designing, developing, and deploying robust web and mobile
        applications. Proficient in both front-end and back-end technologies,
        with a strong focus on creating user-friendly interfaces and scalable
        architectures. Adept at collaborating with cross-functional teams to
        deliver innovative solutions that meet client requirements and exceed
        expectations.
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
