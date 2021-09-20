/* eslint-disable max-len */
import React, { Component } from 'react';
import Display from '../components/random-color/Display';
import { randomColor } from 'randomcolor';

export default class RandomColor extends Component {

state = {
  color1: randomColor(),
  color2: randomColor(),
  color3: randomColor(),
}

handleColorChange = () => {
  const newColor = randomColor();
  if(newColor === this.state.color) {
    this.setState({ color: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
  } else {
    this.setState(
      { 
        color3: this.state.color2,
        color2: this.state.color1, 
        color1: newColor,
      });
  }
}

componentDidMount() {
  setInterval(() => this.handleColorChange(), 1000);
}

render() {

  return (
    <div>
      <Display 
        color1={this.state.color1}
        color2={this.state.color2} 
        color3={this.state.color3}  />
    </div>
  );
}
}
