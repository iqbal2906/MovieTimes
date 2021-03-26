import React from "react";
import Logo from "../../assets/moovietime-logo.svg";
import Grid from "../../assets/grid-icon.svg";
import Search from "../../assets/search-icon.svg";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img className="nav__logo" src={Logo} alt="" />
        </Link>
        <div>
          <input className="nav__search" type="text" placeholder="Find movie" />
          <img className="search__icons" src={Search} alt="" />
        </div>
        <div className="nav__link">
          <ul className="ul__categories">
            <img src={Grid} alt="" />
            <li className="li__categories">categories</li>
          </ul>
          <ul>
            <li>
              <Link className="ul__movies" to="/movies">
                movies
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="ul__tvshows" to="/tvshows">
                tv shows
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className="ul__login" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
