// import { render } from "@testing-library/react";
import React, { Component } from "react";
import Card from "./Card";
import "./Game.css";
import Navbar from "./Navbar";
import Score from "./Score";
import data from "../data.json";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      ids: [],
      count: 0,
      message: "Pick a Titan!"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //function when click, increase score
  handleClick = (event) => {
    const id = event.target.id;
    this.shuffle(data);
    if (id !== "" && this.state.ids.indexOf(id) === -1) {
      this.state.ids.push(id);

      this.setState((prev) => ({
        count: prev.count + 1,
        message: "Pick an unpicked card"
      }));
      if (this.state.count === 11) {
        this.setState({ message: "You Win!" });
      }
    } else {
      // console.log("no nothing");
      this.setState({
        message: "You lose, try again!",
        count: 0,
        ids: []
      });
    }
  };

  //function to shuffle the card after being chosen
  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  render() {
    return (
      <div>
        <Navbar />
        <Score message={this.state.message} />
        <h3 style={{ textAlign: "center" }}>Score: {this.state.count}</h3>

        <div className="container">
          <button
            style={{ outline: "none" }}
            className="child"
            onClick={this.handleClick}
          >
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
