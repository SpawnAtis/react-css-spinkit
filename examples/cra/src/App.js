import React, { Component } from 'react';
import { Circle, Facebook, Ring, Ripple } from 'react-css-spinkit'

class App extends Component {
  render() {
    return (
      <div style={{ backgroundColor: '#FFB969'}}>
        <Circle />
        <Facebook />
        <Ring />
        <Ripple />
      </div>
    );
  }
}

export default App;
