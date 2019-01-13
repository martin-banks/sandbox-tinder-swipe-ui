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
    }
    this.setPick = this.setPick.bind(this)
  }

  setPick (x) {
    this.setState({ activeCard: x })
  }

  render() {
    return (
      <div className="App">
        <div className="cardWrapper">
        {
          this.state.cards
            .map((c, i, a) => <Card
              active={ this.state.activeCard === i }
              info={ c }
              handlePick={ this.setPick }
            ></Card>)
        }
        </div>
      </div>
    )
  }
}

export default App
