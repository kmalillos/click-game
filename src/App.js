import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Title from "./components/Title/index.js";
import Scoreboard from "./components/Scoreboard/index.js";
import GameCards from "./components/GameCards/index.js";


class App extends Component {

  state = {
    data,
    score: 0,
    topScore: 0
  }

  componentDidMount() {   
    this.setState({
      data: this.shuffleCards(this.state.data)
    }) 
    // console.log(data);
  }

  shuffleCards = (data) => {
    data.sort(function(a, b){return 0.5 - Math.random()});
    return data;
  }

  handleClick = (id) => {
    // check id against data
    // if clicked, run incorrect guess func
    // else, run correct guess func
  }

  // correctFunc() {
  //   // update score
  //   // id update to clicked: true
  //   // call randomizeData
  // }

  // incorrectFunc() {
  //   // update score to 0;
  //   // reset data func: reset imgs to clicked: false
  //   // call randomizeData
  // }

  // resetDataFunc() {
  //   // reset imgs to clicked: false
  //   // shuffle array
  //  // update state
  // }

  
  render() {
    return (
      <div>
        <Title/>

        <Scoreboard/>

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
