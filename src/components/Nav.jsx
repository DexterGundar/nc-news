import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
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
  );
}
