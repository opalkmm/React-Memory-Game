import React from "react";
import * as ReactBootstrap from "react-bootstrap";
//cards of the titan photos

function Score(props) {
  const style = {
    fontWeight: "bold",
    fontFamily: "Arial",
    textAlign: "center",
    color: "white"
  };
  const jumbotron = {
    height: 7,
    // fluid: true,
    background:
      "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(198,70,252,0.6783088235294117) 100%)"
  };
  return (
    <ReactBootstrap.Jumbotron style={jumbotron}>
      <div>
        <h1 style={style}>{props.message}</h1>
      </div>
    </ReactBootstrap.Jumbotron>
  );
}

export default Score;
