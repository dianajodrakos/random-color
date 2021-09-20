import React, { Component } from 'react';
import Display from '../components/random-color/Display';

export default class RandomColor extends Component {

state = {
  color: 'red'
}

render() {

  return (
    <div>
      <Display color={this.state.color} />
    </div>
  );
}
}
