import React, { Component } from 'react';
import Display from '../components/random-color/Display';
import { randomColor } from 'randomcolor';

export default class RandomColor extends Component {

state = {
  color: randomColor(),
}

render() {

  return (
    <div>
      <Display color={this.state.color} />
    </div>
  );
}
}
