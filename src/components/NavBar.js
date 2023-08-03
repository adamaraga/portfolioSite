import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = ({ setShowDrawer, showDrawer }) => {
  const [addShadow, setAddShadow] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position >= 80 && !addShadow) {
      setAddShadow(true);
    } else {
      setAddShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Work", url: "/work" },
  ];

  return (
    <nav className={addShadow ? "navBar addShadow" : "navBar "}>
      <div className="navBar__left">
        <Link to="/">
          <div className="navBar__left__logo">
            <span>A</span>
            Dev
          </div>
        </Link>
      </div>
      <div className="navBar__center">
        <ul>
          {links.map((link, i) => {
            return (
              <li key={i}>
                {i === 1 ? (
                  <HashLink smooth to="/#about">
                    About
                  </HashLink>
                ) : (
                  <Link
                    className={pathname === link.url ? "active" : ""}
                    to={link.url}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="navBar__right">
        <HashLink smooth to="/#contact">
          <button className="navBar__right__btn">Hire me</button>
        </HashLink>
      </div>
      <div
        onClick={() => setShowDrawer((curr) => !curr)}
        className={showDrawer ? "navBar__menuIcon open" : "navBar__menuIcon"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default NavBar;
