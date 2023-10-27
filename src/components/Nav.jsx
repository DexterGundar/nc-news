import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
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
