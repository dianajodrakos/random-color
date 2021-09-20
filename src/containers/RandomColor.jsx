/* eslint-disable max-len */
import React, { Component } from 'react';
import Display from '../components/random-color/Display';
import { randomColor } from 'randomcolor';

export default class RandomColor extends Component {

state = {
  color: randomColor(),
}

handleColorChange = () => {
  const newColor = randomColor();
  if(newColor === this.state.color) {
    this.setState({ color: 'url(https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg)' });
  } else {
    this.setState({ color: newColor });
  }
}

componentDidMount() {
  setInterval(() => this.handleColorChange(), 1000);
}

render() {

  return (
    <div>
      <Display color={this.state.color} />
    </div>
  );
}
}
