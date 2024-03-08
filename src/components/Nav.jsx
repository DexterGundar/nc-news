import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <nav className={`${show ? "nav" : "nav-hidden"}`}>
        <h1>The Best News</h1>
        <ul>
          <li>
            <NavLink to="/">All articles</NavLink> |{" "}
            <NavLink to="/coding">Coding</NavLink> |{" "}
            <NavLink to="/football">Football</NavLink> |{" "}
            <NavLink to="/cooking">Cooking</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
