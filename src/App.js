import React, { Component } from 'react';
import './App.css';
import data from "./data.json";
import Title from "./components/Title/index.js"
import GameCards from "./components/GameCards/index.js"


class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  }

  componentDidMount() {   
    this.setState({
      data: this.randomizeData(this.state.data)
    }) 
    // console.log(data);
  }

  randomizeData = (data) => {
    data.sort(function(a, b){return 0.5 - Math.random()});
    return data;
  }

  handleClick = (id) => {
    console.log(id)
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

        {this.state.data.map(item => (
          <GameCards
            key={item.id}
            id={item.id}
            image={item.img}
            handleClick={this.handleClick}
          />
          
        ))}

      </div>
    );
  }
}

export default App;
