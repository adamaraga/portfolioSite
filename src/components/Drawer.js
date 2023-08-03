import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Drawer = ({ setShowDrawer, showDrawer }) => {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/#about" },
    { name: "Work", url: "/work" },
  ];

  return (
    <div className={showDrawer ? "drawer open" : "drawer"}>
      <ul onClick={() => setShowDrawer(false)} className="drawer__list">
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

      <div className="drawer__btn">
        <HashLink smooth to="/#contact">
          <button className="navBar__right__btn">Hire me</button>
        </HashLink>
      </div>
    </div>
  );
};

export default Drawer;
