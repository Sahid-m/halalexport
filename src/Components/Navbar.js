import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Stylesheets/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const showNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const hideNavbar = () => {
    setIsNavOpen(false);
  };

  const colorNavbar = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }

    console.log(window.scrollY);
  };

  window.addEventListener("scroll", colorNavbar);

  return (
    <header className={`fixed-top ${navbar ? "active" : " "}`}>
      <Link className="NavLogo" to="/">
        <h3>Halal Exports</h3>
      </Link>
      <nav className={` ${isNavOpen ? "responsive_nav" : ""}   `}>
        <Link className="NavLinks" onClick={hideNavbar} to="/">
          Home
        </Link>
        <Link className="NavLinks" onClick={hideNavbar} to="/products">
          Products
        </Link>
        <Link className="NavLinks" onClick={hideNavbar} to="/company">
          Company Profile
        </Link>
        <Link className="NavLinks" onClick={hideNavbar} to="/contact">
          Contact
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
