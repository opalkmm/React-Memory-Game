import React from "react";
import "./Card.css";

//cards of the titan photos
function Card(props) {
  return (
    <div>
      <img
        className="photo"
        src={props.image}
        alt={props.name}
        id={props.id}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default Card;
