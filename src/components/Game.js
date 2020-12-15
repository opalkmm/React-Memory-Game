// import { render } from "@testing-library/react";
import React, { Component } from "react";
import Card from "./Card";
import data from "../data.json";

class Game extends Component {
  state = {
    data
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <p>is it working?</p>
        <div>
          {this.state.data.map((item) => (
            <Card key={item.id} id={item.id} image={item.image} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
