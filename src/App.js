import React, { Component } from 'react';
import data from "./utils/data.json";
import Title from "./components/Title/index.js";
import Scoreboard from "./components/Scoreboard/index.js";
import GameCards from "./components/GameCards/index.js";


class App extends Component {

  state = {
    data,
    score: 0,
    topscore: 0,
    // alert: "Click card to begin!",
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
    // console.log(id);
    let newClicked = false;

    const newState = this.state.data.map(card => {
      if (card.id === id) {
        if (!card.clicked) {
          card.clicked = true;
          newClicked = true;
        }
      }
      return card;
    }); 

    // if guessedCorrectly = true, run the correctGuess function,
    // else run the wrongGuess function
    newClicked ? this.correctGuess(newState) : this.wrongGuess(newState);
  }

  correctGuess = (newState) => {
    let newScore = this.state.score;
    newScore++;

    // checks to see if score is higher than the topscore, then updates state
    let topscore = Math.max(newScore, this.state.topscore);

    this.setState({
      data: this.shuffleCards(newState),
      score: newScore,
      topscore: topscore
    })
  }

  // restarts the game with fresh data
  wrongGuess = (newState) => {
    this.setState({
      data: this.resetCards(newState),
      score: 0
    })
  }

  // resets all the clicked properties to false
  resetCards = (data) => {
    const resetData = data.map(card => ({ ...card, clicked: false }));
    // console.log(data);
    // console.log(resetData);
    return this.shuffleCards(resetData);
  };

  render() {
    return (
      <div>
        <Title />

        <Scoreboard 
          score={this.state.score}
          topscore={this.state.topscore}
        />

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
