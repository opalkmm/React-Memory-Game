import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const navBar = () => {
  return (
    <>
      <ReactBootstrap.Navbar bg="dark" variant="dark">
        <ReactBootstrap.Navbar.Brand>
          Pick the tians that are not previously clicked
        </ReactBootstrap.Navbar.Brand>
      </ReactBootstrap.Navbar>
    </>
  );
};
export default navBar;
