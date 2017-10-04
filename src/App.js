import React, { Component } from 'react';
import './App.scss';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Routes />
      </div>
    );
  }
}

export default App;
