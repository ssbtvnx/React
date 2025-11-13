import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/items">Items</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
