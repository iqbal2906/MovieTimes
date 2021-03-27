import React, { useState, useEffect } from "react";
import { fetchCategories } from "../../../service";
// import { Link } from "react-router-dom";
import "./dropdown.css";

const Dropdown = () => {
  const [click, setClick] = useState(false);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setGenres(await fetchCategories());
    };

    fetchApi();
  }, []);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
        onClick={handleClick}
      >
        {genres && genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </>
  );
};

export default Dropdown;
