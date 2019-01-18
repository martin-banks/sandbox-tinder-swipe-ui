import React, { Component } from 'react'
import './App.css'

import Card from './components/card'

class App extends Component {
  constructor (props) {
    super(props)
    const cardTotal = 5
    this.state = {
      cards: [... new Array(cardTotal)]
        .map((c, i) => (
          {
            title: `Card ${i}`,
            index: i,
          }
        )),
      activeCard: cardTotal - 1,
      score: 0,
    }
    this.setPick = this.setPick.bind(this)
    this.counter = this.counter.bind(this)
  }

  setPick (x) {
    this.setState({ activeCard: x })
  }

  counter (val) {
    const newScore = this.state.score + val
    this.setState({ score: newScore})
  }

  render() {
    return (
      <div className="App">
        <h1>Score: { this.state.score }</h1>
        <div className="cardWrapper">
        {
          this.state.cards
            .map((c, i, a) => <Card
              key={ `card-${i}` }
              active={ this.state.activeCard === i }
              info={ c }
              handlePick={ this.setPick }
              updateScore={ this.counter }
            ></Card>)
        }
        </div>
      </div>
    )
  }
}

export default App
