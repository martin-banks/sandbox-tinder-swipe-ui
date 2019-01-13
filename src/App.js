import React, { Component } from 'react'
import './App.css'

import Card from './components/card'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cards: [... new Array(5)]
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  handleMouseDown (e) {
    e.target.style.background = 'red'
  }
  render() {
    return (
      <div className="App">
        <div className="cardWrapper">
        {
          this.state.cards
            .map((c, i, a) => <Card active={ a.length === i + 1 }></Card>)
        }
        </div>
      </div>
    )
  }
}

export default App
