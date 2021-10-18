/* eslint-disable max-len */
import React, { Component } from 'react';
import Display from '../components/random-color/Display';
import { randomColor } from 'randomcolor';
import { timer } from '../utils/timer.js';

export default class RandomColor extends Component {
  state = {
    color1: randomColor(),
    color2: randomColor(),
    color3: randomColor(),
    color4: randomColor(),
    color5: randomColor(),
    countdown: timer(),
  };

  handleColorChange = () => {
    const newColor = randomColor();
    this.setState({
      color5: this.state.color4,
      color4: this.state.color3,
      color3: this.state.color2,
      color2: this.state.color1,
      color1: newColor,
      countdown: timer(),
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.handleColorChange();
    }, 1000);
  }

  render() {
    return (
      <div>
        <Display
          color1={this.state.color1}
          color2={this.state.color2}
          color3={this.state.color3}
          color4={this.state.color4}
          color5={this.state.color5}
          countdown={this.state.countdown}
        />
      </div>
    );
  }
}
