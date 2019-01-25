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
      scale: 1,
      dragging: false,
      zIndex: 0,
      color: 'lightgrey',
    }

    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseUp = this.handleMouseUp.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.resetPosition = this.resetPosition.bind(this)
    this.animateReset = this.animateReset.bind(this)
  }

  handleMouseDown (e) {
    console.log('mouse down!!!!')
    console.log(e)
    if (this.props.active) {
      this.setState({
        dragging: true,
        scale: this.props.active ? 1.1 : 1,
        zIndex: 100 - this.props.index,
      })
    }
  }
  handleMouseUp (e) {
    this.setState({ dragging: false, scale: 1 })
    const { a, b, c } = this.props.info

    if (this.state.x > window.innerWidth * 0.2 || this.state.x < window.innerWidth * -0.2) {
      this.props.handlePick(this.props.index - 1)
    } else {
      this.resetPosition()
    }
    
    if (this.state.x > window.innerWidth * 0.2) {
      this.props.updateScore(a, b, c)
      // this.props.updateScore(this.props.a)
    } else if (this.state.x < window.innerWidth * -0.2) {
      this.props.updateScore(a, b, c)
    }
  }


  animateReset ({ target, tick }) {
    const newPos = this.state.x + tick
    this.setState({
      x: newPos,
      r: 0,
    })
    if (tick < 0 && this.state.x > target) {
      window.requestAnimationFrame(() => {
        this.animateReset({ tick, target })
      })
    } else if (tick > 0 && this.state.x < target) {
      window.requestAnimationFrame(() => {
        this.animateReset({ tick, target })
      })
    } else {
      this.setState({ x: target })
    }
  }

  resetPosition () {
    // const tick = 0 - this.state.x
    // const target = 0 - this.state.w / 2
    // this.setState({
    //   x: 0 - this.state.w / 2,
    //   r: 0,
    // })
    const target = 0 - this.state.w / 2
    const tick = this.state.x > target ? -30 : 30
    this.animateReset({ tick, target })
  }

  handleMouseMove (e) {
    if (this.state.dragging && this.props.active) {
      const x = e.pageX - (window.innerWidth / 2) - (this.state.w / 2)
      const r = ((e.pageX / (window.innerWidth / 2)) - 1) * 30
      this.setState({ x, r })

      if (this.state.x > (window.innerWidth * 0.2) - (this.state.w / 2)) {
        this.setState({ color: '#bada55' })
      } else if (this.state.x < (window.innerWidth * -0.2) - (this.state.w / 2)) {
        this.setState({ color: '#d11' })
      } else {
        this.setState({ color: 'lightgrey' })
      }
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
          scale(${this.state.scale})
        `,
        zIndex: this.state.zIndex,
        background: this.state.color,
      }}
      onMouseDown={ this.handleMouseDown }
      onMouseUp={ this.handleMouseUp }
      onMouseMove={ this.handleMouseMove }
    >
      <h3>{ this.props.info.title }</h3>
      <p>{ `Card ${this.props.active}` }</p>
    </div>
  }
}

export default Card
