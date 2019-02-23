import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Title from "./components/Title/index.js";
import Scoreboard from "./components/Scoreboard/index.js";
import GameCards from "./components/GameCards/index.js";


class App extends Component {

  state = {
    data,
    // message: "Click card to begin!",
    score: 0,
    // topScore: 0
  }

  componentDidMount() {
    this.setState({
      data: this.shuffleCards(this.state.data)
    })
    // console.log(data);
  }

  shuffleCards = (data) => {
    // JavaScript randomize array function
    data.sort(function (a, b) { return 0.5 - Math.random() });
    return data;
  }

  handleClick = (id) => {
    console.log(id)

    let guessedCorrectly = false;

    // updatedData will be the data array with updated clicked properties
    const updatedData = this.state.data.map(card => {
      if (card.id === id) {
        if (!card.clicked) {
          card.clicked = true;
          guessedCorrectly = true;
        }
      }
      return card
    });

    // if guessedCorrectly = true, run the correctGuess function,
    // else run the wrongGuess function
    guessedCorrectly ? this.correctGuess(updatedData) : this.wrongGuess(updatedData);
  };

  correctGuess = (updatedData) => {
    let newScore = this.state.score;
    newScore++;

    this.setState({
      data: this.shuffleCards(updatedData),
      score: newScore,
    })
  }

  // restarts the game with fresh data
  wrongGuess = (updatedData) => {
    this.setState({
      data: this.resetCards(updatedData),
      score: 0
    })
  }

  // resets all the clicked properties to false
  resetCards = (data) => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    // console.log(data);
    // console.log(resetData);
    return this.shuffleCards(resetData);
  };


  render() {
    return (
      <div>
        <Title />

        <Scoreboard />

        {this.state.data.map(card => (
          <GameCards
            key={card.id}
            id={card.id}
            image={card.img}
            handleClick={this.handleClick}
          />

        ))}

      </div>
    );
  }
}

export default App;
