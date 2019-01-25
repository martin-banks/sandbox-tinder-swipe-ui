import React, { Component } from 'react'
import './App.css'

import Card from './components/card'

class App extends Component {
  constructor (props) {
    super(props)
    const cardInfo = [
      {
        name: 'First Card',
        a: 1,
        b: 0,
        c: -1,
      },
      {
        name: 'Second Card',
        a: 0,
        b: 1,
        c: 1,
      },
      {
        name: 'Third Card',
        a: -1,
        b: 1,
        c: 0,
      },{
        name: 'Fourth Card',
        a: 1,
        b: 1,
        c: 1,
      },
      {
        name: 'Fifth Card',
        a: 0,
        b: -1,
        c: -1,
      }
    ]
    const cardTotal = cardInfo.length
    this.state = {
    //   cards: [... new Array(cardTotal)]
    //     .map((c, i) => (
    //       {
    //         title: `Card ${i}`,
    //         index: i,
    //         info: cardInfo[i]
    //       }
    //     )),
      activeCard: cardTotal - 1,
      score: { a: 0, b: 0, c: 0 },
    // }
      cards: [
        {
          title: 'First Card',
          a: 3,
          b: 0,
          c: 1,
        },
        {
          title: 'Second Card',
          a: 2,
          b: 3,
          c: 3,
        },
        {
          title: 'Third Card',
          a: 0,
          b: 1,
          c: 3,
        },{
          title: 'Fourth Card',
          a: 1,
          b: 1,
          c: 2,
        },
        {
          title: 'Fifth Card',
          a: 0,
          b: 3,
          c: 1,
        },
      ],
    }
    this.setPick = this.setPick.bind(this)
    this.counter = this.counter.bind(this)
  }

  setPick (x) {
    this.setState({ activeCard: x })
  }

  counter (a, b, c) {
    // const newScore = this.state.score + val
    console.log(a,b,c)
    const newScore = this.state.score
    newScore.a += a
    newScore.b += b
    newScore.c += c

    this.setState({ score: newScore })
  }

  render() {
    return (
      <div className="App">
        <h1>Score: { JSON.stringify(this.state.score, 'utf-8') }</h1>
        <div className="cardWrapper">
        {
          this.state.cards
            .map((c, i, a) => <Card
              key={ `card-${i}` }
              active={ this.state.activeCard === i }
              info={ c }
              index={ i }
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
