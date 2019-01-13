import React, { Component } from 'react'

class Card extends Component {
  constructor (props) {
    super(props)

    this.state = {
      x: -100,
      y: -200,
      w: 200,
      h: 400,
      r: !this.props.active ? (Math.random() * 40) + -20 : 0,
      dragging: false,
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseDown (e) {
    console.log('mouse down!!!!')
    console.log(e)
    this.setState({ dragging: true })
  }
  handleMouseUp (e) {
    this.setState({ dragging: false })
  }


  handleMouseMove (e) {
    if (this.state.dragging) {
      const x = e.pageX - (window.innerWidth / 2) - (this.state.w / 2)
      const r = ((e.pageX / (window.innerWidth / 2)) - 1) * 30
      this.setState({ x, r })
      console.log({ x, r })
    }
  }

  componentWillMount () {
    // this.setState({ 
    //   r: 
    // })
  }

  render () {
    return <div
      className="card"
      style={{
        width: `${this.state.w}px`,
        height: `${this.state.h}px`,
        left: `${0}px`,
        top: `${0}px`,
        transform: `
          translate(${this.state.x}px, ${this.state.y}px)
          rotate(${this.state.r}deg)
        `,
      }}
      onMouseDown={ this.handleMouseDown }
      onMouseUp={ this.handleMouseUp }
      onMouseMove={ this.handleMouseMove }
    >{ `Card ${this.props.active}` }</div>
  }
}

export default Card
