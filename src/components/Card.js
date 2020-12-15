import React from "react";
//cards of the titan photos
function Card(props) {
  return (
    <div>
      <img
        src={props.image}
        alt="eren"
        // role="img"
        //   onClick={() => props.handleClick(props.id)}
        // style={{ backgroundImage: `url("${props.image}")` }}
      />
    </div>
  );
}

export default Card;
