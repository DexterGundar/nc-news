import { NavLink } from "react-router-dom";
import Header from "./Header";

export default function Nav() {
  return (
    <>
      <nav className="Nav">
        <h1>The Best News</h1>
        <ul>
          <li>
            <NavLink to="/">All articles</NavLink>
          </li>
          <li>
            <NavLink to="/coding">Coding</NavLink> |{" "}
            <NavLink to="/football">Football</NavLink> |{" "}
            <NavLink to="/cooking">Cooking</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
