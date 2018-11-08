import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { WelcomeMessage } from './components/WelcomeMessage.js';

class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage></WelcomeMessage>
      </div>
    );
  }
}

export default App;
