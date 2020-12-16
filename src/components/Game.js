// import { render } from "@testing-library/react";
import React, { Component } from "react";
import Card from "./Card";
import "./Game.css";
import Navbar from "./Navbar";
// import Score from "./Score";
import data from "../data.json";
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      count: 1,
      message: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //function when click, increase score
  handleClick = (event) => {
    const id = event.target.id;
    this.setState((prev) => ({ count: prev.count + 1 }));

    console.log(this.state.count);
    console.log(id);
  };

  render() {
    // console.log(this.state.data);
    return (
      <div>
        <Navbar />
        {/* <Score /> */}
        <h1 style={{ textAlign: "center" }}>Score: {this.state.count}</h1>

        <div className="container">
          <button onClick={this.handleClick}>
            {this.state.data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                onClick={this.handleClick}
              />
            ))}
          </button>
        </div>
      </div>
    );
  }
}

export default Game;
