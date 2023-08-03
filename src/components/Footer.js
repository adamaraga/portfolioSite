import React from "react";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer">
      <div className="footer__line"></div>
      <div className="footer__info">
        <p>© {year} All Right Reserve</p>
        <p>Developed by Adam Abdullahi Araga</p>

        <div className="footer__info__links">
          <a href="mailto:aragaadam@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/adam-araga-b80340231/">
            LinkedIn
          </a>
          <a href="https://github.com/adamaraga">Github</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
