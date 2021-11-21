import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Películas",
    path: "/movie",
  },
  {
    display: "Series",
    path: "/tv",
  },
];

export const NavBar = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const activeNav = headerNav.findIndex((nav) => nav.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);

    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="Logo moviesApp" />
          <Link to="/">goMovie</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((nav, i) => (
            <li key={i} className={i === activeNav ? "active" : ""}>
              <Link to={nav.path}>{nav.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
