import React, { useState } from "react";
import Logo from "../../assets/moovietime-logo.svg";
import Grid from "../../assets/grid-icon.svg";
import Search from "../../assets/search-icon.svg";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import "./navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav>
      <div className="nav__container">
        <Link to="/" onClick={closeMobileMenu}>
          <img className="nav__logo" src={Logo} alt="" />
        </Link>
        <div className="search__container">
          <input className="nav__search" type="text" placeholder="Find movie" />
          <img className="search__icons" src={Search} alt="" />
        </div>
        <div className="nav__link">
          <ul className={click ? "menu__items active" : "menu__items"}>
            <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              <img src={Grid} alt="" />
              <Link className="li__categories" to="/categories">
                categories
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link className="li__movies" to="/movies">
                movies
              </Link>
            </li>
            <li>
              <Link className="li__tvshows" to="/tvshows">
                tvshows
              </Link>
            </li>
            <li>
              <Link className="li__login" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
