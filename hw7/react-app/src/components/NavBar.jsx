import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export default function NavBar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/items">Items</NavLink>

      {!user ? (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
    </nav>
  );
}

