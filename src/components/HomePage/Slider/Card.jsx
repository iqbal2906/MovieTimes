import React from "react";
import "./card.css";

const Card = ({ poster, title }) => {
  return (
    <>
      <div className="card__slider">
        <img className="card__poster" src={poster} alt="" />
        {/* <h1 className="title">{title}</h1> */}
      </div>
    </>
  );
};

export default Card;
