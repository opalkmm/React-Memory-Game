import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const navBar = () => {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand>
          <img
            src="https://media.giphy.com/media/twXzhpNhyizWU/giphy.gif"
            alt="magical-girl-icon"
            height="30px"
            width="30px"
          ></img>
          <span> memory game </span>
        </ReactBootstrap.Navbar.Brand>
      </ReactBootstrap.Navbar>
    </>
  );
};
export default navBar;
